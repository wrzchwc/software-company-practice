import React, {useState} from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    Grid,
    makeStyles,
    Snackbar,
    useTheme,
    TextField,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import background from "../../assets/background.jpg";
import mobileBackground from '../../assets/mobileBackground.jpg';
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no - repeat",
        height: "60em",
        paddingDown: "10em",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url${mobileBackground}`
        }
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
            backgroundColor: theme.palette.secondary.light,
            [theme.breakpoints.down('sm')]: {
                height: 40,
                width: 225
            }
        }
    }
}));

export const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        backgroundColor: ''
    })
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const onChange = event => {
        let valid;
        let {id, value} = event.target;
        switch (id) {
            case "email":
                setEmail(value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                setEmailHelper(!valid ? "Invalid email" : "");
                break;
            case "phone":
                setPhone(value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
                setPhoneHelper(!valid ? "Invalid phone" : "");
                break;
            default:
                break;
        }
    }

    const canBeSent = () => {
        return name.length === 0 ||
            message.length === 0 ||
            phoneHelper.length !== 0 ||
            emailHelper.length !== 0 ||
            email.length === 0 ||
            phone.length === 0;
    }

    const onConfirm = () => {
        setLoading(true);
        // successful API request simulation
        setTimeout(
            () => {
                setLoading(false);
                setOpen(false);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setAlert({
                    open: true,
                    message: 'Message sent successfully!',
                    backgroundColor: '#4BB543'
                })
            },
            1000)
    }

    const buttonContents = (
        <>
            Send message
            <img src={airplane} alt="paper airplane" style={{marginLeft: "1em"}}/>
        </>
    )

    return (
        <Grid container direction={"row"}>
            <Grid
                item
                container
                direction={"column"}
                lg={4}
                xl={3}
                justify={"center"}
                alignItems={"center"}
                style={{
                    marginBottom: matchesMD ? '5em' : 0,
                    marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
                }}
            >
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h2"} align={matchesMD ? 'center' : undefined} style={{lineHeight: 1}}>
                                Contact Us
                            </Typography>
                            <Typography
                                variant={"body1"}
                                style={{color: theme.palette.common.blue}}
                                align={matchesMD ? 'center' : undefined}
                            >
                                We're waiting
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" className={classes.icon}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} className={classes.contactInfo}>
                                    <a href="tel:5555555555" style={{color: "inherit", textDecoration: "none"}}>
                                        (555) 555-5555
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom: "2em"}}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" className={classes.icon}/>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} className={classes.contactInfo}>
                                    <a
                                        href="mailto:zachary@gmail.com"
                                        style={{color: "inherit", textDecoration: "none"}}
                                    >
                                        zachary@gmail.com
                                    </a>
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
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    value={email}
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField
                                    label={"phone"}
                                    id={"phone"}
                                    value={phone}
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    fullWidth
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth: "20em"}}>
                            <TextField
                                InputProps={{disableUnderline: true}}
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
                            <Button
                                variant={"contained"}
                                disabled={canBeSent()}
                                className={classes.sendButton}
                                onClick={() => {
                                    setOpen(true)
                                }}
                            >
                                {buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    style: {
                        paddingTop: matchesXS ? '1em' : '5em',
                        paddingBottom: matchesXS ? '1em' : '5em',
                        paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em',
                        paddingRight: matchesXS ? 0 : matchesSM ? '5em' : matchesMD ? '10em' : '20em'
                    }
                }}
                style={{zIndex: 1302}}
                fullScreen={matchesXS}
            >
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography variant={"h4"} gutterBottom align={"center"}>Confirm Message</Typography>
                        </Grid>
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
                                error={emailHelper.length !== 0}
                                helperText={emailHelper}
                                value={email}
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item style={{marginBottom: "0.5em"}}>
                            <TextField
                                label={"phone"}
                                id={"phone"}
                                value={phone}
                                error={phoneHelper.length !== 0}
                                helperText={phoneHelper}
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
                            <TextField
                                InputProps={{disableUnderline: true}}
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
                    </Grid>
                    <Grid
                        item
                        container
                        direction={matchesSM ? 'column' : 'row'}
                        style={{marginTop: "2em"}}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <Button
                                color={"primary"}
                                onClick={() => {
                                    setOpen(false);
                                }}
                                style={{fontWeight: 300}}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant={"contained"}
                                disabled={canBeSent()}
                                className={classes.sendButton}
                                onClick={onConfirm}
                            >
                                {loading ? <CircularProgress size={30}/> : buttonContents}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                message={alert.message}
                ContentProps={{style: {backgroundColor: alert.backgroundColor}}}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                onClose={() => {
                    setAlert({
                        ...alert,
                        open: false
                    })
                }}
                autoHideDuration={4000}
            />
            <Grid item container direction={matchesMD ? 'column' : 'row'} className={classes.background} lg={8} xl={9}/>
        </Grid>
    );
}

