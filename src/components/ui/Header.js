import React, {useEffect, useState} from "react";
import {AppBar, makeStyles, Toolbar, useScrollTrigger, Tab, Tabs, Button} from "@material-ui/core";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";

const ElevationScroll = props => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: "25px",
        minWidth: 10,
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        height: "45px",
        marginLeft: "25px",
        marginRight: "50px"
    },
    logoContainer: {
        padding: 0,
        "&:hover": "transparent"
    }
}))

const Header = props => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        }
    }, [value]);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            component={Link}
                            disableRipple
                            onClick={() => setValue(0)}
                            to="/"
                        >
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>
                        <Tabs
                            className={classes.tabContainer}
                            indicatorColor="primary"
                            onChange={handleChange}
                            value={value}
                        >
                            <Tab className={classes.tab} component={Link} label="Home" to="/" on/>
                            <Tab className={classes.tab} component={Link} label="Services" to="/services"/>
                            <Tab className={classes.tab} component={Link} label="The Revolution" to="/revolution"/>
                            <Tab className={classes.tab} component={Link} label="About Us" to="/about"/>
                            <Tab className={classes.tab} component={Link} label="Contact Us" to="/contact"/>
                        </Tabs>
                        <Button color="secondary" className={classes.button} variant="contained">
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;