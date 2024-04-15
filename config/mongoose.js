import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kolleparasrikanth:Srikanth5359$@ecomdb.ndaljpt.mongodb.net/csvUploads');
        console.log("Successfully connected to DB");
    } catch (error) {
        console.error("Error connecting to DB:", error);
    }
};

export default connectDB;
