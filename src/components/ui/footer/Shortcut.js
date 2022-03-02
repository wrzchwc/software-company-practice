import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    icon: {
        height: "4rem",
        width: "4rem",
    }
}));

const Shortcut = props => {
    let {img} = props;

    const classes = useStyles();

    return (
        <Grid item component={"a"} href={props.href} rel="noopener noreferrer" target={"_blank"}>
            <img className={classes.icon} src={img.src} alt={img.alt}/>
        </Grid>
    );
}

export default Shortcut;