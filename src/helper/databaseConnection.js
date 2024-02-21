import mongoose from "mongoose";

const databaseConnection = mongoose
//   .connect(process.env.DATABASE_URI)
  .connect("mongodb://0.0.0.0:27017/realestate")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Failed to connect DB", err.message);
  });

export default databaseConnection;
