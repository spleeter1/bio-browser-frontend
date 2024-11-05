import { Button, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const username = localStorage.getItem('username');
    //     if (username) {
    //         setIsLoggedin(true);
    //         navigate('/');
    //     }
    // }, [isLoggedin, navigate]);
    // function getCookie(name: string): string {
    //     const value = `; ${document.cookie}`;
    //     const parts = value.split(`; ${name}=`);
    //     if (parts.length === 2) {
    //         const cookieValue = parts.pop()?.split(';').shift();
    //         return cookieValue ? cookieValue : '';
    //     }
    //     return '';
    // }

    function printAllCookies() {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.split('=').map(c => c.trim());
            console.log(`Name: ${name}, Value: ${value}`);
        });
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await api.post('/login/', { username, password });
            if (response.status === 200) {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem(
                    'access_token',
                    response.data.access_token
                );
                localStorage.setItem(
                    'refresh_token',
                    response.data.refresh_token
                );
                setIsLoggedin(true);
                console.log('respone login: ', response);
                printAllCookies();
                navigate('/');
            }
        } catch (err) {
            console.error('Login error', err);
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
