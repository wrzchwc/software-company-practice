import React, {Fragment, useEffect, useState} from "react";
import {
    AppBar,
    makeStyles,
    Toolbar,
    useScrollTrigger,
    Tab,
    Tabs,
    Button,
    Menu,
    MenuItem,
    IconButton
} from "@material-ui/core";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";
import {useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/core";
import {SwipeableDrawer, List, ListItem, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


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
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2.25em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
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
        marginRight: "50px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        }
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
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "100px",
        width: "100px"
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        },
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

const Header = ({selectedIndex, setSelectedIndex, setValue, value}) => {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(index);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            selectedIndex: 0
        },
        {
            name: "Custom software development",
            link: "/custom-software",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "iOS/Android app development",
            link: "/mobile-apps",
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: "Website development",
            link: "/websites",
            activeIndex: 1,
            selectedIndex: 3
        }
    ];

    const routes = [
        {
            name: "Home",
            link: "/",
            activeIndex: 0
        },
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? true : undefined,
            mouseOver: event => handleClick(event)
        },
        {
            name: "The Revolution",
            link: "/revolution",
            activeIndex: 2
        },
        {
            name: "About Us",
            link: "/about",
            activeIndex: 3
        },
        {
            name: "Contact Us",
            link: "/contact",
            activeIndex: 4
        }
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            if (window.location.pathname === `${route.link}`) {
                if (value !== route.activeIndex) {
                    setValue(route.activeIndex);
                    if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                        setSelectedIndex(route.selectedIndex);
                    }
                }
            } else if (window.location.pathname === '/estimate') {
                setValue(5);
            }
        })
    }, [menuOptions, routes, selectedIndex, setSelectedIndex, setValue, value]);

    const tabs = (
        <>
            <Tabs
                className={classes.tabContainer}
                indicatorColor="primary"
                onChange={handleChange}
                value={value}
            >
                {
                    routes.map((route, index) => (
                        <Tab
                            key={`${route}${index}`}
                            className={classes.tab}
                            component={Link}
                            to={route.link}
                            label={route.name}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                        />
                    ))
                }
            </Tabs>
            <Button
                color="secondary"
                className={classes.button}
                variant="contained"
                component={Link}
                to={'/estimate'}
                onClick={() => setValue(5)}
            >
                Free Estimate
            </Button>
            <Menu
                anchorEl={anchorEl}
                classes={{paper: classes.menu}}
                elevation={0}
                id="simple-menu"
                MenuListProps={{onMouseLeave: handleClose}}
                onClose={handleClose}
                open={openMenu}
                keepMounted
                style={{zIndex: 1302}}
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
                                    handleClose();
                                }}
                                key={`${option}${i}`}
                                selected={i === selectedIndex && value === 1}
                                to={option.link}
                                style={{color:'#fff'}}
                            >
                                {option.name}
                            </MenuItem>
                        );
                    })
                }
            </Menu>
        </>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.common.blue
                    }
                }}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            button
                            divider
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            onClick={() => {
                                setOpenDrawer(false);
                                setValue(route.activeIndex);
                            }}>
                            <ListItemText disableTypography className={classes.drawerItem}>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        component={Link}
                        to={"/estimate"}
                        divider
                        button
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(5);
                        }}
                        style={{backgroundColor: theme.palette.common.orange}}
                        selected={value === 5}
                        classes={{selected: classes.drawerItemSelected}}
                    >
                        <ListItemText
                            disableTypography
                            className={classes.drawerItem}
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon fontSize={"large"}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
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
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}

export default Header;