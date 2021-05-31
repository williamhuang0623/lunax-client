import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loginStyles } from './styles.js';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import AuthApi from '../../lib/api/Auth';
const Login = () => {
    const router = useRouter();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginValues({ ...loginValues, [name]: value });
    };
    const login = async () => {
        try {
            const token = await new AuthApi().login(loginValues);
            if (token) {
                localStorage.setItem('token', JSON.stringify(token));
                router.push('/admin');
            }
        } catch (error) {
            console.log(error);
            setMessage('Wrong creds');
        }
    };

    useEffect(async () => {
        if (localStorage.getItem('token')) {
            router.push('/admin');
        }
    }, []);

    const [loginValues, setLoginValues] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    return (
        <div className="login-container">
            <header className="login-header">
                <div className="login-form-container">
                    <TextField
                        variant="standard"
                        placeholder="Email"
                        margin="normal"
                        required
                        name="email"
                        onChange={handleInputChange}
                        value={loginValues.email}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Password"
                        margin="normal"
                        required
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={loginValues.password}
                    />

                    <div className="login-button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                login();
                            }}
                        >
                            Log In
                        </Button>
                    </div>
                    <Typography color="primary">{message}</Typography>
                </div>
            </header>
            <style jsx>{loginStyles}</style>
        </div>
    );
};

export default Login;
