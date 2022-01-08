import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import {Grid, makeStyles} from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue
    },
    gridItem: {
        margin: "3em"
    }
}))

export const Footer = ({setValue, setSelectedIndex}) => {
    const classes = useStyles();
    return (
        <footer className={`${classes.footer} footer`}>
            <Grid className={"mainContainer"} container justify={"center"}>
                <Grid className={classes.gridItem} item>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={() => {
                                setValue(0);
                            }}
                            to={"/"}
                        >
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(0);
                            }}
                            to={"/services"}
                        >
                            Services
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(1);
                            }}
                            to={"/custom-software"}
                        >
                            Custom Software Development
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(2);
                            }}
                            to={"/mobile-apps"}
                        >
                            Mobile App Development
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(1);
                                setSelectedIndex(3);
                            }}
                            to={"/websites"}
                        >
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(2);
                            }}
                            to={"/revolution"}
                        >
                            The Revolution
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(2);
                            }}
                            to={"/revolution"}
                        >
                            Vision
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(2);
                            }}
                            to={"/revolution"}
                        >
                            Technology
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(2);
                            }}
                            to={"/revolution"}
                        >
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(3);
                            }}
                            to={"/about"}
                        >
                            About us
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(3);
                            }}
                            to={"/about"}
                        >
                            History
                        </Grid>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(3);
                            }}
                            to={"/about"}
                        >
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item>
                    <Grid container direction={"column"} spacing={2}>
                        <Grid
                            component={Link}
                            className={"link"}
                            item
                            onClick={()=>{
                                setValue(4);
                            }}
                            to={"/contact"}
                        >
                            Contact us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img className={"adornment"} src={footerAdornment} alt="black decorative slash"/>
        </footer>
    );
}