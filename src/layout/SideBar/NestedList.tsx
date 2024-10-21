// import React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

// import listParams from '../../data/listParams.json';
import { Link } from 'react-router-dom';
import CustomListSubHeader from '../../components/CustomListSubHeader';

// const tmp = listParams;
// const data = Object.entries(tmp);

const NestedList = () => {
    // const [open, setOpen] = React.useState<boolean[]>([]);

    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <CustomListSubHeader title={`IMPUTATION`} />
                <ListItemButton key={`grud`} component={Link} to={`GRUD`}>
                    <ListItemText primary={`GRUD`} />
                </ListItemButton>
                <CustomListSubHeader title={`BASEMODEL`} />
                <ListItemButton key={`SkinCancer`} component={Link} to={``}>
                    <ListItemText primary={`SkinCancer`} />
                </ListItemButton>
                <CustomListSubHeader title={`PRS`} />
                <ListItemButton key={`Plink`} component={Link} to={``}>
                    <ListItemText primary={`Plink`} />
                </ListItemButton>
                <ListItemButton key={`VGP Diseases`} component={Link} to={``}>
                    <ListItemText primary={`VGP Diseases`} />
                </ListItemButton>
                <ListItemButton key={`PRSice2`} component={Link} to={``}>
                    <ListItemText primary={`PRSice2`} />
                </ListItemButton>
            </List>
        </div>
    );
};

export default NestedList;
