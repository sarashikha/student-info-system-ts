import { db } from '../firebase/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc
} from 'firebase/firestore';

const studentsRef = collection(db, 'students');

export const getStudents = async () => {
  const snapshot = await getDocs(studentsRef);
  return snapshot.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));
};

export const getStudentById = async (id: string) => {
  const ref = doc(db, 'students', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const addStudent = async (student: any) => {
  await addDoc(studentsRef, student);
};

export const updateStudent = async (id: string, student: any) => {
  const ref = doc(db, 'students', id);
  await updateDoc(ref, student);
};
