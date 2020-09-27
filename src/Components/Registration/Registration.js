import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../UserPhase/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Registration.css';
import RegistrationHeader from '../RegistrationHeader/RegistrationHeader';
import { Row, Col, Container } from 'react-bootstrap';
import icon1 from '../../fb.png';
import googleIcon from '../../google.png';
firebase.initializeApp(firebaseConfig);

const Registration = (props) => {



    const provider = new firebase.auth.GoogleAuthProvider();
    const FbProvider = new firebase.auth.FacebookAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/showLocation" } };
    const [isLogIn, setIsLogIn] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        email: '',
        password: '',
        error: '',
        success: false
    })
    const history = useHistory();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)

            .then(res => {

                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }
                setUser(signedInUser);
                if (signedInUser.email) {
                    history.replace(from);
                }


            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (props.isLogIn && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    setUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    newUserInfo.success = false;

                });
        }
        if (!props.isLogIn && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true
                    console.log(res);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;

                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(FbProvider).then(function (result) {

            var token = result.credential.accessToken;

            var user = result.user;
            console.log('fb user', user);

        }).catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            var email = error.email;

            var credential = error.credential;

        });
    }
    return (
        <div >
            <RegistrationHeader></RegistrationHeader>

            {
                props.isLogIn ? <div className="createCard mb-3">
                    <div className="cardBody">
                        <h3 style={{ fontWeight: "700" }} className="mb-3">Create an account</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="firstName" onBlur={handleBlur} className="mb-3 createAccountInput" placeholder="First Name" required />
                            <br />
                            <input type="text" name="lastName" onBlur={handleBlur} className="mb-3 createAccountInput" placeholder="Last Name" required />
                            <br />
                            <input type="email" name="email" onBlur={handleBlur} className="mb-3 createAccountInput" placeholder="Username or Email" required />
                            <br />
                            <input type="password" name="password" onBlur={handleBlur} className="mb-3 createAccountInput" placeholder="Password" required />
                            <br />
                            <input type="password" name="confirmPassword" onBlur={handleBlur} className="mb-4 createAccountInput" placeholder="Confirm Password" required />
                            <input type="submit" value="Create an account" className="button mb-3" />
                        </form>
                        <div className="text-center">
                            <h5 style={{ display: "inline" }}>Already have an account?</h5>
                            <button className="creactAccountButton" onClick={() => props.handleLogin()}>Login</button>
                        </div>

                    </div>
                    {user.success && <p style={{ color: "green" }}>Successfully Create account Go to login  </p>}
                </div>
                    :
                    <div className="createCard mb-3">
                        <div className="cardBody">
                            <h3 style={{ fontWeight: "700" }} className="mb-3">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <input type="email" onBlur={handleBlur} className="mb-3 createAccountInput" name="email" placeholder="Email" required />
                                <br />
                                <input type="password" className="mb-3 createAccountInput" onBlur={handleBlur} name="password" placeholder="Password" required />
                                <br />
                                <input type="checkbox" name="" id="" /> Remember me <a href="#" className="creactAccountButton" style={{ marginLeft: "150px" }}>Forgot Password </a>
                                <br /><br />
                                <input type="submit" className="button" value="Login" />
                                <br />
                                <br />
                            Don't Have an Account <a style={{ marginLeft: "100px" }} className="creactAccountButton" href="#" onClick={() => props.handleLogin()}>Create an Account</a>

                            </form>
                        </div>

                    </div>
            }
            <div>
                <div>
                    <div className="containerStyle">
                        <Row className="d-flex align-items-center text-center">
                            <Col>
                                <div className="lineStyle justify-content-end" style={{ marginLeft: '80px' }}></div>
                            </Col>
                            <Col>
                                <h3 style={{ color: "#000", marginRight: "100px", marginTop: "10px" }}>Or</h3>
                            </Col>
                            <Col>
                                <div className="lineStyle" style={{ marginLeft: '-83px' }}></div>
                            </Col>
                        </Row>
                        <Container>
                            <Row className="d-flex align-items-center loginWithstyle mb-3" onClick={handleFbSignIn} style={{ cursor: "pointer" }} >
                                <Col xs={3}>
                                    <img src={icon1} alt="" width="50px" />
                                </Col>
                                <Col>
                                    <h5>Continue with Facebook</h5>
                                </Col>
                            </Row>
                            <Row onClick={handleSignIn} className="d-flex align-items-center loginWithstyle mb-3" style={{ cursor: "pointer" }}>
                                <Col xs={3}>
                                    <img src={googleIcon} alt="" width="45px" />
                                </Col>
                                <Col>
                                    <h5>Continue with Google</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Registration;