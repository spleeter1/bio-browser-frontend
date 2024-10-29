import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

type StorageButtonProps= {
    files?: File[] | Blob[];
    images?: string[]; 
    otherData?: any;
    endpoint:string;
}

const StorageButton: React.FC<StorageButtonProps> = ({ files, images, otherData,endpoint }) => {
    const handleFileUpload = async () => {
        const formData = new FormData();

        if (files) {
            files.forEach((file, index) => {
                formData.append(`file_${index}`, file);
            });
            console.log('store:',files);
        }

        if (images) {
            images.forEach((image, index) => {
                formData.append(`image_${index}`, image);
            });
            console.log('store:',images);
        }

        if (otherData) {
            Object.keys(otherData).forEach((key) => {
                formData.append(key, otherData[key]);
            });
        }

        try {
            const response = await axios.post(`http://localhost:5000/${endpoint}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                alert('Data saved successfully');
            }
        } catch (error) {
            alert('Failed to save data');
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
