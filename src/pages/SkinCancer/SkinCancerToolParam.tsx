import { Typography } from '@mui/material';
import { useState } from 'react';
import Loading from '../../components/Loading';
import FormSkinCancer from './FormSkinCancer';
import OutputToDownload from '../../components/OutputToDownload';
import StorageButton from '../../components/StorageButton';

const SkinCancerToolParam = () => {
    const [response, setResponse] = useState<{
        file: File;
        content: string;
    } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [downloadData, setDownloadData] = useState<{
        filename: string;
        fileContent: File | Blob | string;
    } | null>(null);
    const [saveFilesData,setSaveFilesData] = useState<Blob[]|File[]>([]);

    const handleWaitResponse = (submitting: boolean) => {
        setIsLoading(submitting);
    };
    const handleResponse = (file: File, response: string) => {
        setResponse({ file, content: response });
        console.log('RESPONSE', response);
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
                <FormSkinCancer
                    onResponse={handleResponse}
                    onSubmitting={handleWaitResponse}
                />

                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>
            {response && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    {/* Hiển thị ảnh */}
                    {response.file instanceof File ? (
                        <img
                            src={URL.createObjectURL(response.file)}
                            alt="Uploaded"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            }}
                        />
                    ) : (
                        <Typography variant="body1">
                            No image to display.
                        </Typography>
                    )}
                    <div style={{ marginTop: '10px' }}>
                        <Typography variant="h6">Prediction:</Typography>
                        <Typography variant="body1">
                            {response.content}
                        </Typography>
                    </div>
                </div>
            )}
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
export default SkinCancerToolParam;
