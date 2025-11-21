import { Photographer } from "../../domain/entities/photographer";
import { PhotographerRepository } from "../../domain/repositories/photographer-repository";

export class InMemoryPhotographerRepository implements PhotographerRepository {
  private photographers: Photographer[] = [];
  private currentId = 1;

  async create(photographer: Omit<Photographer, "id">): Promise<Photographer> {
    const newPhotographer = new Photographer(
      this.currentId++,
      photographer.name,
      photographer.camera,
      photographer.lens
    );
    this.photographers.push(newPhotographer);
    return newPhotographer;
  }

  async update(
    id: number,
    photographer: Partial<Omit<Photographer, "id">>
  ): Promise<Photographer> {
    const index = this.photographers.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("Photographer not found");
    }

    const updatedPhotographer = {
      ...this.photographers[index],
      ...photographer,
    };

    this.photographers[index] = updatedPhotographer;
    return updatedPhotographer;
  }

  async delete(id: number): Promise<void> {
    const index = this.photographers.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("Photographer not found");
    }
    this.photographers.splice(index, 1);
  }

  async list(): Promise<Photographer[]> {
    return this.photographers;
  }
}
