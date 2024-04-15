import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

import files from "../models/csvSchema.js";

//Upload File

export const uploadFile = async (req, res) => {
    try {
        if(!req.file) {
            return res.status(400).send('No files were uploaded.');
        }
        // file is not csv
        if(req.file.mimetype != "text/csv") {
            return res.status(400).send('Select CSV files only.');
        }
        // console.log(req.file);
        let file = await files.create({
            fileName: req.file.originalname,
            filePath: req.file.path,
            file: req.file.filename
        });
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error in fileController/upload', error);
        res.status(500).send('Internal server error');
    }
}

//to view the CSV file

export const view = async (req, res) => {
    try {
        let csvFile = await files.findOne({file: req.params.id});
        // console.log(csvFile);
        const results = [];
        const header =[];
        fs.createReadStream(csvFile.filePath)
        .pipe(csvParser())
        .on('headers', (headers) => {
            headers.map((head) => {
                header.push(head);
            });
        })
        .on('data', (data) =>
        results.push(data))
        .on('end', () => {
            res.render("file_viewer", {
                title: "File Viewer",
                fileName: csvFile.fileName,
                head: header,
                data: results,
                length: results.length
            });
        });
    } catch (error) {
        console.log('Error in fileController/view', error);
        res.status(500).send('Internal server error');
    }
}

//to delete File

export const deleteFile = async (req, res) => {
    try {
        let isFile = await files.findOne({file: req.params.id});

        if(isFile){
            await files.deleteOne({file: req.params.id});            
            return res.redirect("/");
        }else{
            console.log("File not found");
            return res.redirect("/");
        }
    } catch (error) {
        console.log('Error in fileController/delete', error);
        return;
    }
}