// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNLe699NBzLnFU1eP9IMv15d8mAKk6L4A",
  authDomain: "portofolio-website-d5f2e.firebaseapp.com",
  projectId: "portofolio-website-d5f2e",
  storageBucket: "portofolio-website-d5f2e.firebasestorage.app",
  messagingSenderId: "1056656309239",
  appId: "1:1056656309239:web:97f471a37714d4185e4cf2",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

export const getUserRole = async (uid: string): Promise<string | null> => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data()?.role : null;
};
