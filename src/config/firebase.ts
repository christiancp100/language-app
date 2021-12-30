import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

const firebaseConfig = Object.freeze({
  apiKey: "AIzaSyAIwYjjp67PfxJYBwnWDfouWeoVBkcLoxI",
  authDomain: "plenary-chalice-257507.firebaseapp.com",
  databaseURL: "https://plenary-chalice-257507-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plenary-chalice-257507"
})



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;






