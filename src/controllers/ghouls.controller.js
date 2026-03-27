import ghoulsService from "./../services/ghouls.service.js";

export const getGhouls = async(req, res)=>{
    res.json(await ghoulsService.getAllGhouls());
    console.log("Te doy todos los ghouls");
};

export const createGhoul = async (req, res) => {
  const newGhoul = await ghoulsService.createGhoul(req.body);
  res.status(201).json(newGhoul);
}

export const updateGhoul = async (req, res) => {
    const { id } = req.params;       
    const ghoulData = req.body; 

    const updated = await ghoulsService.updateGhoul(id, ghoulData);

    if (!updated) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json(updated);
}

export const deleteGhoulByID = (req,res) =>{
    const { id } = req.params;
    ghoulsService.deleteGhoulByID(id);
    res.status(201);
}