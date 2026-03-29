import investService from "./../services/invest.service.js";

export const getInvest = async(req, res)=>{
    res.json(await investService.getAllInvest());
    console.log("Te doy todos los investigadores de ghouls");
};

export const createInvest = async (req, res) => {
  const newInvest = await investService.createInvest(req.body);
  res.status(201).json(newInvest);
}

export const updateInvestById = async (req, res) => {
    const { id } = req.params;       
    const investData = req.body; 

    const updated = await investService.updateInvest(id, investData);

    if (!updated) {
        return res.status(404).json({ error: "Not found" });
    }

    res.json(updated);
}

export const deleteInvestByID = (req,res) =>{
    const { id } = req.params;
    investService.deleteInvestByID(id);
    res.status(201);
}