
import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const expenseRef=collection(db,"expenseData");