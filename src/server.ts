import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './errors/AppError';
import { routes } from './routes';
import 'reflect-metadata';
import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen('3335', () => console.log('App listening on port 3335'));
