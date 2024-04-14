import express from "express";
import path from "path";
import multer from "multer";


const app = express();
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3200, (err) => {
    if (err) {
        console.log("Error Connecting to server!!");
        return;
    }
    console.log("Successfully Connected to Server, 3200!!");
});