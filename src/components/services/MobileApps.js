import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useMediaQuery, useTheme} from '@material-ui/core';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {NavigationArrowButton} from "./NavigationArrowButton";
import integrationAnimation from "../../animations/integrationAnimation/data.json";
import {animationOptions} from "./animationOptions";
import {IconImage} from "./IconImage";
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';
import {CallToAction} from "../ui/CallToAction";

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5rem'
    },
    rowContainer: {
        padding: '0 5em 0 5em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1.5em 10em 1.5em',
        }
    }
}));

export const MobileApps = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container direction={'column'}>
            <Grid
                item
                container
                justify={matchesMD ? 'center' : undefined}
                className={classes.rowContainer}
                style={{marginTop: matchesXS ? '1em' : '2em'}}
            >
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{margin: '0 1em 0 -3.5em'}}>
                        <NavigationArrowButton
                            to={'/custom-software'}
                            onClick={() => props.setSelectedIndex(1)}
                            alt={'back to Custom Software Development'}
                            forward={false}
                        />
                    </Grid>
                </Hidden>
                <Grid item container direction={'column'} className={classes.heading}>
                    <Grid item>
                        <Typography variant={'h2'} align={matchesMD ? 'center' : undefined}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph align={matchesMD ? 'center' : undefined}>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant={'body1'} paragraph align={matchesMD ? 'center' : undefined}>
                            Whether you want an app for your customers, employees or yourself, we can build
                            cross-platform
                            native solutions for any part of your business process. This opens you up to a whole new
                            world
                            of possibilities by taking advantage of phone features like the camera, GPS, push
                            notifications
                            and more.
                        </Typography>
                        <Typography variant={'body1'} paragraph align={matchesMD ? 'center' : undefined}>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <NavigationArrowButton
                            to={'/websites'}
                            onClick={() => props.setSelectedIndex(3)}
                            alt={'forward to Website Development'}
                            forward={true}
                        />
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                className={classes.rowContainer}
                direction={matchesSM ? 'column' : 'row'}
                style={{margin: '15em 0 15em 0'}}
            >
                <Grid item container direction={'column'} md>
                    <Grid item>
                        <Typography variant={'h4'} gutterBottom align={matchesSM?'center':undefined}>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph align={matchesSM?'center':undefined}>
                            Our technology enables an innate interconnection between web and mobile applications,
                            putting
                            everything you need right in one convenient place.
                        </Typography>
                        <Typography variant={'body1'} paragraph align={matchesSM?'center':undefined}>
                            This allows you to extend your reach, reinvent interactions and develop a stronger
                            relationship
                            with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={animationOptions(integrationAnimation)} style={{maxWidth: '20em'}}/>
                </Grid>
                <Grid item container direction={'column'} md>
                    <Grid item>
                        <Typography variant={'h4'} gutterBottom align={matchesSM?'center':'right'}>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph align={matchesSM?'center':'right'}>
                            Our cutting-edge development process allows us to create apps for iPhone, Android and
                            tablets - all at the same time.
                        </Typography>
                        <Typography variant={'body1'} paragraph align={matchesSM?'center':'right'}>
                            This significantly reduces costs and creates a more unified brand experience across all
                            devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                className={classes.rowContainer}
                direction={matchesMD ? 'column' : 'row'}
                style={{marginBottom: '15em'}}
            >
                <IconImage label={'Extend Functionality'} src={swiss} alt={'swiss army knife'}/>
                <IconImage
                    label={'Extend Access'}
                    src={access}
                    alt={'tear-one-off sign'}
                    style={{margin: matchesMD?'10em 0 10em 0':0}}
                    imageStyle={{maxWidth: matchesXS ? '20em' : '28em'}}
                />
                <IconImage
                    label={'Increase Engagement'}
                    src={engagement}
                    alt={'app with notification'}
                />
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>

    );
}