import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.get("/", ProductController.all);
router.post("/", ProductController.create);

export default router;
