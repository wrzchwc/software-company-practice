import React from 'react';
import {Button, Grid, makeStyles, Typography, useTheme, useMediaQuery} from '@material-ui/core';
import {LearnMoreButton} from "../landing-page/LearnMoreButton";

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:'fixed',
        height: "60em",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        margin: '0 5em 0 2em',
        [theme.breakpoints.down('sm')]: {
            margin: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }
}))

export const CallToAction = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            alignItems={'center'}
            justify={matchesSM ? 'center' : 'space-between'}
            className={classes.background}
            direction={matchesSM ? 'column' : 'row'}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    textAlign: matchesSM ? 'center' : 'inherit'
                }}
            >
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant={"h2"}>Simple Software.<br/>Revolutionary Results.</Typography>
                        <Typography variant={"subtitle2"} style={{fontSize: '1.5rem'}}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container item justify={matchesSM ? 'center' : undefined}>
                            <LearnMoreButton
                                className={classes.learnButton}
                                fill={theme.palette.common.blue}
                                height={10}
                                width={10}
                                spanStyle={{marginRight: 5}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant={'contained'} className={classes.estimateButton}>Free Estimate</Button>
            </Grid>
        </Grid>
    );
}