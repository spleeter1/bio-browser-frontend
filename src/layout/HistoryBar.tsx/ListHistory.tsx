import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import CollapseShowFile from './CollapseShowFile';
// import axios from 'axios';
import { useCallback, useState } from 'react';
import api from '../../api';

const ListHistory = () => {
    const [files, setFiles] = useState([]);
    const [, setRefresh] = useState(false);

    const showHistoryFiles = useCallback(async () => {
        try {
            const response = await api.post(`/historyFiles/`, {});
            if (response.status === 200) {
                console.log(response.data);
                setFiles(response.data);
            } else {
                setFiles([]);
            }
        } catch (error) {
            console.error('Error fetching history files:', error);
            setFiles([]);
        }
    }, []);

    const handleRefresh = () => {
        showHistoryFiles();
        setRefresh(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#dee1e6',
                }}
            >
                <Button>
                    <SettingsIcon />
                </Button>
                <Button onClick={handleRefresh}>
                    <RefreshIcon />
                </Button>
            </div>
            <div style={{ marginTop: '10px', height: '50px', padding: '5px' }}>
                {files.length !== 0
                    ? files.map((file, index) => (
                          <CollapseShowFile
                              key={index}
                              idx={index}
                              user_id={file['user_id']}
                              id={file['id']}
                              file_name={file['file_name']}
                              file_path={file['file_path']}
                              date={file['date']}
                          />
                      ))
                    : 'Error Access Database'}
            </div>
        </div>
    );
};
export default ListHistory;
