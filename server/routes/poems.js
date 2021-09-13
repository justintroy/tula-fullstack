import express from 'express';

import { getPoems, createPoem, updatePoem, deletePoem, likePoem } from "../controllers/poems.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPoems)
router.post('/', auth, createPoem)
router.patch('/:id', auth, updatePoem)
router.delete('/:id', auth, deletePoem)
router.patch('/:id/like', auth, likePoem)

export default router