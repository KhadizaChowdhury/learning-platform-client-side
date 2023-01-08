import React, { useContext, useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { Toast } from 'react-bootstrap';

const auth = getAuth(app);
const Register = () => {
    const { user, createUser, verifyEmail, updateUserProfile, googleSignIn, fbSignIn, gitSignIn } = useContext(AuthContext);
    // console.log(createUser);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [passwordError, setPasswordError] = useState('')
    const [accepted, setAccepted] = useState(false);
    // const [success, setSuccess] = useState(false)

    const reg = (event) => {
        event.preventDefault();
        // setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setPasswordError('Your Password does not match!')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // setSuccess(true);
                form.reset();
                handleUpdateProfile(name, photoURL);
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    Toast('Please verify your email address');
                }
                handleAccepted();
                handleVerifyEmail();
                Toast('Please verify your email address');
            })
            .catch(error => {
                setPasswordError(error.message)
            })

        //Validate Password
        // (!/^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(password))  
        if (!/(?=(.*[A-Z]))(?=(.*[0-9]){2,})/.test(password)) {
            setPasswordError('Password should be 6 characters with at least 2 uppercase letters & 2 numbers')
            return;
        }
        setPasswordError('');

    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    const googleSignInHandle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    // const fbSignInHandle = () => {
    //     fbSignIn()
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             console.error("Error:", error);
    //         })

    // }
    const gitSignInHandle = () => {
        gitSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                console.log(profile)
                Toast('profile updated')
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    const updateP = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfile(auth.currentUser, profile)
            .then(() => {
                console.log(profile)
                alert('profile updated')
            })
            .catch(error => {
                console.error("Error:", error);
            })
    }
    return (
        <div className='container mt-5 w-50 m-auto'>
            {
                user?.uid ?
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Update Profile</h1>
                        </div>
                        <div className="hero-content course-dark flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <Form onSubmit={updateP} className="my-4">
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicImg">
                                            <Form.Label>Image Url</Form.Label>
                                            <Form.Control name="photoURL" type="text" placeholder="Enter Your Image URL" />
                                        </Form.Group>
                                        {
                                            passwordError &&
                                            <div className="alert alert-warning shadow-lg my-4">
                                                <div>
                                                    <span>{passwordError}</span>
                                                </div>
                                            </div>
                                        }
                                        {
                                            user?.uid ?
                                                <Button variant="primary" type="submit">
                                                    Update Now
                                                </Button> :
                                                <Button variant="primary" type="submit" disabled={(!accepted)}>
                                                    Register Now
                                                </Button>
                                        }
                                    </Form>
                                    <p className="label"> Already a member?
                                        <Link to='/login' className="btn btn-sm btn-outline btn-error">Sign In</Link>
                                    </p>
                                    <div className='d-flex my-3'>
                                        <button onClick={googleSignInHandle} className="my-2 btn btn-block btn-success">Google Sign In</button>
                                        {/* <button onClick={fbSignInHandle} className="my-2 btn btn-block btn-info">Facebook Sign In</button> */}
                                        <button onClick={gitSignInHandle} className="my-2 btn btn-block">GitHub Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register Now!</h1>
                        </div>
                        <div className="hero-content course-dark flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <Form onSubmit={reg} className="my-4">
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control name="name" type="text" placeholder="Enter Your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicImg">
                                            <Form.Label>Image Url</Form.Label>
                                            <Form.Control name="photoURL" type="text" placeholder="Enter Your Image URL" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="text" name="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="text" name="confirm" placeholder="Confirm Password" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Text className="text-muted">
                                                Agree with All conditions.
                                            </Form.Text>
                                            <Form.Check onClick={handleAccepted} type="checkbox" label="Check me out" required />
                                        </Form.Group>
                                        {
                                            passwordError &&
                                            <div className="alert alert-warning shadow-lg my-4">
                                                <div>
                                                    <span>{passwordError}</span>
                                                </div>
                                            </div>
                                        }
                                        {
                                            user?.uid ?
                                                <Button variant="primary" type="submit" disabled={(!accepted)}>
                                                    Update Now
                                                </Button> :
                                                <Button variant="primary" type="submit" disabled={(!accepted)}>
                                                    Register Now
                                                </Button>
                                        }
                                    </Form>
                                    <p className="label"> Already a member?
                                        <Link to='/login' className="btn btn-sm btn-outline btn-error">Sign In</Link>
                                    </p>
                                    <div className='d-flex my-3'>
                                        <button onClick={googleSignInHandle} className="my-2 btn btn-block btn-success">Google Sign In</button>
                                        {/* <button onClick={fbSignInHandle} className="my-2 btn btn-block btn-info">Facebook Sign In</button> */}
                                        <button onClick={gitSignInHandle} className="my-2 btn btn-block">GitHub Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Register;