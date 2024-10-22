import { TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import StorageIcon from '@mui/icons-material/Storage';

const HistoryLabel = () => {
    const [nameHistory, setNameHistory] = useState('Unnamed History');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameHistory(e.target.value);
    };

    const [isEditing, setIsEditing] = useState(false);
    const handelClick = () => {
        setIsEditing(!isEditing);
    };

    const handleBlur = () => {
        if (isEditing) {
            setIsEditing(false);
        }
    };
    return (
        <div
            className="label-history-management"
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '5%',
            }}
        >
            <div
                style={{
                    paddingTop: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    className="history-name"
                    style={{ flexGrow: 2, fontSize: 20 }}
                >
                    <TextField
                        id=""
                        variant="standard"
                        sx={{ padding: '0px' }}
                        value={nameHistory}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        disabled={!isEditing}
                    />
                </Typography>
                <Tooltip title="Create History" onClick={handelClick}>
                    <CreateIcon />
                </Tooltip>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '20px',
                }}
            >
                <Tooltip title="History Size">
                    <StorageIcon />
                </Tooltip>
            </div>
        </div>
    );
};
export default HistoryLabel;
