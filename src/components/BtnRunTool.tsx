import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BtnRunTool = () => {
    return (
        <Button
            sx={{
                height: '50%',
                backgroundColor: '#133f6e',
                justifyContent: 'flex-end',
            }}
            variant="contained"
            // onClick={onClick}
            type="submit"
        >
            <PlayArrowIcon />
            Run tool
        </Button>
    );
};
export default BtnRunTool;
