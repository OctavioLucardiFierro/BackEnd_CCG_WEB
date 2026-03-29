import { Router } from 'express';

import { getInvest, createInvest, updateInvestById, deleteInvestByID } from "./../controllers/invest.controller.js"

const router = Router();

router.get("/investigadores", getInvest);

router.post("/new/investigador", createInvest);

router.put("/update/investigador/:id", updateInvestById);

router.delete("/delete/investigador/:id", deleteInvestByID);

export default router;