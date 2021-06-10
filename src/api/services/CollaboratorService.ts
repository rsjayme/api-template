import { Collaborator } from 'api/models/Collaborator';
import { CollaboratorRepository } from 'api/repositories/CollaboratorRepository';
import { AppError } from 'errors/AppError';

interface ICreateDTO {
  name: string;
  surname: string;
  age: number;
  email: string;
}

class CollaboratorService {
  async create({
    name,
    surname,
    age,
    email,
  }: ICreateDTO): Promise<Collaborator> {
    const collaboratorRepository = new CollaboratorRepository();

    const emailExists = await collaboratorRepository.finByEmail(email);

    if (emailExists) {
      throw new AppError('User already exists.', 400);
    }

    const person = await collaboratorRepository.create({
      name,
      surname,
      age,
      email,
    });

    return person;
  }
}

export { CollaboratorService };
