import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme, useMediaQuery} from '@material-ui/core';
import {Grid} from '@mui/material';
import {Typography} from "@material-ui/core";
import {Button, Card, CardContent} from "@material-ui/core";

import animationData from '../../animations/landinganimation/data';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';
import {LearnMoreButton} from "./LearnMoreButton";
import {ServiceBlock} from "./ServiceBlock";

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
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
        ...theme.typography.learnButton,
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
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
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
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: "8em 0 8em 0",
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}));

export const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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

    const services = {
        custom: {
            title: 'Custom Software Development',
            shortSubtitle: 'Save Energy. Save Time. Save Money.',
            longSubtitle: getLongSubtitle(false),
            src: customSoftwareIcon,
            alt: 'custom software icon',
            rightAligned: false
        },
        mobile: {
            title: 'iOS/Android App Development',
            shortSubtitle: 'Extend Functionality. Extend Access. Increase Engagement.',
            longSubtitle: getLongSubtitle(true),
            src: mobileAppsIcon,
            alt: 'mobile phone icon',
            rightAligned: true
        },
        website: {
            title: 'Website Development',
            shortSubtitle: 'Reach More. Discover More. Sell More.',
            longSubtitle: 'Optimized for Search Engines, built for speed.',
            src: websitesIcon,
            alt: 'website icon',
            rightAligned: false
        }
    }


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
                                <LearnMoreButton className={classes.learnButtonHero} height={15} width={15}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
            <ServiceBlock
                matchesSM={matchesSM}
                src={services.custom.src}
                alt={services.custom.alt}
                rightAligned={services.custom.rightAligned}
                title={services.custom.title}
                shortSubtitle={services.custom.shortSubtitle}
                longSubtitle={services.custom.longSubtitle}
            >
                <LearnMoreButton className={classes.learnButton} height={10} width={10}/>
            </ServiceBlock>
            <ServiceBlock
                matchesSM={matchesSM}
                src={services.mobile.src}
                alt={services.mobile.alt}
                rightAligned={services.mobile.rightAligned}
                title={services.mobile.title}
                shortSubtitle={services.mobile.shortSubtitle}
                longSubtitle={services.mobile.longSubtitle}
            >
                <LearnMoreButton className={classes.learnButton} height={10} width={10}/>
            </ServiceBlock>
            <ServiceBlock
                matchesSM={matchesSM}
                src={services.website.src}
                alt={services.website.alt}
                rightAligned={services.website.rightAligned}
                title={services.website.title}
                shortSubtitle={services.website.shortSubtitle}
                longSubtitle={services.website.longSubtitle}
            >
                <LearnMoreButton className={classes.learnButton} height={10} width={10}/>
            </ServiceBlock>
            <Grid item>
                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    style={{
                        height: "100em",
                        marginTop: "12em"
                    }}
                >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction={"column"} style={{textAlign: "center"}}>
                                <Grid item>
                                    <Typography variant={"h3"} gutterBottom>The Revolution</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"subtitle1"}>
                                        Visionary insights coupled with cutting-edge technology is a recipe for
                                        revolution
                                    </Typography>
                                    <LearnMoreButton className={classes.learnButtonHero} height={15} width={15}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container style={{height: "80em"}} alignItems={"center"}>
                    <Grid
                        item
                        style={{
                            position: "absolute",
                            marginLeft: "5em"
                        }}
                    >
                        <Grid container direction={"column"}>
                            <Typography variant={"h2"} style={{color: "white"}}>About Us</Typography>
                            <Typography variant={"subtitle2"}>Let's get personal</Typography>
                            <LearnMoreButton className={classes.learnButton} height={10} width={10}/>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground}/>
                </Grid>
            </Grid>
        </Grid>
    );
}