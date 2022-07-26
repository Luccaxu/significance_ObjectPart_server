import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import objectsRoute from './routes/objectsRoute.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/object', objectsRoute);

const PORT = 5000;
const connection_url = "mongodb://named-insignificant-object:jQtupfexC79oRFPT4bpNgwTHkVTu61EHfcixoOjLkSkG8SBQesfcJteQ2dMHz0NN43DtEkF9EoAcnMMcBUFDLg==@named-insignificant-object.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@named-insignificant-object@";

mongoose.connect( connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen( PORT, ()=> console.log(`Server Running on Port: ${PORT}`)))
    .catch((error)=> console.log(error.message));