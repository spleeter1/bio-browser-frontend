import { Box, TextField, Typography } from '@mui/material';

type ToolParametersProps = {
    //định nghĩa 1 thẻ là FORM ở đây
};

const ToolParameters: React.FC<ToolParametersProps> = () => {
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

                {/* <gọi thẻ nội dung> */}
                {/* </gọi> */}
            </div>
        </div>
    );
};
export default ToolParameters;
