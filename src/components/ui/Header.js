import React, {useEffect, useState} from "react";
import {AppBar, makeStyles, Toolbar, useScrollTrigger, Tab, Tabs, Button, Menu, MenuItem} from "@material-ui/core";
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
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        borderRadius: 0,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover":{
            opacity: 1
        }
    }

}))

const Header = props => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = e => {
        setAnchorEl(null);
        setOpen(false);
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
                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? true : undefined}
                                className={classes.tab}
                                component={Link}
                                label="Services"
                                onMouseOver={event => handleClick(event)}
                                to="/services"
                            />
                            <Tab className={classes.tab} component={Link} label="The Revolution" to="/revolution"/>
                            <Tab className={classes.tab} component={Link} label="About Us" to="/about"/>
                            <Tab className={classes.tab} component={Link} label="Contact Us" to="/contact"/>
                        </Tabs>
                        <Button color="secondary" className={classes.button} variant="contained">
                            Free Estimate
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            classes={{paper: classes.menu}}
                            elevation={0}
                            id="simple-menu"
                            MenuListProps={{onMouseLeave: handleClose}}
                            onClose={handleClose}
                            open={open}
                        >
                            <MenuItem
                                component={Link}
                                classes={{root: classes.menuItem}}
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                to="/services"
                            >
                                Services
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                classes={{root: classes.menuItem}}
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                to="/custom-software"
                            >
                                Custom software development
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                classes={{root: classes.menuItem}}
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                to="/mobile-apps"
                            >
                                Mobile app development
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                classes={{root: classes.menuItem}}
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                to="/websites"
                            >
                                Website development
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;