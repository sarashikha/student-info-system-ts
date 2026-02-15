// src/services/userService.ts ✅
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "../models/User";

export const getUserById = async (id: string): Promise<User> => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("User not found");
  }

  return { id: docSnap.id, ...docSnap.data() } as User;
};
