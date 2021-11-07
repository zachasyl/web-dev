import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const useStyles = makeStyles({
    root: {
        background: 'transparent',
        border: 5,
        borderRadius: 10,
        boxShadow: '0 3px 20px 2px rgba(100, 105, 135, .3)',
        color: 'green',
        height: 30,
        width: 150,
        padding: '0 2px',
        fontStyle: 'red',
    },
    MuiButton: {
        color: "green"

    }

});

export default function Hook() {
    const classes = useStyles();
    // const classes2 = useStyles2();

    return(
        <div className="position-fixed" >
            <Dropdown  className = "" color="" text = "" label="MyMap" width = "50px" >
                <Button className={classes.MuiButton} >Blog</Button>
                <Button className={classes.root}>Vacation</Button>
                <Button className={classes.root}>Top</Button>
                <Button className={classes.root}>Other</Button>
            </Dropdown>
            <Dropdown  className = "" color="" text = "" label="Travel"  >
                <Button className={classes.root} >Blog</Button>
                <Button className={classes.root}>Vacation</Button>
                <Button className={classes.root}>Top</Button>
                <Button className={classes.root}>Other</Button>
            </Dropdown>
            <Dropdown  className = "" color="" text = "" label="About" >
                <Button className={classes.root} >Blog</Button>
                <Button className={classes.root}>Vacation</Button>
                <Button className={classes.root}>Top</Button>
                <Button className={classes.root}>Other</Button>
            </Dropdown>


        </div>
)
}