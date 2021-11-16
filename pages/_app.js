import "../styles.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzhz1xq28Y7hEmJH1d-KfNaT5t5NcSuBo",
  authDomain: "youngstarvingartists-182cb.firebaseapp.com",
  projectId: "youngstarvingartists-182cb",
  storageBucket: "youngstarvingartists-182cb.appspot.com",
  messagingSenderId: "853675560219",
  appId: "1:853675560219:web:1a85b5b66b8be8546917be",
  databaseURL:
    "https://youngstarvingartists-182cb-default-rtdb.firebaseio.com/",
  measurementId: "G-XPW5FRB3G5"
};

// https://firebase.google.com/docs/auth/web/password-auth
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
