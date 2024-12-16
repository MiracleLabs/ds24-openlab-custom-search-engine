import express from "express";
import { custom_search_engine } from "../controllers/searchEngine.js";
const router = express.Router();

router.post("/search_engine", custom_search_engine);

export default router;
