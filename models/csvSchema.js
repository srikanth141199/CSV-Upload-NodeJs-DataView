import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName: {
      type: String
    },
    filePath : {
      type:String
    },
    file: {
      type: String
    }
  }, {
    timestamps: {
      options: { timeZone: 'Asia/Kolkata' }
    }
  });

  const files = mongoose.model("files", fileSchema);

  export default files;