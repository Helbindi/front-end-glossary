// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACpCcXKkaMRZVWutCC-dCPqYhXef0t6II",
  authDomain: "front-end-glossary.firebaseapp.com",
  databaseURL: "https://front-end-glossary-default-rtdb.firebaseio.com",
  projectId: "front-end-glossary",
  storageBucket: "front-end-glossary.appspot.com",
  messagingSenderId: "454637463643",
  appId: "1:454637463643:web:723f75e9fcffccc0c9f77e",
  measurementId: "G-8VSEHH6DY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get collection reference
const termsRef = collection(db, "terms");

// Get all terms from Firebase
export async function getTerms() {
  let data = [];
  const q = query(termsRef, orderBy("name"));
  const dataSnapshot = await getDocs(q);

  dataSnapshot.forEach((doc) => {
    const docData = { id: doc.id, ...doc.data() };
    data.push(docData);
  });

  return data;
}

export async function addTerm(term) {
  console.log(term);
  const newTerm = await addDoc(termsRef, {
    name: term.name,
    type: term.type,
    desc: term.desc,
    image: term.image,
    source: term.source,
  });
  alert(`New document created: ${newTerm.id}`);
}
