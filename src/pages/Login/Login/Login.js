import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, handleEmailChange, handlePasswordChange, handleRegistration, toggleLogin, error, isLogin, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
    }
    return (
        <div className="w-1/5 mx-auto mt-5">
            <form onSubmit={handleRegistration}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" onBlur={handleEmailChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                </FloatingLabel>
                <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" htmlFor="gridCheck1">Already Registered?</label>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <Button type="submit" className="bg-green-400 hover:bg-green-500 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-1 transform transition mb-2">{user.email || isLogin ? 'Login' : 'Register'}</Button>
            </form>
            <br />
            <Button onClick={handleGoogleLogin} className="bg-green-400 hover:bg-green-500 text-white px-8 py-2 duration-300 hover:scale-110 focus:outline-none poppins rounded-full mt-0 transform transition mb-2">Google Sign In</Button>
        </div>
    );
};

export default Login;