import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import initializeAuthentication from '../Components/Firebase/firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [success, setSuccess] = useState(false);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register User
    const registerUser = (name, email, role, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, role };
                setUser(newUser);

                // save user to the database
                // saveUser(name, email, role)

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again. ${authError}`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Done!',
                    `New ${role} Added Successfully!`,
                    'success'
                );

            });
    }

    // Login User
    const loginUser = (email, password) => {
        setUser({
            email: email
        })
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
                authError && Swal.fire(
                    'Something went wrong!',
                    `Please try again. ${authError}`,
                    'error'
                );
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                success && Swal.fire(
                    'Login Successfully!',
                    'Welcome to Academia',
                    'success'
                );
            });
    }

    // google sign in
    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                //saveUser(user.email, user.displayName, user.photoURL, 'PUT')
                setAuthError('');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
                setSuccess(true);
                Swal.fire(
                    'Login Successfully!',
                    `Welcome, <b>${user?.displayName ? user?.displayName : 'User' }</b>`,
                    'success'
                );
            });
    }

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth]);

    // for checking admin
    // useEffect(() => {
    //     fetch(`https://clagrove-cg-rssicupser.up.railway.app/admins/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email, url])

    const logOut = (navigate) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You have to login again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log Out!'
        }).then((result) => {
            if (result.isConfirmed === false) {
                window.location.reload();
            }
            else if (result.isConfirmed === true) {
                signOut(auth)
                    .then(() => { })
                    .catch((error) => {
                        Swal.fire(
                            'Oops!',
                            `${error}`,
                            'error'
                        );
                    })
                    .finally(() => {
                        Swal.fire(
                            'Logged Out!',
                            `See you again, <b>${user?.displayName }</b>`,
                            'success'
                        );
                        setIsLoading(false);
                        setSuccess(true);
                        navigate('/');
                    });                
            }   
        });            
    }

    // const saveUser = (name, email, role) => {
    //     const user = { name, email, role};

    //     fetch('', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.insertedId) {
    //                 Swal.fire(
    //                     'Done!',
    //                     'New Admin Created Successfully!',
    //                     'success'
    //                 );
    //                 window.location.reload();
    //             }
    //         })
    //         .catch((error) => {
    //             Swal.fire(
    //                 'Oops!',
    //                 `${error}`,
    //                 'error'
    //             );
    //         })
    // }

    return {
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        user,
        isLoading,
        authError,
        admin
    }
}

export default useFirebase;