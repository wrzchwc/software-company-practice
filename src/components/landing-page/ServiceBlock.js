import React from 'react';
import {Grid} from "@mui/material";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {matches} from "@testing-library/jest-dom/dist/utils";

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
    if (rightAligned) {
        return {textAlign: matchesSM ? "center" : undefined};
    }

    return {
        marginLeft: matchesSM ? 0 : "5em",
        textAlign: matchesSM ? "center" : undefined
    };
}

const getIconStyle = (rightAligned, matchesSM) => {
    if (rightAligned) {
        return {marginRight: matchesSM ? 0 : "5em"};
    }

    return undefined;
}

const getContentJustifying = (matchesSM, rightAligned) => {
    if (matchesSM) {
        return 'center';
    } else if (rightAligned) {
        return 'flex-end';
    }

    return undefined;
}

export const ServiceBlock = (props) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Grid
                container
                className={classes.serviceContainer}
                justifyContent={getContentJustifying(props.matchesSM, props.rightAligned)}
            >
                <Grid item style={getContentStyle(props.rightAligned, props.matchesSM)}>
                    <Typography variant={"h4"}>{props.title}</Typography>
                    <Typography variant={"subtitle1"} className={classes.subtitle}>{props.shortSubtitle}</Typography>
                    <Typography variant={"subtitle1"}>{props.longSubtitle}</Typography>
                    {props.children}
                </Grid>
                <Grid item style={getIconStyle(props.rightAligned, props.matchesSM)}>
                    <img src={props.src} alt={props.alt} className={classes.icon}/>
                </Grid>
            </Grid>
        </Grid>

    );
}