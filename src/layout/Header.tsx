import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import logo from '/src/assets/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Header = () => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    const handleLogout = () => {
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('username');
        const logout = async () => {
            try {
                const response = await axios.post(
                    'http://127.0.0.1/logout/',
                    {}
                );
                console.log(response);
            } catch {
                console.log('err');
            }
        };
        logout;
        window.location.href = '/';
    };
    const handleLogin = () => {
        window.location.href = '/login';
    };
    return (
        <AppBar
            sx={{
                maxWidth: '100%',
                // position: 'unset',
                position: 'fixed',
            }}
        >
            <Container
                sx={{
                    backgroundColor: 'white',
                    '@media(min-width:100px)': {
                        maxWidth: '100%',
                    },
                    boxShadow: '0px 4px 8px   rgba(172, 176, 250,2)',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="VinBigData Logo"
                            sx={{
                                width: 'auto',
                                height: '30px',
                                paddingRight: '30px',
                            }}
                        />
                        <Box>
                            <Tooltip title="">
                                <Button
                                    sx={{
                                        fontStyle: 'bold',
                                        color: '#40406d',
                                        fontFamily: 'sans-serif',
                                    }}
                                    key="biomodel"
                                    // onClick={handleClick}
                                >
                                    <strong>Biomodel Browser</strong>
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>

                    {username ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ color: '#40406d' }}>
                                {`Welcome, ${username}`}
                            </Typography>
                            <Button
                                onClick={handleLogout}
                                sx={{
                                    width: ' 100px',
                                    display: 'flex',
                                    alignSelf: 'center',
                                }}
                            >
                                <Typography sx={{ color: '#40406d' }}>
                                    Logout
                                </Typography>
                            </Button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ color: '#40406d' }}>
                                {`Welcome, Guest`}
                            </Typography>
                            <Button
                                onClick={handleLogin}
                                sx={{
                                    width: ' 100px',
                                    display: 'flex',
                                    alignSelf: 'center',
                                    margin: '0 20px',
                                }}
                            >
                                <Typography sx={{ color: '#40406d' }}>
                                    Login
                                </Typography>
                            </Button>
                            <Typography variant="h6" sx={{ color: '#40406d' }}>
                                @login_required Ver 1.0.0
                            </Typography>
                        </div>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
