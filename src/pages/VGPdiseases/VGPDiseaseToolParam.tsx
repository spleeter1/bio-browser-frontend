import { Box, Typography } from '@mui/material';
import Loading from '../../components/Loading';
// import OutputToDownload from '../../components/OutputToDownload';
import FormVGPDiseases from './FormVGPDiseases';
import { useState } from 'react';
import StorageButton from '../../components/StorageButton';
// import { useState } from 'react';

const VGPDiseasesToolParam = () => {
    const [, setResponse] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [saveFilesData,setSaveFilesData] = useState<Blob[]|File[]>([]);
    const [images,setImages] = useState([]);
    
    const handleWaitResponse = (submitting: boolean) => {
        setIsLoading(submitting);
    };
    const handleResponse = (response: any) => {
        setResponse(response);
        console.log('RESPONSE', response);

        setImages(response);

        const blobs = response.map((res: string) => {
            // const base64Data = res.split(',')[1];
            // const byteString = atob(base64Data);
            // const arrayBuffer = new Uint8Array(byteString.length);
            // for (let i = 0; i < byteString.length; i++) {
            //     arrayBuffer[i] = byteString.charCodeAt(i);
            // }
    
            const bl = new Blob([res], { type: 'image/jpeg' });
            console.log('bl:',bl);

            const fileName = res.substring(0, 10); 
            return {
                blob: bl,
                name: `${fileName}.jpg`, 
            };
        });
        setSaveFilesData(blobs);
        console.log(blobs)
    };
    
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
                <FormVGPDiseases onResponse={handleResponse} onSubmitting={handleWaitResponse} />
                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>

            {images.length
                ? images.map((image, index) => (
                      <Box
                          component="img"
                          key={index}
                          src={`data:image/jpeg;base64,${image}`}
                          alt={`Image ${index}`}
                          sx={{ width: '100%' }}
                      />
                  ))
                : ''}
            {images.length>0 && 
            (<div style={{ paddingTop: '20px' }}>
                
                <StorageButton files={saveFilesData} endpoint='storeVGPdiseases' />
            </div>)
            }
            {isLoading === true ? <Loading /> : ''}
        </div>
    );
};
export default VGPDiseasesToolParam;
