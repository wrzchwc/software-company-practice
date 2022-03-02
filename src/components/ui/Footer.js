import React from "react";
import {Link} from "react-router-dom";
import {Grid, Hidden, makeStyles} from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    adornment: {
        width: '25em',
        verticalAlign: 'bottom'
    },
    footer: {
        backgroundColor: theme.palette.common.blue,
        position: "relative",
        width: "100%",
        zIndex: 1302
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: "4rem",
        width: "4rem",
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6rem",
        right: "1.5em"
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: '#FFF',
        fontFamily: 'Arial',
        fontSize: '0.75.rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    }
}))

export const Footer = ({setValue, setSelectedIndex}) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid className={classes.mainContainer} container justify={"center"}>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid
                                component={Link}
                                className={classes.link}
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
                                className={classes.link}
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
                                className={classes.link}
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
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(1);
                                    setSelectedIndex(2);
                                }}
                                to={"/mobile-apps"}
                            >
                                iOS/Android App Development
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
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
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(2);
                                }}
                                to={"/revolution"}
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(2);
                                }}
                                to={"/revolution"}
                            >
                                Vision
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(2);
                                }}
                                to={"/revolution"}
                            >
                                Technology
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
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
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(3);
                                }}
                                to={"/about"}
                            >
                                About us
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(3);
                                }}
                                to={"/about"}
                            >
                                History
                            </Grid>
                            <Grid
                                component={Link}
                                className={classes.link}
                                item
                                onClick={() => {
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
                                className={classes.link}
                                item
                                onClick={() => {
                                    setValue(4);
                                }}
                                to={"/contact"}
                            >
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img className={classes.adornment} src={footerAdornment} alt="black decorative slash"/>
            <Grid className={classes.socialContainer} container justify={"flex-end"} spacing={2}>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target={"_blank"}>
                    <img className={classes.icon} src={instagram} alt="instagram"/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target={"_blank"}>
                    <img className={classes.icon} src={twitter} alt="twitter"/>
                </Grid>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target={"_blank"}>
                    <img className={classes.icon} src={facebook} alt="facebook"/>
                </Grid>
            </Grid>
        </footer>
    );
}