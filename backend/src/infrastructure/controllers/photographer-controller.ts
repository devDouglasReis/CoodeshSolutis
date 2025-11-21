import { Request, Response } from "express";
import { CreatePhotographer } from "../../application/use-cases/create-photographer";
import { UpdatePhotographer } from "../../application/use-cases/update-photographer";
import { DeletePhotographer } from "../../application/use-cases/delete-photographer";
import { ListPhotographers } from "../../application/use-cases/list-photographers";
import { InMemoryPhotographerRepository } from "../repositories/in-memory-photographer-repository";

const repository = new InMemoryPhotographerRepository();
const createPhotographer = new CreatePhotographer(repository);
const updatePhotographer = new UpdatePhotographer(repository);
const deletePhotographer = new DeletePhotographer(repository);
const listPhotographers = new ListPhotographers(repository);

export class PhotographerController {
  async create(req: Request, res: Response) {
    try {
      const photographer = await createPhotographer.execute(req.body);
      res.status(201).json(photographer);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const photographer = await updatePhotographer.execute(
        Number(req.params.id),
        req.body
      );
      res.json(photographer);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await deletePhotographer.execute(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const photographers = await listPhotographers.execute();
      res.json(photographers);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
