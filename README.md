##CSV Upload and DataView with Node.js
This project implements a CSV upload feature and a DataView using Node.js, following the MVC (Model-View-Controller) model.

##Overview
fileController.js: Handles the view, upload, and deletion of CSV files.
HomeController.js: Fetches data from the database and displays it.
view: Renders and displays the data.

##Features
CSV Schema in Model: Applies schema and validations to the uploaded CSV files.

##Getting Started
Clone the repository: git clone https://github.com/srikanth141199/CSV-Upload-NodeJs-DataView
Install dependencies: npm install
Configure your database connection in config.js
Run the application: node index.js

##Usage
Access the application in your browser at http://localhost:3200
Upload a CSV file using the file upload form
View the uploaded data in the DataView
Delete data as needed

##Dependencies
Express.js: Web framework for Node.js
Mongoose: MongoDB object modeling tool
CSV Parser: Parses CSV files
EJS: Embedded JavaScript templating
Other dependencies can be found in package.json