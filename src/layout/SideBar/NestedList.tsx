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
                <ListItemButton
                    key={`SkinCancer`}
                    component={Link}
                    to={`skinCancer`}
                >
                    <ListItemText primary={`SkinCancer`} />
                </ListItemButton>
                <CustomListSubHeader title={`PRS`} />
                <ListItemButton key={`Plink`} component={Link} to={`Plink`}>
                    <ListItemText primary={`Plink`} />
                </ListItemButton>
                <ListItemButton
                    key={`VGP Diseases`}
                    component={Link}
                    to={`VGP-Diseases`}
                >
                    <ListItemText primary={`VGP Diseases`} />
                </ListItemButton>
                <ListItemButton key={`PRSice2`} component={Link} to={`PRSice2`}>
                    <ListItemText primary={`PRSice2`} />
                </ListItemButton>
                <CustomListSubHeader title={`SV_Deeplearning`} />
                <ListItemButton
                    key={`Filtering-SV`}
                    component={Link}
                    to={`FilteringSV`}
                >
                    <ListItemText primary={`Filtering SV`} />
                </ListItemButton>
            </List>
        </div>
    );
};

export default NestedList;
