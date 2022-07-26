import express from 'express';
import { getObjects, postObject } from '../controllers/objects.js';

const router = express.Router();

router.get('/', getObjects);
router.post('/', postObject);

export default router;