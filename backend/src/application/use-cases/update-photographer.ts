import { Photographer } from "../../domain/entities/photographer";
import { PhotographerRepository } from "../../domain/repositories/photographer-repository";

export class UpdatePhotographer {
  constructor(private repository: PhotographerRepository) {}

  async execute(
    id: number,
    input: Partial<Omit<Photographer, "id">>
  ): Promise<Photographer> {
    return this.repository.update(id, input);
  }
}
