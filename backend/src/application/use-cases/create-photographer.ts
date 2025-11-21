import { Photographer } from "../../domain/entities/photographer";
import { PhotographerRepository } from "../../domain/repositories/photographer-repository";

export class CreatePhotographer {
  constructor(private repository: PhotographerRepository) {}

  async execute(input: Omit<Photographer, "id">): Promise<Photographer> {
    return this.repository.create(input);
  }
}
