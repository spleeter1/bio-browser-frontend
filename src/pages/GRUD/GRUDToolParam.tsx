import { Typography } from '@mui/material';
import FormGRUD from './FormGRUD';
import { useState } from 'react';
import Loading from '../../components/Loading';

type GRUDToolParamProps = {
    // định nghĩa 1 thẻ là thẻ FORM ở đây
};

const GRUDToolParam: React.FC<GRUDToolParamProps> = () => {
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleWaitResponse = (submitting: boolean) => {
        setIsLoading(submitting);
    };
    const handleResponse = (response: any) => {
        setResponse(response);
        console.log('Response from child:', response);
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
                <FormGRUD
                    onResponse={handleResponse}
                    onSubmitting={handleWaitResponse}
                />

                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>
            {response !== null ? 'download here' : ''}
            {isLoading === true ? <Loading /> : ''}
        </div>
    );
};
export default GRUDToolParam;
