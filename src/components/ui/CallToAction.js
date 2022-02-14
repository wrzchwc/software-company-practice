import React from 'react';
import {Button, Grid, makeStyles, Typography, useTheme} from '@material-ui/core';
import {LearnMoreButton} from "../landing-page/LearnMoreButton";

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em'
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

    return (
        <Grid
            container
            alignItems={'center'}
            justify={'space-between'}
            className={classes.background}
        >
            <Grid item style={{marginLeft: '5em'}}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant={"h2"}>Simple Software.<br/>Revolutionary Results.</Typography>
                        <Typography variant={"subtitle2"} style={{fontSize: '1.5rem'}}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid container item>
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