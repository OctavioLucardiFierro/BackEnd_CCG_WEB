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

const ghoulsCollection = collection(db, "ghouls");

export const getAllGhouls = async () => {
    try{
        const snapshot = await getDocs(ghoulsCollection);
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    }catch(err){
        console.log(err);
    }
};

export const createGhoul = async (data) =>{
    try {
      const docRef = await addDoc(ghoulsCollection, data);
      console.log("Ghoul registrado con exito")
      return { id: docRef.id, ...data };
    } catch (error) {
    console.error(error);
  }
};

//Actualizar Ghoul
export const updateGhoul = async (id, ghoulData) => {
    const ghoulRef = doc(ghoulsCollection, id);
    const snapshot = await getDoc(ghoulRef);

    if (!snapshot.exists()) return false;

    await updateDoc(ghoulRef, ghoulData);

    const updatedSnapshot = await getDoc(ghoulRef);

    return { id, ...updatedSnapshot.data() };
};

//Borrar Archivo de forma permanente
export const deleteGhoul = async (id) => {
  try {
    const ghoulRef = doc(ghoulsCollection, id);
    const snapshot = await getDoc(ghoulRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(ghoulRef);
    console.log("Archivo eliminado con exito")
    return true;
  } catch (error) {
    console.error(error);
  }
};