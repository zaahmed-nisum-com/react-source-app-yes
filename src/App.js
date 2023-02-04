import logo from './logo.svg';
import './App.css';
import Products from './pages/products';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGRI-KqyXW2LiMqSnlYmg63_a74RegiHU",
  authDomain: "scorecard-ranking-app.firebaseapp.com",
  projectId: "scorecard-ranking-app",
  storageBucket: "scorecard-ranking-app.appspot.com",
  messagingSenderId: "930645059468",
  appId: "1:930645059468:web:f5446efc828f62af7d58a9",
  measurementId: "G-B46QNH8LML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
