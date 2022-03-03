import React from 'react';
import Lottie from 'react-lottie';
import {Grid, Typography, makeStyles, useMediaQuery, useTheme} from "@material-ui/core";
import {CallToAction} from "../../ui/CallToAction";
import {IconImage} from "../shared-components/IconImage";
import {ServiceDescription} from "../shared-components/ServiceDescription";
import {animationOptions} from "../animationOptions";

import lightbulb from '../../../assets/bulb.svg';
import cash from '../../../assets/cash.svg';
import stopwatch from '../../../assets/stopwatch.svg';
import roots from '../../../assets/root.svg'

import documentsAnimation from '../../../animations/documentsAnimation/data';
import scaleAnimation from '../../../animations/scaleAnimation/data.json';
import automationAnimation from '../../../animations/automationAnimation/data.json';
import uxAnimation from '../../../animations/uxAnimation/data';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        padding: '0 5em 0 5em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1.5em 10em 1.5em',
        }
    },
    itemContainer: {
        maxWidth: '40em'
    }
}))

export const CustomSoftware = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const navigation = {
        back: {
            to: '/services',
            onClick: () => props.setSelectedIndex(0),
            alt: 'back to services page'
        },
        forward: {
            to: '/mobile-apps',
            onClick: () => props.setSelectedIndex(2),
            alt: 'forward to iOS/Android App Development'
        }
    }

    return (
        <Grid container direction={'column'}>
            <ServiceDescription navigation={navigation} title={'Custom Software Development'}>
                <>
                    Whether we're replacing old software or inventing new solutions, Arc Development is here to help
                    your business tackle technology.
                </>
                <>
                    Using regular commercial software leaves you with a lof of stuff you don't need, without some of
                    the stuff you do need, and ultimately controls the way you work. Without using any software at all
                    you risk falling behind competitors and missing out on huge savings from increased efficiency.
                </>
                <>
                    Our custom solutions are designed from the ground up with your needs, wants and goals at the core.
                    This collaborative process produces finely tuned software that is much more efficient at improving
                    your workflow and reducing cots than generalized options.
                </>
                <>
                    We create exactly what you want, exactly how you want it.
                </>
            </ServiceDescription>
            <Grid item container justify={'center'} style={{margin: '15em 0 20em 0'}} className={classes.rowContainer}>
                <IconImage label={'Save Energy'} src={lightbulb} alt={'lightbulb'} style={{maxWidth: '40em'}}/>
                <IconImage
                    label={'Save Time'}
                    src={stopwatch}
                    alt={'stopwatch'}
                    style={{
                        maxWidth: '40em',
                        margin: matchesSM ? '10em 0 10em 0' : 0
                    }}
                />
                <IconImage label={'Save Money'} src={cash} alt={'cash'} style={{maxWidth: '40em'}}/>
            </Grid>
            <Grid
                item
                container
                justify={matchesMD ? 'center' : 'space-between'}
                alignItems={matchesMD ? 'center' : undefined}
                direction={matchesMD ? 'column' : 'row'}
                className={classes.rowContainer}
                style={{display: matchesMD ? 'grid' : undefined}}
            >
                <Grid
                    item
                    container
                    md
                    className={classes.itemContainer}
                    direction={matchesSM ? 'column' : 'row'}
                    style={{marginBottom: matchesMD ? '15em' : 0}}
                >
                    <Grid item container direction={'column'} md>
                        <Grid item>
                            <Typography variant={'h4'} align={matchesSM ? 'center' : undefined}>
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                Billions are spent annually on the purchasing, printing and distribution of paper. On
                                top of the massive environmental impact this has, it causes harm to your bottom line as
                                well.
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                By utilizing digital forms and documents you can remove these obsolete expenses,
                                accelerate your communication and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={animationOptions(documentsAnimation)}
                            style={{
                                maxHeight: 275,
                                maxWidth: 275,
                                minHeight: 250
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container md className={classes.itemContainer} direction={matchesSM ? 'column' : 'row'}>
                    <Grid item md>
                        <Lottie
                            options={animationOptions(scaleAnimation)}
                            style={{
                                maxHeight: 260,
                                maxWidth: 280
                            }}
                        />
                    </Grid>
                    <Grid item container direction={'column'} md>
                        <Grid item>
                            <Typography variant={'h4'} align={matchesSM ? 'center' : 'right'}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                Whether you're a large brand, just getting started or taking off right now, our
                                application architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container style={{margin: '20em 0 20em 0'}} className={classes.rowContainer}>
                <Grid item container direction={'column'} alignItems={'center'}>
                    <Grid item>
                        <img
                            src={roots}
                            alt="tree with roots extending out"
                            height={matchesSM ? '300em' : '450em'}
                            width={matchesSM ? '300em' : '450em'}
                        />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant={'h4'} gutterBottom align={'center'}>Root-Cause Analysis</Typography>
                        <Typography variant={'body1'} paragraph align={'center'}>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant={'body1'} paragraph align={'center'}>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan
                            for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems={matchesMD ? 'center' : undefined}
                direction={matchesMD ? 'column' : 'row'}
                justify={matchesMD ? 'center' : 'space-between'}
                style={{display: matchesMD ? 'grid' : undefined}}
                className={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    md
                    className={classes.itemContainer}
                    style={{marginBottom: matchesMD ? '15em' : 0}}
                    direction={matchesSM ? 'column' : 'row'}
                >
                    <Grid item container direction={'column'} md>
                        <Grid item>
                            <Typography variant={'h4'} align={matchesSM ? 'center' : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                Why waste time when you don't have to?
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                We can help you identify processes with time or event based actions which can now
                                easily be automated.
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                Increasing efficiency increases profits, laving you more time to focus on your
                                business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={animationOptions(automationAnimation)}
                            style={{
                                maxHeight: 290,
                                maxWidth: 280,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container md className={classes.itemContainer} direction={matchesSM ? 'column' : 'row'}>
                    <Grid item md>
                        <Lottie
                            options={animationOptions(uxAnimation)}
                            style={{
                                maxHeight: 310,
                                maxWidth: 155
                            }}
                        />
                    </Grid>
                    <Grid item container direction={'column'} md>
                        <Grid item>
                            <Typography variant={'h4'} align={matchesSM ? 'center' : 'right'}>User Experience
                                Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                A good design that isn't usable isn't a good design.
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                So why are so many pieces of software complicated, confusing and frustrating?
                            </Typography>
                            <Typography variant={'body1'} paragraph align={'justify'}>
                                By prioritizing users and the real ways they interact with technology we're able to
                                develop unique, personable experiences that solve problems rather then create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginTop: '20em'}}>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    );
}