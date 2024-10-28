import { Typography } from '@mui/material';
// import Loading from '../../components/Loading';
// import OutputToDownload from '../../components/OutputToDownload';
import FormVGPDiseases from './FormVGPDiseases';
// import { useState } from 'react';

const VGPDiseasesToolParam = () => {
    // const [, setResponse] = useState<any>();
    // const [isLoading, setIsLoading] = useState(false);
    // const [downloadData, setDownloadData] = useState<{
    //     filename: string;
    //     fileContent: File | Blob | string;
    // } | null>(null);

    // const handleWaitResponse = (submitting: boolean) => {
    //     setIsLoading(submitting);
    // };
    // const handleResponse = (response: any) => {
    //     setResponse(response);
    //     console.log('RESPONSE', response);

    //     if (response && response.data) {
    //         handleDownload(response);
    //     }
    // };
    // const handleDownload = (response: any) => {
    //     const fileName = response.headers['content-disposition']
    //         ? response.headers['content-disposition']
    //               .split('filename=')[1]
    //               .replace(/"/g, '')
    //         : 'downloaded_file';

    //     const blob = new Blob([response.data], {
    //         type: response.headers['content-type'],
    //     });
    //     setDownloadData({ filename: fileName, fileContent: blob });
    // };
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
                <FormVGPDiseases />
                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>

            {/* {downloadData && (
                <div style={{ paddingTop: '20px' }}>
                    <OutputToDownload
                        filename={downloadData.filename}
                        fileContent={downloadData.fileContent}
                    />
                </div>
            )} */}
            {/* {isLoading === true ? <Loading /> : ''} */}
        </div>
    );
};
export default VGPDiseasesToolParam;
