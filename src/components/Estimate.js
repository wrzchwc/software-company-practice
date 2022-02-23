import React from 'react';
import Lottie from 'react-lottie';
import {Button, Grid, IconButton, makeStyles, Typography, useTheme} from "@material-ui/core";
import {animationOptions} from "./services/animationOptions";

import check from '../assets/check.svg';
import send from '../assets/send.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import website from '../assets/website.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import people from '../assets/people.svg';
import info from '../assets/info.svg';
import bell from '../assets/bell.svg';
import users from '../assets/users.svg';
import iphone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';

const useStyles = makeStyles(theme => ({
    icon: {
        width: '12em',
        height: '10em'
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: '1.25rem',
        marginTop: '5em',
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export const Estimate = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container>
            <Grid item container lg direction={'column'}>
                <Grid item style={{margin: '2em 0 0 5em'}}>
                    <Typography variant={'h2'}>Estimate</Typography>
                </Grid>
                <Grid
                    item
                    style={{
                        maxWidth: '50em',
                        margin: '7.5em 10em 0 0'
                    }}
                >
                    <Lottie options={animationOptions(estimateAnimation)} height={'100%'} width={'100%'}/>
                </Grid>
            </Grid>
            <Grid item container lg direction={'column'} alignItems={'center'} style={{margin: '0 2em 25em 0'}}>
                <Grid item>
                    <Typography
                        variant={'h2'}
                        align={'center'}
                        style={{
                            fontWeight: 500,
                            margin: '5em 0 2.5em 0',
                            fontSize: '2.25rem'
                        }}
                        gutterBottom
                    >
                        Which service are you interested in?
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item container md direction={'column'}>
                        <Grid item style={{maxWidth: '12em'}}>
                            <Typography variant={'h6'} align={'center'} style={{marginBottom: '1em'}}>
                                Custom Software Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={software} alt={'three floating screens'} className={classes.icon}/>
                        </Grid>
                    </Grid>
                    <Grid item container md direction={'column'}>
                        <Grid item style={{maxWidth: '12em'}}>
                            <Typography variant={'h6'} align={'center'} style={{marginBottom: '1em'}}>
                                iOS/Android Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={mobile} alt={'phones and tablet outline'} className={classes.icon}/>
                        </Grid>
                    </Grid>
                    <Grid item container md direction={'column'}>
                        <Grid item style={{maxWidth: '12em'}}>
                            <Typography variant={'h6'} align={'center'} style={{marginBottom: '1em'}}>
                                Website Development
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={website} alt={'computer outline'} className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justify={'space-between'}
                    style={{
                        width: '15em',
                        marginTop: '3em'
                    }}
                >
                    <Grid item>
                        <img src={backArrow} alt={'previous question'}/>
                    </Grid>
                    <Grid item>
                        <img src={forwardArrow} alt={'next question'}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant={'contained'} className={classes.estimateButton}>Get Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
