import { Box, TextField, Typography } from '@mui/material';

const ToolParameters = () => {
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
                <Typography
                    sx={{
                        paddingBottom: '2%',
                        paddingLeft: '3%',
                        paddingTop: '10px',
                    }}
                >
                    <strong>
                        To prepare the example dataset, the following files are
                        required:
                    </strong>
                </Typography>
                {/* </gọi> */}
            </div>
        </div>
    );
};
export default ToolParameters;
