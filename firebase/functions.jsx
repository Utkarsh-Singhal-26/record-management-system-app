import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
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

export async function readData(id) {
  const docSnap = await getDoc(doc(firestore, "users", id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export async function listData() {
  const querySnapshot = await getDocs(collection(firestore, "users"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
