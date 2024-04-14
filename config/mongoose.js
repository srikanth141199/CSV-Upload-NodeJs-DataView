import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
        console.log("Successfully connected to DB");
    } catch (error) {
        console.error("Error connecting to DB:", error);
    }
};

export default connectDB;
