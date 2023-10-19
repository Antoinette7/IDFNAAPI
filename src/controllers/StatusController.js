import statusInfo from "../model/statusModels";

// create

export const createInfo = async (req, res) => {
  const { fname, lname, email, Age } = req.body;
  try {
    const make = await statusInfo.create({
      fname,
      lname,
      email,
      Age,
    });

    return res.status(200).json({
      statusbar: "Success",
      message: "Congratration You Made it",
      data: make,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Create Infomation",
      error: error.message,
    });
  }
};

// getAll data
export const getAll = async (req, res) => {
  try {
    const getall = await statusInfo.find();
    return res.status(200).json({
      status: "Success",
      message: "Congratration You Made It",
      data: getall,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "YOOOOOO Wapi",
      error: error.message,
    });
  }
};

// getOne

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const getall = await statusInfo.findById(id);
    if (!getAll) {
      return res.status(404).json({
        message: "Id Not Found",
      });
    }
    return res.status(200).json({
      status: "Success",
      message: "Congratration You Made It",
      data: getall,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "YOOOOOO Wapi",
      error: error.message,
    });
  }
};

// delete

export const deleteInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await statusInfo.findById(id);
    if (!getId)
      return res.status(404).json({
        message: "Id not Found",
      });

    const delId = await statusInfo.findByIdAndDelete(id);
    return res.status(201).json({
      statusbar: "Succcess",
      message: "Information Deleteded welll!! ",
      data: delId,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "YOOOOOO Wapi",
      error: error.message,
    });
  }
};

// update

export const updatInfo = async (req, res) => {
  const { fname, lname, email, Age } = req.body;
  try {
    const { id } = req.params;
    const getId = await statusInfo.findById(id);
    if (!getId)
      return res.status(404).json({
        message: "Id not Found",
      });
    const make = await statusInfo.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
      Age,
    });

    return res.status(200).json({
      statusbar: "Success",
      message: "Information Updated Well",
      data: make,
    });
  } catch (error) {
    return res.status(500).json({
      statusbar: "Failed",
      message: "Cant Update Infomation",
      error: error.message,
    });
  }
};
