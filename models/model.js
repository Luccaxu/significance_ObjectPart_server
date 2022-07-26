import mongoose from "mongoose";

const objectSchema = mongoose.Schema({
    name: String,
    explorer: String,
    selectedFile: String,
});

export default mongoose.model( 'Model', objectSchema );