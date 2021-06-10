import { Collaborator } from 'api/models/Collaborator';
import { getRepository, Repository } from 'typeorm';

interface ICreateUserDTO {
  name: string;
  surname: string;
  age: number;
  email: string;
}

class CollaboratorRepository {
  private repository: Repository<Collaborator>;

  constructor() {
    this.repository = getRepository(Collaborator);
  }

  async create({
    name,
    surname,
    age,
    email,
  }: ICreateUserDTO): Promise<Collaborator> {
    const user = this.repository.create({ name, surname, age, email });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<Collaborator[]> {
    const all = await this.repository.find();
    return all;
  }

  async finByEmail(email: string): Promise<Collaborator> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { CollaboratorRepository };
