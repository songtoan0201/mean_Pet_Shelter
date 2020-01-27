//require installed modules
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let path = require("path");
// const cors = require('cors'); 

//create express app
let app = express();
// console.log(app);

//Cross site request 
// app.use(cors());
//config (app.set || app.get)
// app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./client/dist/client")));

// app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(8000, () => {
  console.log("app is running on port 8000");
});
