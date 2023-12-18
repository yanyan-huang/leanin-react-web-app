/* eslint-disable import/no-extraneous-dependencies */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// remove config prevent exposure
const config = {};

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };
export default app;
