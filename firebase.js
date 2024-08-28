// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeaQaF987IpsdoFSgkI6i1b_i86WkH48o",
  authDomain: "portfolio-anakonda06.firebaseapp.com",
  projectId: "portfolio-anakonda06",
  storageBucket: "portfolio-anakonda06.appspot.com",
  messagingSenderId: "582265679406",
  appId: "1:582265679406:web:0d02d3d49633f59bbf39bf",
  measurementId: "G-KWDEB7CZG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);