import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

type StorageButtonProps = {
    data: Blob | string;
    filename: string;
    endpoint: string;
};
const StorageButton: React.FC<StorageButtonProps> = ({
    data,
    filename,
    endpoint,
}) => {
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('user', 'biomodel');

        const newPic = new File([data], filename);
        // console.log(filename);
        formData.append('image', newPic);
        try {
            const response = await axios.post(
                `http://192.168.1.129:7777/${endpoint}/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                alert(JSON.stringify(response.data).toString());
            }
        } catch (error) {
            console.error('Cannot store files', error);
        }
    };

    return (
        <Box
            component="div"
            sx={{
                borderRadius: 1,
                bgcolor: '#e8ecee',
                '&:hover': {
                    background: 'linear-gradient(to right, #891731, #133f6e)',
                    color: 'white',
                },
                display: 'flex',
                flexDirection: 'column',
                padding: '5px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={handleFileUpload}
        >
            <div>
                <StorageIcon />
            </div>
            <div>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Save your result
                </Typography>
            </div>
        </Box>
    );
};
export default StorageButton;