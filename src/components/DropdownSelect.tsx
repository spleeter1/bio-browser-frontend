import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';

type DropdownSelectProps = {
    options: { label: string; value: string }[];
    onChange: (event: SelectChangeEvent) => void;
};
const DropdownSelect: React.FC<DropdownSelectProps> = ({
    options,
    onChange,
}) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel>Bam file</InputLabel>
            <Select onChange={onChange} style={{ width: '150px' }}>
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default DropdownSelect;
