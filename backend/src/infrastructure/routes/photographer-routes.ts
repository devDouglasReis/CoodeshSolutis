import { Router } from "express";
import { PhotographerController } from "../controllers/photographer-controller";

const router = Router();
const controller = new PhotographerController();

router.post("/", (req, res) => controller.create(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));
router.get("/", (req, res) => controller.list(req, res));

export { router as photographerRoutes };
