import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import {ServiceBlock} from "./landing-page/blocks/ServiceBlock";
import {LearnMoreButton} from "./landing-page/buttons/LearnMoreButton";

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
}));


export const Services = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const getLongSubtitle = mobile => {
        if (mobile) {
            return (
                <>
                    Integrate your web experience or create a standalone app{matchesSM ? null : <br/>}
                    with either mobile platform.
                </>
            );
        }
        return (
            <>
                'Complete digital solutions, from investigation '
                <span className={classes.specialText}>celebration.</span>
            </>
        );
    }

    const services = [
        {
            title: 'iOS/Android App Development',
            shortSubtitle: 'Extend Functionality. Extend Access. Increase Engagement.',
            longSubtitle: getLongSubtitle(true),
            src: mobileAppsIcon,
            alt: 'mobile phone icon',
            rightAligned: true,
            to: '/mobile-apps',
            onClick: () => {
                props.setValue(1);
                props.setSelectedIndex(2);
            },
        },
        {
            title: 'Custom Software Development',
            shortSubtitle: 'Save Energy. Save Time. Save Money.',
            longSubtitle: getLongSubtitle(false),
            src: customSoftwareIcon,
            alt: 'custom software icon',
            rightAligned: false,
            to: '/custom-software',
            onClick: () => {
                props.setValue(1);
                props.setSelectedIndex(1);
            },
        },
        {
            title: 'Website Development',
            shortSubtitle: 'Reach More. Discover More. Sell More.',
            longSubtitle: 'Optimized for Search Engines, built for speed.',
            src: websitesIcon,
            alt: 'website icon',
            rightAligned: true,
            to: '/websites',
            onClick: () => {
                props.setValue(1);
                props.setSelectedIndex(3);
            },
        }
    ]

    return (
        <Grid
            container
            direction={"column"}
            style={{
                marginTop: matchesSM ? '-1em' : '-5em',
                marginBottom: matchesSM ? '1em' : '5em',
            }}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    marginTop: matchesSM ? '1em' : '2em'
                }}
            >
                <Typography align={matchesSM ? 'center' : undefined} variant={'h2'} gutterBottom>Services</Typography>
            </Grid>
            {
                services.map(service => {
                    return (
                        <ServiceBlock
                            key={services.indexOf(service)}
                            matchesSM={matchesSM}
                            src={service.src}
                            alt={service.alt}
                            rightAligned={service.rightAligned}
                            title={service.title}
                            shortSubtitle={service.shortSubtitle}
                            longSubtitle={service.longSubtitle}
                        >
                            <LearnMoreButton
                                className={classes.learnButton}
                                height={10}
                                width={10}
                                fill={theme.palette.common.blue}
                                spanStyle={{marginRight: 10}}
                                to={service.to}
                                onClick={service.onClick}
                            />
                        </ServiceBlock>
                    );
                })
            }
        </Grid>
    );
}




