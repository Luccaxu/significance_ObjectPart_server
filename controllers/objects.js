import express from 'express';
import mongoose from 'mongoose';
import Model from '../models/model.js';

const router = express.Router();

export const getObjects = async( req, res ) => {
    try {
        const displayObjects = await Model.find();
        res.status(200).json(displayObjects);
    } catch(error) {
        res.status(404).json(error);
    }
}

export const postObject = async( req, res ) => {
    try {
        
    } catch(error) {
        res.status(409).json(error);
    }
}

export default router;