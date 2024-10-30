import { Box } from '@mui/material';
import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';
const Home = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.post('http://127.0.0.1:5000', {});
    //             if (response.status === 200) {
    //                 console.log('successfully');
    //             } else {
    //                 console.log('aa');
    //                 navigate('/login');
    //             }
    //         } catch {}
    //     };
    //     fetchData;
    // }, []);
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                // placeContent: ,
            }}
        >
            <h1 style={{}}>Welcome</h1>
            <Box
                component="img"
                src={logo}
                alt="VinBigData Logo"
                sx={{
                    width: 'auto',
                    height: '10%',
                    paddingRight: '30px',
                    // alignSelf: '',
                }}
            />
        </div>
    );
};
export default Home;
