import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const coursesCollection = collection(db, "courses");

export const getCourses = async () => {
  const snapshot = await getDocs(coursesCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addCourse = async (course: any) => {
  return await addDoc(coursesCollection, course);
};

export const updateCourse = async (id: string, course: any) => {
  const courseDoc = doc(db, "courses", id);
  return await updateDoc(courseDoc, course);
};

export const deleteCourse = async (id: string) => {
  const courseDoc = doc(db, "courses", id);
  return await deleteDoc(courseDoc);
};