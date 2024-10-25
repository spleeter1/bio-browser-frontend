import { Box, TextField } from '@mui/material';
import InputUploadUI from '../../components/InputUploadUI';
import { ChangeEvent, useState } from 'react';
import BtnRunTool from '../../components/BtnRunTool';
import axios from 'axios';

type FormPlinkProps = {
    onResponse: (response: any) => void; // Prop để truyền phản hồi lên component cha
    onSubmitting: (isSubmitting: boolean) => void;
};
const FormPlink: React.FC<FormPlinkProps> = ({ onResponse, onSubmitting }) => {
    // const fileKeys = ['base_file', 'target_file'];
    const [selectedFiles, setSelectedFiles] = useState<
        { file: File; key: string }[]
    >([]);
    const [pValue, setPValue] = useState('');

    const handleStringParam = (e: ChangeEvent<HTMLInputElement>) => {
        setPValue(e.target.value);
    };
    const handleChangeFile =
        (fileType: 'base_file' | 'target_file') =>
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                const file = e.target.files[0]; // Lấy file đầu tiên được chọn
                setSelectedFiles(prev => {
                    const existingIndex = prev.findIndex(
                        entry => entry.key === fileType
                    );
                    if (existingIndex > -1) {
                        return prev.map((entry, index) =>
                            index === existingIndex
                                ? { key: fileType, file }
                                : entry
                        );
                    } else {
                        return [...prev, { key: fileType, file }];
                    }
                });
            }
        };
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitting(true);

        const formData = new FormData();
        selectedFiles.forEach(({ file, key }) => {
            formData.append(key, file);
        });

        formData.append('p_value', pValue);
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios.post(
                'http://192.168.1.135:32100/plink',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            onResponse(response);
        } catch (error) {
            onSubmitting(false);
            console.error('Error uploading files:', error);
            alert('error');
            onResponse(null);
        } finally {
            onSubmitting(false);
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: 'flex',
                        paddingLeft: '2%',
                        paddingTop: '3%',
                        justifyContent: 'space-around',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <label>Base File Name</label>
                        <InputUploadUI
                            onChange={handleChangeFile('base_file')}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <label>Target File Name</label>
                        <InputUploadUI
                            onChange={handleChangeFile('target_file')}
                        />
                    </div>
                    <div style={{ padding: '2%' }}>
                        <TextField
                            id="input-p-value"
                            label="p-value"
                            onChange={handleStringParam}
                        />
                    </div>
                </div>

                <div style={{ padding: '2%' }}>
                    <BtnRunTool />
                </div>
            </form>
        </Box>
    );
};
export default FormPlink;
