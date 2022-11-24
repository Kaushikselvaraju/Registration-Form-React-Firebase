import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLpxytikUiVS_gJw04e6TU1Em64P1m05Y",
  authDomain: "react-app-24.firebaseapp.com",
  projectId: "react-app-24",
  storageBucket: "react-app-24.appspot.com",
  messagingSenderId: "198065176908",
  appId: "1:198065176908:web:3144f7ca64699ff1de4fe9",
  measurementId: "G-9GXMYHZBNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
