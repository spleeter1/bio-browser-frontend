import { Typography } from '@mui/material';
import { useState } from 'react';
import Loading from '../../components/Loading';
import OutputToDownload from '../../components/OutputToDownload';
import FormSVDeeplearning from './FormSVDeeplearning';
import StorageButton from '../../components/StorageButton';

type FilteringSVToolParamProps = {};
const FilteringSVToolParam: React.FC<FilteringSVToolParamProps> = () => {
    const [, setResponse] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [downloadData, setDownloadData] = useState<{
        filename: string;
        fileContent: File | Blob | string;
    } | null>(null);
    const [saveFilesData,setSaveFilesData] = useState<Blob[]|File[]>([]);

    const handleWaitResponse = (submitting: boolean) => {
        setIsLoading(submitting);
    };
    const handleResponse = (response: any) => {
        setResponse(response);
        console.log('RESPONSE', response);

        if (response && response.data) {
            handleDownload(response);
        }
    };
    const handleDownload = (response: any) => {
        const fileName = response.headers['content-disposition']
            ? response.headers['content-disposition']
                  .split('filename=')[1]
                  .replace(/"/g, '')
            : 'downloaded_file';

        const blob = new Blob([response.data], {
            type: response.headers['content-type'],
        });
        setDownloadData({ filename: fileName, fileContent: blob });

        setSaveFilesData(prevFiles => [...prevFiles,blob])
    };
    // useEffect(() => {}, []); //để gọi nội dung hướng dẫn
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div
                style={{
                    borderLeft: '4px solid #e8ecee',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        background: '#e8ecee',
                        fontWeight: 'bold',
                        borderTopRightRadius: 5,
                        padding: '5px',
                        paddingLeft: '3%',
                        color: '#505398',
                    }}
                >
                    Data
                </Typography>

                {/* <thẻ component FORM></thẻ> */}
                <FormSVDeeplearning
                    onResponse={handleResponse}
                    onSubmitting={handleWaitResponse}
                />
                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>

            {downloadData && (
               <div> 
               <div style={{ paddingTop: '20px' }}>
               <OutputToDownload
                   filename={downloadData.filename}
                   fileContent={downloadData.fileContent}
               />
               </div>
               <div style={{ paddingTop: '20px' }}>
                   <StorageButton files={saveFilesData} endpoint='GRUD' />
               </div>
           </div>
            )}
            {isLoading === true ? <Loading /> : ''}
        </div>
    );
};
export default FilteringSVToolParam;
