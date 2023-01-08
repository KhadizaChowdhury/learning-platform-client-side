import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signOut, } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { Toast } from 'bootstrap';

const auth = getAuth(app);

const Login = () => {
    const { user, signIn, googleSignIn, gitSignIn } = useContext(AuthContext);
    // console.log(signIn, googleSignIn);

    const googleProvider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [passwordError, setPasswordError] = useState('')
    const [userEmail, setEmail] = useState('')
    const logIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    Toast('Please verify your email address');
                }
            })
            .catch(error => {
                setPasswordError(error.message)
            })
    }

    const googleSignInHandle = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }

    const gitSignInHandle = () => {
        gitSignIn(gitHubProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }

    const emailHandle = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const resetPassword = () => {
        if (!userEmail) {
            alert('Please Enter Your Registered Email')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password rest link sent! Please Check Your Email')
            })
            .catch(error => {
                console.error("Error:", error);
                setPasswordError(error.message)
            })
    }
    const signOutHandle = () => {
        signOut(auth)
            .then(() => {
                // setSuccess(false);
            })
            .catch(() => {
            })
    }
    return (
        <div className='container mt-5 col-md-6 m-auto'>
            {
                user?.uid ?
                    <div>
                        <p className='text-success'>Logged In</p>
                        <button onClick={signOutHandle}>Sign Out</button>
                    </div>
                    :
                    <div><div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">LogIn Here!</h1>
                    </div>
                        <div className="hero-content course-dark flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <Form onSubmit={logIn} className="my-4 course-dark">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onBlur={emailHandle} name="email" type="email" placeholder="Enter email" required />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="text" name="password" placeholder="Password" required />
                                            {
                                                passwordError &&
                                                <div className="alert alert-warning shadow-lg my-4">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                        <span>{passwordError}</span>
                                                    </div>
                                                </div>
                                            }
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Text className="text-muted">
                                                Agree with All conditions.
                                            </Form.Text>
                                            <Form.Check type="checkbox" label="Check me out" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    <p className="mt-3">Not a member yet? <Link to='/register'>Join now</Link></p>
                                    <p>Forgot Password? <Link onClick={resetPassword}>Reset Password</Link></p>
                                    <div className='d-flex my-3'>
                                        <div className='me-3'>
                                            <button onClick={googleSignInHandle} className="btn btn-sm btn-outline btn-success">Google Sign In</button>
                                        </div>
                                        {/* <div>
                                <button onClick={fbSignInHandle}>Facebook Sign In</button>
                            </div> */}
                                        <div>
                                            <button onClick={gitSignInHandle}>GitHub Sign In</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;