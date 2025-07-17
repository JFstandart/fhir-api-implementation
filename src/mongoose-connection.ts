import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectMongoose = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_CONNECTION_URL! + process.env.MONGO_DB_NAME
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

// Handle Mongoose connection events
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB");
});

mongoose.connection.on("error", (err: any) => {
  console.error("Mongoose connection error:", err);
});

// Optional: Close Mongoose connection when the Node.js process exits
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Mongoose connection disconnected through app termination");
  process.exit(0);
});

export default connectMongoose;
