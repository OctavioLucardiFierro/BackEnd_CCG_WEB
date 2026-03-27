import express from "express";
import "dotenv/config";
import ghoulsRouter from "./src/routes/ghouls.router.js";

import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());
app.use('/',ghoulsRouter);

app.use((req,res,next) =>{ //Manejo del error 404
    res.status(404).json({error:"not Found"})
})

const PORT = process.env.PORT || 3005;

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));