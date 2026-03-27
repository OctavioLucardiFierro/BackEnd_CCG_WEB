import { Router } from 'express';

import { getGhouls, createGhoul, updateGhoul, deleteGhoulByID } from "./../controllers/ghouls.controller.js"

const router = Router();

router.get("/ghouls", getGhouls);

router.post("/new/ghoul", createGhoul);

router.put("/update/ghoul/:id", updateGhoul);

router.delete("/delete/ghoul/:id", deleteGhoulByID);

export default router;