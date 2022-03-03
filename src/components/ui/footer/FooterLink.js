import React from 'react';
import {Link} from "react-router-dom";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(()=>({
    link: {
        color: '#FFF',
        fontFamily: 'Arial',
        fontSize: '0.75.rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    }
}));

const FooterLink = props => {
    const classes = useStyles();

    return (
        <Grid component={Link} className={classes.link} item onClick={props.onClick} to={props.to}>
            {props.children}
        </Grid>
    );
}

export default FooterLink;