import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import CollapseShowFile from './CollapseShowFile';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ListHistory = () => {
    const [files, setFiles] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const showHistoryFiles = async () => {
        try {
            const resp = await axios.post(
                `http://127.0.0.1:5000/historyFiles/`,
                {withCredentials: true }
            );
            if (resp.status == 200) {
                console.log(resp.data);
                setFiles(resp.data);
            }
        } catch (error) {}
    };

    useEffect(() => {
        showHistoryFiles();
    }, [refresh]);
    const handleRefresh = () => {
        setRefresh(!refresh);
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
