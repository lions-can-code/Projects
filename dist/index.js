// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxGsamEeraE_hPm0bnWFncXTWJEmI3YjU",
  authDomain: "github-projects-3736e.firebaseapp.com",
  databaseURL: "https://github-projects-3736e-default-rtdb.firebaseio.com",
  projectId: "github-projects-3736e",
  storageBucket: "github-projects-3736e.firebasestorage.app",
  messagingSenderId: "706442576194",
  appId: "1:706442576194:web:f94bd8ea43b0de1eea48db",
  measurementId: "G-Q4Y2YX0K5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);