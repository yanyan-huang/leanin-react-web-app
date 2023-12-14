/* eslint-disable import/no-extraneous-dependencies */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAC5W1amlvkDSaLjO0dEp5njhqGiiTjZG8",
  authDomain: "leanin-db.firebaseapp.com",
  projectId: "leanin-db",
  storageBucket: "leanin-db.appspot.com",
  messagingSenderId: "974533681074",
  appId: "1:974533681074:web:ad5ff888e037e37ad90eab",
  measurementId: "G-SQZP9ZPP2Y",
};

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };
export default app;
