import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Course } from '../models/Course';

const collectionRef = collection(db, 'courses');

export const getCourses = async (): Promise<Course[]> => {
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Course, 'id'>),
  }));
};

export const addCourse = async (course: Omit<Course, 'id'>) => {
  await addDoc(collectionRef, course);
};

export const updateCourse = async (id: string, course: Partial<Course>) => {
  await updateDoc(doc(db, 'courses', id), course);
};
