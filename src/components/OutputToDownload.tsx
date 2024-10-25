import { Box, Typography } from '@mui/material';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';

type OutputToDownloadProps = {
    filename: string;
    fileContent: Blob | string; // Có thể nhận vào Blob hoặc URL
};

const OutputToDownload: React.FC<OutputToDownloadProps> = ({
    filename,
    fileContent,
}) => {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.style.display = 'none';

        // Nếu fileContent là Blob
        if (fileContent instanceof Blob) {
            const url = URL.createObjectURL(fileContent);
            a.href = url;
        } else {
            a.href = fileContent;
        }

        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alert('File downloaded.');
    };

    return (
        <Box
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
            onClick={handleDownload}
        >
            <div>
                <FolderZipOutlinedIcon />
            </div>
            <div>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Click here to download result
                </Typography>
            </div>
        </Box>
    );
};

export default OutputToDownload;
