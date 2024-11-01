import { Button, Link, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('user_id');
        if (userId) {
            setIsLoggedin(true);
        }
    }, []);
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/login/',
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(response.status);
            if (response.status === 200) {
                // localStorage.setItem('authToken', response.data.token);
                sessionStorage.setItem('user_id', response.data.user_id);
                sessionStorage.setItem('username', response.data.username);
                setIsLoggedin(true);
                alert('login successfully');
                // window.location.href = '/';
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed!');
        }
    };

    return (
        <div>
            {isLoggedin === false ? (
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        zIndex: '99',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <form
                        onSubmit={handleLogin}
                        style={{
                            zIndex: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            gap: '30px',
                            padding: '50px 50px 50px 50px',
                            borderRadius: '5%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: 'rgb(0,0,0,0.5)',
                                alignSelf: 'center',
                                fontFamily: 'sans-serif',
                            }}
                        >
                            Login
                        </Typography>
                        <div>
                            <TextField
                                label="username"
                                variant="outlined"
                                type="text"
                                sx={{}}
                                value={username}
                                required
                                onChange={e => setUsername(e.target.value)}
                            ></TextField>
                        </div>
                        <div>
                            {' '}
                            <TextField
                                label="password"
                                variant="outlined"
                                type="password"
                                value={password}
                                sx={{}}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <Button
                            sx={{
                                background:
                                    'linear-gradient(to right, #891731, #133f6e)',
                                color: 'white',
                                width: '100%',
                            }}
                            type="submit"
                        >
                            Submit
                        </Button>

                        <Link href="/register">Sign up</Link>
                    </form>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};
export default Login;
