import React from "react";
import {makeStyles} from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        position: "relative",
        width: "100%",
        zIndex: 1302
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom"
    }
}))

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <img className={classes.adornment} src={footerAdornment} alt="black decorative slash"/>
        </footer>
    );
}