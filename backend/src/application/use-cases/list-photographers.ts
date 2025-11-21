import { Photographer } from "../../domain/entities/photographer";
import { PhotographerRepository } from "../../domain/repositories/photographer-repository";

export class ListPhotographers {
  constructor(private repository: PhotographerRepository) {}

  async execute(): Promise<Photographer[]> {
    return this.repository.list();
  }
}
