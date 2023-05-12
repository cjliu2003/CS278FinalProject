
import { createContext, useContext, useState, useEffect} from "react";
import { auth } from "../firebase";
import { firestore } from "../firebase";
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, deleteUser, fetchSignInMethodsForEmail} from "@firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { parseFirebaseSignInError } from "../screens/functions/parseFirebaseSignInError";

// const revenueCat = new RevenueCat();
const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, res => {
          // If a user is authenticated, set the user state with the user data
            if (res) {
              setUser(res)
            } else {
              setUser(null)
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const registerUser = async (name, email, password) => {
        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const uid = res.user.uid;
            return uid;
        } catch (err) {
            Alert.alert('Sign Up Error', err)
            return null;
        } finally {
            setLoading(false);
        }
    }

    const initializeUserData = (name, uid, email) => {
        console.log(uid)
        const userDocRef = doc(firestore, "users", uid);
        setDoc(userDocRef, {
            name: name,
            uid: uid,
            email: email,
        }, {merge: true});
    }

    const setUserDataState = async() => {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDataObject = await getDoc(userDocRef)
        setUserData(userDataObject.data())
    }

    useEffect(() => {
        if (user) setUserDataState()
    }, [user])

    const signInUserEmail = async (email, password) => {
        setLoading(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const uid = auth.currentUser.uid;
            await AsyncStorage.setItem('userToken', uid); //store the user's uid in AsyncStorage
            return uid;
        } catch (err) {
            Alert.alert("Sign In Error", parseFirebaseSignInError(err));
        } finally {
            setLoading(false);
        }
    }
    
    const logoutUser = async() => {
        await AsyncStorage.setItem('userToken', '');
        // const revenueCat = new RevenueCat();
        // revenueCat.logoutForRevenueCat()
        signOut(auth);
        setSubscription("none");
    }


    
    const contextValue = {
        user,
        userData,
        loading,
        registerUser,
        signInUserEmail,
        initializeUserData,
        logoutUser,
    };
    
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};
