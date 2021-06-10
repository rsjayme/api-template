import { CollaboratorService } from 'api/services/CollaboratorService';
import { Request, Response } from 'express';

class CollaboratorController {
  async post(req: Request, res: Response): Promise<Response> {
    const { name, surname, age, email } = req.body;

    const personService = new CollaboratorService();
    const person = await personService.create({ name, surname, age, email });

    return res.status(202).json(person);
  }
}

export { CollaboratorController };
