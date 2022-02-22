import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

const app = express();

//prepare bodyParser to send the request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect server app with DB 
const CONNECTION_URL = 'mongodb+srv://bishoy:bishoy@cluster0.0wy54.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
  .catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);