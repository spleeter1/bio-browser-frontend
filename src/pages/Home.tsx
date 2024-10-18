import { Box } from '@mui/material';
import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Home = () => {
    // const navigate = useNavigate();
    // async () => {
    //     try {
    //         const apiUrl = import.meta.env.VITE_APP_BACKEND_URL || 'http://192.168.1.129:7777';
    //         const response = await axios.post(`${apiUrl}`, {});
    //         // console.log(response.status);
    //         console.log(response);
    //         if (response.status === 200) navigate('/');
    //     } catch (error) {
    //         alert('lỗi');
    //     }
    // };
    return (
        <div
            style={{
                // display: 'flex',
                // padding: '1%',
                // width: '55%',
                // flexDirection: 'column',
                // alignItems: 'center',
                justifyContent:'center',
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
                    alignSelf: '',
                }}
            />
        </div>
    );
};
export default Home;