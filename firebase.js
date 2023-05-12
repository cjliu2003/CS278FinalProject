import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAoknnLUWdA70nwPM_KSaFGikrXI44Dgjk",
  authDomain: "cs278-18738.firebaseapp.com",
  projectId: "cs278-18738",
  storageBucket: "cs278-18738.appspot.com",
  messagingSenderId: "59055019591",
  appId: "1:59055019591:web:3cf620b0757344dbee0362"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const firestore = getFirestore(app);
  const auth = getAuth();

  export {auth}
  export {firestore};
  export {database};
  export const storage = getStorage(app);
