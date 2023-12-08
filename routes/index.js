import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

// Endpoint: GET /status => AppController.getStatus
router.get('/status', AppController.getStatus);

// GET /stats => AppController.getStats
router.get('/stats', AppController.getStats);

// POST /users => UsersController.postNew
router.post('/users', UsersController.postNew);

// GET /connect => AuthController.getConnect
router.get('/connect', AuthController.getConnect);

// GET /disconnect => AuthController.getDisconnect
router.get('/disconnect', AuthController.getDisconnect);

// GET /users/me => UserController.getMe
router.get('/users/me', UsersController.getMe);

// POST /files => FilesController.postUpload
router.post('/files', FilesController.postUpload);

// GET /files/:id => FilesController.getShow
router.get('/files/:id', FilesController.getShow);

// GET /files => FilesController.getIndex
router.get('/files', FilesController.getIndex);

// PUT /files/:id/publish => FilesController.putPublish
router.put('/files/:id/publish', FilesController.putPublish);

// PUT /files/:id/publish => FilesController.putUnpublish
router.put('/files/:id/unpublish', FilesController.putUnpublish);

// GET /files/:id/data => FilesController.getFile
router.get('/files/:id/data', FilesController.getFile);

module.exports = router;
