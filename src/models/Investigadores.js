import { db } from "./firebase.js";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const investigadoresCollection = collection(db, "investigadores");

export const getAllInvest = async () => {
    try{
        const snapshot = await getDocs(investigadoresCollection);
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    }catch(err){
        console.log(err);
    }
};

export const createInvest = async (data) =>{
    try {
      const docRef = await addDoc(investigadoresCollection, data);
      console.log("Investigador registrado con exito")
      return { id: docRef.id, ...data };
    } catch (error) {
    console.error(error);
  }
};

//Actualizar 
export const updateInvest = async (id, investData) => {
    const investRef = doc(investigadoresCollection, id);
    const snapshot = await getDoc(investRef);

    if (!snapshot.exists()) return false;

    await updateDoc(investRef, investData);

    const updatedSnapshot = await getDoc(investRef);

    return { id, ...updatedSnapshot.data() };
};

//Borrar Archivo de forma permanente
export const deleteInvest = async (id) => {
  try {
    const investRef = doc(investigadoresCollection, id);
    const snapshot = await getDoc(investRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(investRef);
    console.log("Archivo eliminado con exito")
    return true;
  } catch (error) {
    console.error(error);
  }
};