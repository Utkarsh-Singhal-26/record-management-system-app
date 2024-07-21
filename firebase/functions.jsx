import {
  collection,
  doc,
  getCountFromServer,
  setDoc,
} from "firebase/firestore";
import { firestore } from ".";

export async function countRecord() {
  const querySnapshot = await getCountFromServer(
    collection(firestore, "users")
  );
  const size = querySnapshot.data().count;
  return size;
}

export async function writeData(id, data) {
  try {
    await setDoc(doc(firestore, "users", id), data);
    return true;
  } catch (error) {
    return error;
  }
}
