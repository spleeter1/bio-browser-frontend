import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent } from 'react';
// import { pushFile, resetFiles } from '../../redux/fileStoreSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface InputUploadUIProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputUploadUI: React.FC<InputUploadUIProps> = ({ onChange }) => {
    return (
        <div>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                    background: 'linear-gradient(to right, #891731, #133f6e)',
                }}
            >
                Upload file
                <VisuallyHiddenInput type="file" onChange={onChange} multiple />
            </Button>
        </div>
    );
};

export default InputUploadUI;
