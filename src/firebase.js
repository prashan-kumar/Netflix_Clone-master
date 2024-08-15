import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut } from "firebase/auth"; 
import { addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAE0Rlds1hPEo9BAUEuKFrFRef5uwecc1s",
  authDomain: "netflix-clone-bc6bc.firebaseapp.com",
  projectId: "netflix-clone-bc6bc",
  storageBucket: "netflix-clone-bc6bc.appspot.com",
  messagingSenderId: "884743063712",
  appId: "1:884743063712:web:c3f55c113575674901e1c5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup =async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user =res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    }catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};