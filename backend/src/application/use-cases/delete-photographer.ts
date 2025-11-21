import { PhotographerRepository } from "../../domain/repositories/photographer-repository";

export class DeletePhotographer {
  constructor(private repository: PhotographerRepository) {}

  async execute(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
