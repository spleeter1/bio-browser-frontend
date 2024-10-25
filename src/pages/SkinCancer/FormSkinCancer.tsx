import { Box } from '@mui/material';
import BtnRunTool from '../../components/BtnRunTool';
import InputUploadUI from '../../components/InputUploadUI';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

type FormSkinCancerProps = {
    onResponse: (selectedFile: File, response: string) => void; // Prop để truyền phản hồi lên component cha
    onSubmitting: (isSubmitting: boolean) => void;
};
const FormSkinCancer: React.FC<FormSkinCancerProps> = ({
    onResponse,
    onSubmitting,
}) => {
    const fileKeys = ['files'];
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedFiles(filesArray);
        }
    };
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitting(true);

        const formData = new FormData();
        selectedFiles.map((file, index) => {
            formData.append(fileKeys[index], file);
            // console.log(selectedFiles);
        });
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios.post(
                'http://192.168.1.135:32100/skin-cancer',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(selectedFiles[0]);
            onResponse(selectedFiles[0], response.data);
        } catch (error) {
            onSubmitting(false);
            console.error('Error uploading files:', error);
            onResponse(selectedFiles[0], 'Error');
        } finally {
            onSubmitting(false);
        }
    };
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <div style={{ paddingLeft: '2%', paddingTop: '3%' }}>
                    <InputUploadUI onChange={handleChangeFile} />
                </div>

                <div style={{ padding: '2%' }}>
                    <BtnRunTool />
                </div>
            </form>
        </Box>
    );
};
export default FormSkinCancer;
