import React from 'react';
import {Grid} from "@mui/material";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
    subtitle: {
        marginBottom: "1em"
    },
}));

const getContentStyle = (rightAligned, matchesSM) => {
    let contentStyle = {textAlign: matchesSM ? 'center' : undefined};
    if (!rightAligned) {
        contentStyle['marginLeft'] = matchesSM ? 0 : '5em';
    }
    return contentStyle;
}
export const ServiceBlock = (props) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Grid
                container
                className={classes.serviceContainer}
                justifyContent={props.matchesSM ? 'center' : props.rightAligned ? 'flex-end' : undefined}
            >
                <Grid item style={getContentStyle(props.rightAligned, props.matchesSM)}>
                    <Typography variant={"h4"}>{props.title}</Typography>
                    <Typography variant={"subtitle1"} className={classes.subtitle}>{props.shortSubtitle}</Typography>
                    <Typography variant={"subtitle1"}>{props.longSubtitle}</Typography>
                    {props.children}
                </Grid>
                <Grid item style={props.rightAligned ? {marginRight: props.matchesSM ? 0 : "5em"} : undefined}>
                    <img src={props.src} alt={props.alt} className={classes.icon}/>
                </Grid>
            </Grid>
        </Grid>

    );
}