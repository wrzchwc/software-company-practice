import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/core';
import {Grid} from '@mui/material';
import {Typography} from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import {Button} from "@material-ui/core"

import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]:{
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: "50px",
        height: "45px",
        width: "145px",
        marginRight: "40px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        borderColor: theme.palette.common.blue,
        borderWidth: 2,
        color: theme.palette.common.blue,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "Roboto",
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    }
}));

export const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item>
                <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography variant={"h2"} align={"center"}>
                            Bringing West Coast Technology
                            <br/>
                            to the Midwest
                        </Typography>
                        <Grid container justifyContent={"center"} className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant={"contained"} className={classes.estimateButton}>
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant={"outlined"} className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}