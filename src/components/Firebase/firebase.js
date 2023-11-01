/* eslint-disable import/no-extraneous-dependencies */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5tSuCRyNFtUqruqdNsxgWlXXeGCgGtG4",
    authDomain: "my-firebase-project-9e554.firebaseapp.com",
    databaseURL: "https://my-firebase-project-9e554-default-rtdb.firebaseio.com",
    projectId: "my-firebase-project-9e554",
    storageBucket: "my-firebase-project-9e554.appspot.com",
    messagingSenderId: "919170873400",
    appId: "1:919170873400:web:5902d1ea13bf9557ba8ecd",
    measurementId: "G-8VJQ0N446G"
};

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };
export default app;
