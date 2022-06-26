import {initializeApp } from '@firebase/app';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKMufhwObJ-qyxntnfP7QnVaoHB3tfvr4",
    authDomain: "decanvas-a79a6.firebaseapp.com",
    projectId: "decanvas-a79a6",
    storageBucket: "decanvas-a79a6.appspot.com",
    messagingSenderId: "16465980497",
    appId: "1:16465980497:web:4be6c4ffe39acd04071c70"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docData = {
    id: 18186,
    color: '#ffffff'
};

// for (let i = 18186; i < 40000; i++) {
//     await setDoc(doc(db, "squareData", `${i}`), docData);
//     console.log(`uploading ${i}`);
//     docData.id++;
// }

const updateData = async (docNum, docData) => {
    await setDoc(doc(db, "squareData", docNum), docData);    
}

const getData = async (docNum) => {
    const docRef = doc(db, "squareData", docNum.toString());
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
        console.log("document data: ", docSnap.data());
    }
    else {
        console.log('shit');
    }
}