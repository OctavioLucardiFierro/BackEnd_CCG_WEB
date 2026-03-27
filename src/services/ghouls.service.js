import * as model from "../models/Ghouls.js";

const getAllGhouls = async () => {
  return await model.getAllGhouls();
};

const createGhoul = (ghoul) =>{
    model.createGhoul(ghoul);
}

const updateGhoul = async (id, dataGhoul)=>{
  return model.updateGhoul(id,dataGhoul);
}

const deleteGhoulByID = async (id) =>{
    return await model.deleteGhoul(id);
}

export default {getAllGhouls, createGhoul, updateGhoul, deleteGhoulByID};