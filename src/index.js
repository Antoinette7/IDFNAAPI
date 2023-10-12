import app from "./app";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DbConnection)
  .then(() => {
    console.log("Db Connection Sucesfully");
  })
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 4400;

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port:  http://localhost:${PORT}`);
});
