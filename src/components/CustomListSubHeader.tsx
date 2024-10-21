import { ListSubheader } from '@mui/material';

type CustomListSubHeaderProps = {
    title: String;
};
const CustomListSubHeader: React.FC<CustomListSubHeaderProps> = ({ title }) => {
    return (
        <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
                background: 'linear-gradient(to right, #891731, #133f6e)',
                maxWidth: '100%',
                maxHeight: '80%',
                fontStyle: 'bold',
                color: 'white',
                fontFamily: 'sans-serif',
            }}
        >
            {title}
        </ListSubheader>
    );
};
export default CustomListSubHeader;
