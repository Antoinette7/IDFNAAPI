import Users from "../models/userModel";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, { genSalt, hash } from "bcrypt";
// Create user
// Define a function to validate the password
function isPasswordValid(password) {
  return password.length >= 8;
}

export const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password, profile } = req.body;
    const userEmail = await Users.findOne({ email: req.body.email });

    if (userEmail) {
      return res.status(400).json({
        status: "400",
        message: "Email Already Exists",
      });
    }

    // Validate password
    if (!isPasswordValid(password)) {
      return res.status(400).json({
        status: "400",
        message: "Your password is not strong enough. It should have at least 8 characters.",
      });
    }

    let result;
    if (req.file) result = await uploadToCloud(req.file, res);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await Users.create({
      firstname,
      lastname,
      email,
      password: hashedPass,
      profile: result?.secure_url,
    });

    return res.status(201).json({
      status: "201",
      message: "User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed To Create User",
      error: error.message,
    });
  }
};

// login
export const login = async (req, res) => {
  try {
    const userLogin = await Users.findOne({
      email: req.body.email,
    });
    if (!userLogin) {
      return res.status(404).json({
        status: "404",
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) {
      return res.status(404).json({
        status: "404",
        message: "Password Incorect",
      });
    }

    const token = await Jwt.sign(
      { id: userLogin._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRE_DATE }
    );
    return res.status(200).json({
      status: "200",
      message: "logedin Sucess",
      users: userLogin,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed To Login",
      error: error.message,
    });
  }
};
//getallusers
export const getalluser = async(req,res)=>{
  try{
const user = await Users.find();
return res.status(200).json({
  status:"200",
  message:"users signedeup successfull",
  data: user,
});
  }
  catch(error)
  {
    return res.status(404).json({
status:"404",
message:"users not found",
    });

  }
};
// delite
export const deletuser =async (req, res)=> {
  try{
const {id} = req.params;
const userd = await Users.findById(id);
if (!userd)
return res.status(404).json({
  status:"404",
  message:"uses not found",
});
const deleteuser = await Users.findByIdAndDelete(id);
return res.status(200).json({
  status:"200",
  message:"user signned deleted successfull",
});

  }
  catch(error){
    return res.status(500).json({
      status:"500",
      message:"user not found",

    });
  

  }
};
//update
export const updateData = async(req,res)=>{
  try{
        const { firstname, lastname,email,password,profile,role,} = req.body;
 const{id} = req.params;
 const use = await Users.findById(id)
 if(!use)
 return res.status(404),json({
status:"404",
message:"users not found",
});


    // Validate password
    if (!isPasswordValid(password)) {
      return res.status(400).json({
        status: "400",
        message: "Your password is not strong enough. It should have at least 8 characters.",
      });
    }

let result;
if (req.file) result = await  uploadToCloud(req.file,res);
const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash(password, salt);
const updatee = await Users.findByIdAndUpdate(id,{
  firstname,
  lastname,
  email,
  password: hashedPass,
  profile:result?.secure_url ||
  "https://res.cloudinary.com/dx5hdez0h/image/upload/v1696595102/cld-sample.jpg",
 role,
});
return res.status(200).json({
  status:"200",
  message:"user update successfully",
  data: updatee,
});
  }
  catch(error){
return res.status(500).json({
  status:"500",
  message:"failed to up date",
  error:error.message,

});

  }
};