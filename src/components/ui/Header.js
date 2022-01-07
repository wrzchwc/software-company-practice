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
        "&:hover": {
            opacity: 1
        }
    }

}))

const Header = props => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(index);
    }

    const handleClose = event => {
        setAnchorEl(null);
        setOpen(false);
    }

    const menuOptions = [
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Custom software development",
            link: "/custom-software"
        },
        {
            name: "Mobile app development",
            link: "/mobile-apps"
        },
        {
            name: "Website development",
            link: "/websites"
        }
    ];

    useEffect(() => {
        let {pathname} = window.location;
        if (pathname === "/" && value !== 0) {
            setValue(0)
        } else if (pathname === "/services" && value !== 1) {
            setValue(1);
            setSelectedIndex(1);
        } else if (pathname === "/revolution" && value !== 2) {
            setValue(2);
        } else if (pathname === "/about" && value !== 3) {
            setValue(3);
        } else if (pathname === "/contact" && value !== 4) {
            setValue(4);
        } else if (pathname === "/custom-software" && value !== 1){
            setValue(1);
            setSelectedIndex(1);
        } else if (pathname === "/mobile-apps" && value !== 1){
            setValue(1);
            setSelectedIndex(2);
        } else if(pathname === "/websites" && value !== 1){
            setValue(1);
            setSelectedIndex(3);
        } else if (pathname === "/estimate" && value !== 5){
            setValue(5);
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
                            {
                                menuOptions.map((option, i) => {
                                    return (
                                        <MenuItem
                                            classes={{root: classes.menuItem}}
                                            component={Link}
                                            onClick={event => {
                                                handleMenuItemClick(event, i);
                                                setValue(1);
                                                handleClose()
                                            }}
                                            key={option}
                                            selected={i === selectedIndex && value === 1}
                                            to={option.link}
                                        >
                                            {option.name}
                                        </MenuItem>
                                    );
                                })
                            }
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;