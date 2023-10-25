import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import zxcvbn from "zxcvbn";
import validator from "validator";




//import for doc

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// importing routes
// import statusRoutes from "./routes/StatusRoutes"
import blogRoutes from "./routes/blogRoutes"
import userRoutes from "./routes/userRoute";
import commentRoutes from "./routes/commentRoutes";



// configuration

const app = express();
dotenv.config();

//fo documentation
 
const options = {
  definition: {
    openapi : "3.0.0",
    info :{
      title: "My Documention",
      version : "1.0.0.",
    },
    servers: [{
       url:"https://node-app-plsi.onrender.com"
    
    }
  ],
  security: [
    {
      BearerAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  }
  },
  apis: ['./src/Docs/*.js']
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/Docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes

// app.use("/api/klab/info", statusRoutes);
app.use("/api/klab/blog", blogRoutes);
app.use("/api/klab/user",userRoutes);
app.use("/api/klab/comment",commentRoutes);


//
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Sucess",
    Author: "antoinette",
    message: "Welcome to My Api",
  });
});


export default app;

