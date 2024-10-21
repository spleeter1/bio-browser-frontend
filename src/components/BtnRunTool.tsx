import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type BtnRunToolProps = {
    onClick: () => void;
};
const BtnRunTool: React.FC<BtnRunToolProps> = ({ onClick }) => {
    return (
        <Button
            sx={{
                height: '50%',
                backgroundColor: '#133f6e',
                justifyContent: 'flex-end',
            }}
            variant="contained"
            onClick={onClick}
        >
            <PlayArrowIcon />
            Run tool
        </Button>
    );
};
export default BtnRunTool;
