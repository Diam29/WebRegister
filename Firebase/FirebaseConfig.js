import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVHlW73_kkWfUXPUkGFUZT65PHewY5rRQ",
  authDomain: "webregister-a8c35.firebaseapp.com",
  projectId: "webregister-a8c35",
  storageBucket: "webregister-a8c35.appspot.com",
  messagingSenderId: "880003103326",
  appId: "1:880003103326:web:b06e88967a61c81a5952cf",
  measurementId: "G-9S0HDLB189"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;