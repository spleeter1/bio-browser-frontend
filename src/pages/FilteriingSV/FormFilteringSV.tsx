import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useState, ChangeEvent } from 'react';
import BtnRunTool from '../../components/BtnRunTool';
import InputUploadUI from '../../components/InputUploadUI';
import DropdownSelect from '../../components/DropdownSelect';

type FormFilteringSVProps = {
    onResponse: (response: any) => void; // Prop để truyền phản hồi lên component cha
    onSubmitting: (isSubmitting: boolean) => void;
};
const FormFilteringSV: React.FC<FormFilteringSVProps> = () => {
    // const [selectedFiles, setSelectedFiles] = useState<
    //     { file: File; key: string }[]
    // >([]);
    // const [pValue, setPValue] = useState('');

    // const handleStringParam = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPValue(e.target.value);
    // };
    const handleChangeFile =
        (fileType: 'base_file' | 'target_file') =>
        (e: ChangeEvent<HTMLInputElement>) => {};
    //         if (e.target.files) {
    //             const file = e.target.files[0]; // Lấy file đầu tiên được chọn
    //             setSelectedFiles(prev => {
    //                 const existingIndex = prev.findIndex(
    //                     entry => entry.key === fileType
    //                 );
    //                 if (existingIndex > -1) {
    //                     return prev.map((entry, index) =>
    //                         index === existingIndex
    //                             ? { key: fileType, file }
    //                             : entry
    //                     );
    //                 } else {
    //                     return [...prev, { key: fileType, file }];
    //                 }
    //             });
    //         }
    //     };
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {};
    //     e.preventDefault();
    //     onSubmitting(true);

    //     const formData = new FormData();
    //     selectedFiles.forEach(({ file, key }) => {
    //         formData.append(key, file);
    //     });

    //     formData.append('p_value', pValue);
    //     for (const [key, value] of formData.entries()) {
    //         console.log(key, value);
    //     }
    //     try {
    //         const response = await axios.post(
    //             'http://192.168.1.135:32100/plink',
    //             formData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                 },
    //             }
    //         );
    //         onResponse(response);
    //     } catch (error) {
    //         onSubmitting(false);
    //         console.error('Error uploading files:', error);
    //         alert('error');
    //         onResponse(null);
    //     } finally {
    //         onSubmitting(false);
    //     }
    // };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: 'flex',
                        paddingLeft: '2%',
                        paddingTop: '3%',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <label>Zipped VCF files</label>
                        <InputUploadUI
                            onChange={handleChangeFile('base_file')}
                        />
                    </div>
                    <div>
                        <DropdownSelect options={[]} onChange={() => {}} />
                    </div>
                </div>

                <div style={{ padding: '2%' }}>
                    <BtnRunTool />
                </div>
            </form>
        </Box>
    );
};
export default FormFilteringSV;
