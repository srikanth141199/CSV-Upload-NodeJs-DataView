import express from "express";
import path from "path";
import multer from "multer";
import bodyParser from "body-parser";
import csv from "csv-parser";
import expressLayouts from "express-ejs-layouts";


const app = express();
app.use(expressLayouts);//setting Layout

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public')); 

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3200, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log("Successfully Connected to Server, 3200!!");
});