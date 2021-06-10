import { Router } from 'express';
import { collaboratorRoutes } from './collaborator.routes';

const routes = Router();

routes.use('/collaborators', collaboratorRoutes);

export { routes };
