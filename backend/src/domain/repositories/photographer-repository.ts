import { Photographer } from "../entities/photographer";

export interface PhotographerRepository {
  create(photographer: Omit<Photographer, "id">): Promise<Photographer>;
  update(
    id: number,
    photographer: Partial<Omit<Photographer, "id">>
  ): Promise<Photographer>;
  delete(id: number): Promise<void>;
  list(): Promise<Photographer[]>;
}
