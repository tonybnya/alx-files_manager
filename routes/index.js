import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

// Endpoint: GET /status => AppController.getStatus
router.get('/status', AppController.getStatus);

// GET /stats => AppController.getStats
router.get('/stats', AppController.getStats);

// POST /users => UsersController.postNew
router.post('/users', UsersController.postNew);

module.exports = router;
