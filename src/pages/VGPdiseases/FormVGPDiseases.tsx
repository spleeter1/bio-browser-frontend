import {
    Box,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import BtnRunTool from '../../components/BtnRunTool';

const options = [
    'PRSice-2 (EAS)',
    'LDpred2-auto (EAS)',
    'LDpred2-grid (EAS)',
    'PRS-CS (EAS)',
    'PRS-CSx (EAS + EUR)',
    'PRSice-2 (CKB)',
    'LDpred2-auto (CKB)',
    'LDpred2-grid (CKB)',
    'PRS-CS (CKB)',
    'PGS catalog',
];
type FormVGPDiseasesProps = {
    onResponse:  (images: string[]) => void; // Prop để truyền phản hồi lên component cha
    onSubmitting: (isSubmitting: boolean) => void;
}
const FormVGPDiseases : React.FC<FormVGPDiseasesProps>= ({onResponse,onSubmitting}) => {


    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        Array(options.length).fill(true)
    );
    const allChecked = checkedItems.every(Boolean);
    // const [images, setImages] = useState([]);

    const handleCheckboxChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            setCheckedItems(prevCheckedItems => {
                const updatedCheckedItems = [...prevCheckedItems];
                updatedCheckedItems[index] = checked;
                return updatedCheckedItems;
            });
        };

    const handleCheckboxAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setCheckedItems(Array(options.length).fill(checked));
    };
    const handleRunTool = async (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitting(true);

        try {
            const selectedOptions = options.filter(
                (_, index) => checkedItems[index]
            );
            const tmp = selectedOptions.map(option => `'${option}'`).join(',');
            const res = `[${tmp}]`;

            console.log(res)

            const formData = new FormData();
            formData.append('methods', res);

            const response = await axios.post(
                'http://192.168.1.135:32100/vgp-diseases',
                formData
            );
            // console.log(data);
            console.log('Server response:', response.data);
            // setImages(response.data.images);
            
            onResponse(response.data.images);
        } catch (error) {
            console.error('Error sending data:', error);
            onSubmitting(false);
        } finally {
            onSubmitting(false);
        }
    };

    return (
        <Box sx={{}}>
            <form onSubmit={handleRunTool}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            gap: 1,
                            padding: '0 7%',
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={allChecked}
                                    onChange={handleCheckboxAll}
                                    inputProps={{ 'aria-label': 'All' }}
                                />
                            }
                            label="All"
                        />

                        {options.slice(0, 5).map((option, i) => (
                            <FormControlLabel
                                key={option}
                                control={
                                    <Checkbox
                                        onChange={handleCheckboxChange(i)}
                                        checked={checkedItems[i]}
                                        inputProps={{ 'aria-label': option }}
                                    />
                                }
                                label={option}
                            />
                        ))}
                    </Box>
                    {/* cọt giữa */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            gap: 1,
                            padding: '0 7%',
                        }}
                    >
                        {options.slice(5, 9).map((option, i) => {
                            const idx = i + 5;
                            return (
                                <FormControlLabel
                                    key={option}
                                    control={
                                        <Checkbox
                                            onChange={handleCheckboxChange(idx)}
                                            checked={checkedItems[idx]}
                                            inputProps={{ 'aria-label': option }}
                                        />
                                    }
                                    label={option}
                                />
                            );
                        })}
                    </Box>
                    {/* cột phải */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            gap: 1,
                            padding: '0 7%',
                        }}
                    >
                        {options.slice(-1).map((option, i) => {
                            const idx = i + 9;
                            return (
                                <FormControlLabel
                                    key={option}
                                    control={
                                        <Checkbox
                                            onChange={handleCheckboxChange(idx)}
                                            checked={checkedItems[idx]}
                                            inputProps={{ 'aria-label': option }}
                                        />
                                    }
                                    label={option}
                                />
                            );
                        })}
                    </Box>
                </Box>
                <BtnRunTool/>
            </form>
           
        </Box>
    );
};
export default FormVGPDiseases;
