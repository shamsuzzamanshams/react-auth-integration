import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/firebase.init'

const AuthProvider = ({ children }) => {

	const [user,setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const createSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	}

	// get current user info
	// onAuthStateChanged(auth, (currentUser) => {
	// 	if (currentUser) {
	// 		console.log('inside observer: if', currentUser);

	// 	}
	// 	else {
	// 		console.log('inside observer: else', currentUser);

	// 	}
	// })

	useEffect(() => {
		// set the ovserver
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('current user in auth state change', currentUser);
			setUser(currentUser);

		})
		return () => {
			unsubscribe();
		}
	}, [])

	const authInfo = {
		user,
		createUser,
		createSignIn,
	}
	return (
		<AuthContext value={authInfo}>
			{children}
		</AuthContext>
	);
};

export default AuthProvider;