import React from 'react';
import {cloneDeep} from "lodash";
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
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

const defaultQuestions = [
    {
        id: 1,
        title: 'Which service are you interested in?',
        active: true,
        options: [
            {
                id: 1,
                title: 'Custom Software Development',
                subtitle: null,
                icon: software,
                iconAlt: 'three floating screens',
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: 'iOS/Android Development',
                subtitle: null,
                icon: mobile,
                iconAlt: 'phones and tablet outline',
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: 'Website Development',
                subtitle: null,
                icon: website,
                iconAlt: 'computer outline',
                selected: false,
                cost: 0
            },
        ]
    }
]

const softwareQuestions = [
    {...defaultQuestions[0], active: false},
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iphone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: users,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    {...defaultQuestions[0], active: false},
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];


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
                {
                    defaultQuestions.filter(question => question.active).map((question, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item>
                                    <Typography
                                        variant={'h2'}
                                        align={'center'}
                                        style={{
                                            fontWeight: 500,
                                            marginTop: '5em',
                                            fontSize: '2.25rem'
                                        }}
                                    >
                                        {question.title}
                                    </Typography>
                                    <Typography
                                        variant={'body1'}
                                        align={'center'}
                                        style={{marginBottom: '2.5em'}}
                                        gutterBottom
                                    >
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item container>
                                    {question.options.map(option => {
                                        return (
                                            <Grid
                                                key={question.options.indexOf(option)}
                                                item
                                                container
                                                md
                                                direction={'column'}
                                            >
                                                <Grid item style={{maxWidth: '12em'}}>
                                                    <Typography
                                                        variant={'h6'}
                                                        align={'center'}
                                                        style={{marginBottom: '1em'}}
                                                    >
                                                        {option.title}
                                                    </Typography>
                                                    <Typography variant={'caption'} align={'center'}>
                                                        {option.subtitle}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <img
                                                        src={option.icon}
                                                        alt={option.iconAlt}
                                                        className={classes.icon}
                                                    />
                                                </Grid>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </React.Fragment>
                        );
                    })
                }
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
