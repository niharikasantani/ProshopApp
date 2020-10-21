import express from 'express';
const router = express.Router();

import {
	authUser,
	resgisterUser,
	getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(resgisterUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
