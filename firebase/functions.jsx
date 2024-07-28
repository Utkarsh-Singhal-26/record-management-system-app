import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { firestore, storage } from ".";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadString,
} from "firebase/storage";

export async function countRecord() {
  const querySnapshot = await getCountFromServer(
    collection(firestore, "users")
  );
  const size = querySnapshot.data().count;
  return size;
}

async function uploadImage(id, image) {
  const storageRef = ref(storage, `app-images/${id}`);
  await uploadString(storageRef, image, "data_url");
  return getDownloadURL(storageRef);
}

export async function writeData(id, data) {
  try {
    const imageRef = await uploadImage(id, data.image);
    await setDoc(doc(firestore, "users", id), { ...data, image: imageRef });
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

async function deleteImage(id) {
  const storageRef = ref(storage, `app-images/${id}`);
  await deleteObject(storageRef);
}

export async function deleteData(id) {
  try {
    await deleteImage(id);
    await deleteDoc(doc(firestore, "users", id));
    return true;
  } catch (error) {
    return error;
  }
}
