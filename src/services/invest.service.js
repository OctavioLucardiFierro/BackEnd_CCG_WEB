import * as model from "./../models/Investigadores.js"

const getAllInvest = async () => {
  return await model.getAllInvest();
};

const createInvest = (invest) =>{
    return model.createInvest(invest);
}

const updateInvest = async (id, dataInvest)=>{
  return model.updateInvest(id,dataInvest);
}

const deleteInvestByID = async (id) =>{
    return await model.deleteInvest(id);
}

export default {getAllInvest, createInvest, updateInvest, deleteInvestByID};