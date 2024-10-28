import { Box} from '@mui/material';
import axios from 'axios';
import { useState, ChangeEvent } from 'react';
import BtnRunTool from '../../components/BtnRunTool';
import InputUploadUI from '../../components/InputUploadUI';
import DropdownSelect from '../../components/DropdownSelect';

const bamOptions = [
    {label:'VN007.chr22.bam',value:'VN007.chr22.bam'}
]
type FormSVDeeplearningProps = {
    onResponse: (response: any) => void; // Prop để truyền phản hồi lên component cha
    onSubmitting: (isSubmitting: boolean) => void;
};
const FormSVDeeplearning: React.FC<FormSVDeeplearningProps> = ({onResponse,onSubmitting}) => {
    const [selectedFile, setSelectedFile] = useState<File|Blob|null>(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setSelectedFile(file);
        }
    }
    const handleDropdownChange = (value: string) => {
        setSelectedOption(value); 
    };
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitting(true);

        const formData = new FormData();
        if (selectedFile) { 
            formData.append('zipped_vcfs', selectedFile); 
        }
        formData.append('bam_file_name',selectedOption);
    
        try {
            const response = await axios.post(
                'http://192.168.1.135:32100/sv-deeplearning',
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
    }
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
                            onChange={handleChangeFile}
                        />
                    </div>
                    <div>
                        <DropdownSelect options={bamOptions} onChange={(e) => {handleDropdownChange(e.target.value)}} />
                    </div>
                </div>

                <div style={{ padding: '2%' }}>
                    <BtnRunTool />
                </div>
            </form>
        </Box>
    );
}
export default FormSVDeeplearning;
