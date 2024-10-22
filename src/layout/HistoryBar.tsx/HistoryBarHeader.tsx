import { Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import SearchBar from '../../components/SearchBar';
import DehazeIcon from '@mui/icons-material/Dehaze';
// import CreateIcon from '@mui/icons-material/Create';

const HistoryBarHeader = () => {
    return (
        <div
            className="label-history-management"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '5%',
                }}
            >
                <Typography style={{ flexGrow: 2, fontSize: 18 }}>
                    History
                </Typography>
                <div
                    style={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    <Tooltip title="Create History">
                        <AddIcon />
                    </Tooltip>
                    <Tooltip title="Switch History">
                        <RepeatSharpIcon />
                    </Tooltip>
                    <Tooltip title="History Options">
                        <DehazeIcon />
                    </Tooltip>
                </div>
            </div>
            <div style={{ padding: '0 5% ' }}>
                <SearchBar />
            </div>
        </div>
    );
};
export default HistoryBarHeader;
