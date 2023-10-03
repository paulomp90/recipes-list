import { doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '$lib/firebase.js';

const docRef = doc(db, 'Users', 'gKNyCQtlNLwYfUx6iFAK');

export const createUser = async (user) => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('User exist!');
        // Throws an error.
        throw new Error('User Exist!');
    } else {
        await addDoc(docRef, {
            displayName: user.name,
            email: user.email
        });
    }
};
