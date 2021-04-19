import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LogIn.css'
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Share/Navbar/Navbar';



const LogIn = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSingedIn: true,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false,

    })

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // const handleGoogleSingIn = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //             /** @type {firebase.auth.OAuthCredential} */
    //             // var credential = result.credential;

    //             // var token = credential.accessToken;
    //             const {
    //                 displayName, email
    //             } = result.user;
    //             const singInUser = { name: displayName, email }
    //             setLoggedInUser(singInUser)
    //             history.replace(from)
    //         }).catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             var email = error.email;
    //             var credential = error.credential;

    //         });
    // }
    ///// Sing in with email address and password ////

    const handleBlur = (event) => {
        let isFormValid = true
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFormValid = isPasswordValid && passwordHasNumber;

        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }


    }



    /////full-form-submit////
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    updateUserName(user.name)
                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    console.log('here the information',res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }
    const updateUserName=name=>{
        var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name,
        }).then(function() {
            console.log('user name updated successfully');
         
        }).catch(function(error) {
        console.log(error);
        });
    }
  
    return (
        <div>
    
        
            
        <div className='login-form-background'>
            <div className="container pt-3">
                <div className="row">
                <div className="col-lg-5 mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-area mt-5">
                                <div className="div-for-caption-for-form-ar">
                                 <h5>{newUser ? 'Create An Account' :' Log In Your Account with Email and Password'}</h5>
                                </div>
                                {newUser && <input type="text" onBlur={handleBlur} placeholder="Enter Your Name" name="name" />} <br />
                                <input type="email"  onBlur={handleBlur} placeholder="Enter Your Email" name="email" id="" required /> <br />
                                <input type="password"  onBlur={handleBlur} placeholder="Enter Your Password" name="password" id="" required /><br />
                                <button type="submit" className="button-for-log-in-form" >
                                {newUser ? 'Create An Account' : "Log In"}
                                </button>
                                <div className="label-editing d-flex py-4">
                                <label htmlFor="" className='edit-label'>{newUser ? 'If you are an old user then log in and check your products':'If you are a new user, create an account soon !!'}</label>
                                    <button className='own-customize' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Create An New Account' } </button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <br />
                        <div className="row">
                        <div className="col-lg-12">
                       
                            {user.success && <h5><span>{newUser ? alert('User Created Successfully ! Just Click Bottom Log In Than You Can Logged Successfully'): ''} </span></h5>}
                        </div>
                    </div>
                      
                    </div>
                    <div className="col-lg-7"></div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default LogIn;