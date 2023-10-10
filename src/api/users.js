import { doc, collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { db } from '$lib/firebase.js';

// const docRef = doc(db, 'Users', 'gKNyCQtlNLwYfUx6iFAK');

export const addRecipe = async (user) => {
    console.log('createUser');
    console.log(user);
    // const usersRef = collection(db, 'Users');
    // const q = query(usersRef, where('email', '==', user.email));

    console.log('coiso');
    const q = query(collection(db, 'Users'));

    console.log('q', q);
    const querySnapshot = await getDocs(q);
    console.log('querySnapshot', querySnapshot);
    // const docSnap = await getDoc(docRef);

    // if (q.exists()) {
    //     console.log('User exist!');
    //     // Throws an error.
    //     throw new Error('User Exist!');
    // } else {
    //     await addDoc(usersRef, {
    //         displayName: user.name,
    //         email: user.email
    //     });
    // }
};
