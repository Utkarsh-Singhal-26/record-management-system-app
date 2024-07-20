import { doc, setDoc } from "firebase/firestore";
import { firestore } from ".";

export async function writeData(id, data) {
  try {
    await setDoc(doc(firestore, "users", id), data);
    return true;
  } catch (error) {
    return error;
  }
}
