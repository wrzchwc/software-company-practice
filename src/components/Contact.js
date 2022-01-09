import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, makeStyles, useTheme, TextField, Typography} from '@material-ui/core';
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no - repeat",
        height: "60em"
    },
    contactInfo: {
        color: theme.palette.common.blue,
        fontSize: "1rem"
    },
    icon: {
        marginRight: ".5em",
        verticalAlign: "bottom"
    }
}));

export const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction={"row"}>
            <Grid item container direction={"column"} lg={3} justify={"center"}>
                <Grid item>
                    <Typography variant={"h2"} style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography variant={"body1"} style={{color: theme.palette.common.blue}}>We're waiting</Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} className={classes.contactInfo}>
                            (555) 555-5555
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={emailIcon} alt="envelope" className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} className={classes.contactInfo}>
                            zachary@gmail.com
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item container className={classes.background} lg={9}/>
        </Grid>
    );
}

