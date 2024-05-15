const path = require('path')
const express = require('express')
require('dotenv').config();
const app = express();
const mongoose = require('mongoose')
const db = require('./config/db')
const port = process.env.PORT || 5000;

// const caseRoutes = require("./routes/caseRouter");
const homeRoutes = require("./routes/homeRoutes");
const customerRoutes = require("./routes/customerRouter");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

mongoose
   .connect(db.mongoURI, db.options)
   .then(() => {
      console.log('connected to MongoDB');
   })
   .catch((error) => {
      console.error('error connecting to MongoDB', error)
   })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser());
app.use(cors());

// app.use("/api/case", caseRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/customer", customerRoutes);

app.listen(port, () => {
   console.log(`server is running on port`, port);

})