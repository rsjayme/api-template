import { CollaboratorController } from 'api/controllers/personController';
import { Router } from 'express';

const collaboratorRoutes = Router();

const collaboratorController = new CollaboratorController();

collaboratorRoutes.post('/', collaboratorController.post);

export { collaboratorRoutes };
