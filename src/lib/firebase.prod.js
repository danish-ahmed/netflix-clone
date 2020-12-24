import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// we will seed db here

const config = {
  apiKey: "AIzaSyC_6gBPqEdbHyoSiObpGjH6nz-J79r7neE",
  authDomain: "netflix-5380b.firebaseapp.com",
  projectId: "netflix-5380b",
  storageBucket: "netflix-5380b.appspot.com",
  messagingSenderId: "132939509097",
  appId: "1:132939509097:web:de9357c95ef346bdace1f8",
};
const firebase = Firebase.initializeApp(config);
export { firebase };
