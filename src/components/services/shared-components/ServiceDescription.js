import React from 'react';
import {Grid, Hidden, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {NavigationArrowButton} from "./NavigationArrowButton";

const useStyles = makeStyles(theme=>({
    arrowContainer: {
        marginTop: '0.5rem'
    },
    heading: {
        maxWidth: '40em'
    },
    rowContainer: {
        padding: '0 5em 0 5em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1.5em 10em 1.5em',
        }
    }
}))

export const ServiceDescription = props => {
    let {back, forward} = props.navigation;
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return(
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
                        to={back.to}
                        onClick={back.onClick}
                        alt={back.alt}
                        forward={false}
                    />
                </Grid>
            </Hidden>
            <Grid item container direction={'column'} className={classes.heading}>
                <Grid item>
                    <Typography variant={'h2'} align={matchesMD ? 'center' : undefined}>{props.title}</Typography>
                </Grid>
                <Grid item>
                    {
                        props.children.map(child => {
                            return(
                                <Typography variant={'body1'} paragraph align={matchesMD ? 'center' : undefined}>
                                    {child}
                                </Typography>
                            );
                        })
                    }
                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <NavigationArrowButton
                        to={forward.to}
                        onClick={forward.onClick}
                        alt={forward.alt}
                        forward={true}
                    />
                </Grid>
            </Hidden>
        </Grid>
    );
}