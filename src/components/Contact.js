import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, makeStyles, useTheme, TextField, Typography} from '@material-ui/core';
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no - repeat",
        height: "60em",
        paddingDown: "10em"
    },
    contactInfo: {
        color: theme.palette.common.blue,
        fontSize: "1rem"
    },
    icon: {
        marginRight: ".5em",
        verticalAlign: "bottom"
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: "5",
        marginTop: "5em"
    },
    sendButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        fontSize: "1rem",
        height: 45,
        width: 245,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Grid container direction={"row"}>
            <Grid item container direction={"column"} lg={4} xl={3} justify={"center"} alignItems={"center"}>
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h2"} style={{lineHeight: 1}}>Contact Us</Typography>
                            <Typography variant={"body1"} style={{color: theme.palette.common.blue}}>We're
                                waiting</Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" className={classes.icon}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} className={classes.contactInfo}>
                                    (555) 555-5555
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" className={classes.icon}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} className={classes.contactInfo}>
                                    zachary@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"} style={{maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"name"}
                                    id={"name"}
                                    value={name}
                                    fullWidth
                                    onChange={event => {
                                        setName(event.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"email"}
                                    id={"email"}
                                    value={email}
                                    fullWidth
                                    onChange={event => {
                                        setEmail(event.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"phone"}
                                    id={"phone"}
                                    value={phone}
                                    fullWidth
                                    onChange={event => {
                                        setPhone(event.target.value)
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth: "20em"}}>
                            <TextField
                                inputProps={{disableUnderline: true}}
                                value={message}
                                className={classes.message}
                                fullWidth
                                id={"message"}
                                multiline
                                rows={10}
                                onChange={event => {
                                    setMessage(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item container justify={"center"} style={{marginTop: "2em"}}>
                            <Button variant={"contained"} className={classes.sendButton}>
                                Send message
                                <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={8} xl={9}/>
        </Grid>
    );
}

