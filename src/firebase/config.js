
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDkC3ANTvTRYqor4Oju4NTRnAVonBNLS80",
  authDomain: "remini-db.firebaseapp.com",
  projectId: "remini-db",
  storageBucket: "remini-db.firebasestorage.app",
  messagingSenderId: "266298505382",
  appId: "1:266298505382:web:c177cba71ffe2537331c67"
}

export const app = initializeApp(firebaseConfig)