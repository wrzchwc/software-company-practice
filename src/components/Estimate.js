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

const useStyles = makeStyles(theme=>{});

export const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <Grid container>
          <Grid item container direction={'column'}>
              <Grid item>
                  <Typography variant={'h2'}>Estimate</Typography>
              </Grid>
              <Grid item>
                  <Lottie options={animationOptions(estimateAnimation)} height={'100%'} width={'100%'}/>
              </Grid>
          </Grid>
          <Grid item container direction={'column'}>
                <Grid item>
                    <Typography variant={'h2'} align={'center'} style={{fontWeight: 300}} gutterBottom>
                        Which service are you interested in?
                    </Typography>
                </Grid>
              <Grid item container>

              </Grid>
          </Grid>
      </Grid>
  );
}
