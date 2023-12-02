import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCyD9TlO-aT1nZLtnb_Kbvz7C01psCo2VE',
  authDomain: 'netflix-2d392.firebaseapp.com',
  projectId: 'netflix-2d392',
  storageBucket: 'netflix-2d392.appspot.com',
  messagingSenderId: '1021833068613',
  appId: '1:1021833068613:web:2889c37a91111ba6c8232c',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);
console.log(firebase);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
