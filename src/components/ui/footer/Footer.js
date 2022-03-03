import React from "react";
import {Grid, Hidden, makeStyles} from "@material-ui/core";
import Shortcut from "./Shortcut";

import footerAdornment from "../../../assets/Footer Adornment.svg";
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'
import FooterLink from "./FooterLink";

const useStyles = makeStyles(theme => ({
    adornment: {
        width: '25em',
        verticalAlign: 'bottom'
    },
    footer: {
        backgroundColor: theme.palette.common.blue,
        position: "relative",
        width: "100%",
        zIndex: 1302
    },
    gridItem: {
        margin: "3em"
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6rem",
        right: "1.5em"
    },
    mainContainer: {
        position: 'absolute'
    }
}))

export const Footer = ({setValue, setSelectedIndex}) => {
    const classes = useStyles();

    const shortcuts = [
        {
            img: {
                src: instagram,
                alt: 'instagram',
            },
            href: 'https://www.instagram.com'
        },
        {
            img: {
                src: twitter,
                alt: 'twitter'
            },
            href: 'https://www.twitter.com'
        },
        {
            img: {
                src: facebook,
                alt: 'facebook'
            },
            href: 'https://www.facebook.com'
        }
    ]

    const links = {
        home: {
            to: '/',
            onClick: () => setValue(0)
        },
        services: {
            to: '/services',
            onClick: () => {
                setValue(1);
                setSelectedIndex(0);
            }
        },
        customSoftware: {
            to: '/custom-software',
            onClick: () => {
                setValue(1);
                setSelectedIndex(1);
            }
        },
        mobileApps: {
            to: '/mobile-apps',
            onClick: () => {
                setValue(1);
                setSelectedIndex(2);
            }
        },
        websites: {
            to: '/websites',
            onClick: () => {
                setValue(1);
                setSelectedIndex(3);
            }
        },
        revolution: {
            to: '/revolution',
            onClick: () => setValue(2),
        },
        about: {
            to: '/about',
            onClick: () => setValue(3),
        },
        contact: {
            to: '/contact',
            onClick: () => setValue(4)
        }
    }

    const labels = {
        revolution: ['The Revolution', 'Vision', 'Technology', 'Process'],
        about: ['About Us', 'History', 'Team']
    }

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid className={classes.mainContainer} container justify={"center"}>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} style={{margin: 0}} spacing={2}>
                            <FooterLink onClick={links.home.onClick} to={links.home.to}>Home</FooterLink>
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} style={{margin: 0}} spacing={2}>
                            <FooterLink onClick={links.services.onClick} to={links.services.to}>Services</FooterLink>
                            <FooterLink onClick={links.customSoftware.onClick} to={links.customSoftware.to}>
                                Custom Software Development
                            </FooterLink>
                            <FooterLink onClick={links.mobileApps.onClick} to={links.mobileApps.to}>
                                iOS/Android App Development
                            </FooterLink>
                            <FooterLink onClick={links.websites.onClick} to={links.websites.to}>
                                Website Development
                            </FooterLink>
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} style={{margin: 0}} spacing={2}>
                            {
                                labels.revolution.map((label, index)=>{
                                    return (
                                        <FooterLink
                                            key={index}
                                            onClick={links.revolution.onClick}
                                            to={links.revolution.to}
                                        >
                                            {label}
                                        </FooterLink>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} style={{margin: 0}} spacing={2}>
                            {
                                labels.about.map((label, index)=>{
                                    return (
                                        <FooterLink key={index} onClick={links.about.onClick} to={links.about.to}>
                                            {label}
                                        </FooterLink>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItem} item>
                        <Grid container direction={"column"} style={{margin: 0}} spacing={2}>
                            <FooterLink onClick={links.contact.onClick} to={links.contact.to}>Contact Us</FooterLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img className={classes.adornment} src={footerAdornment} alt="black decorative slash"/>
            <Grid className={classes.socialContainer} container justify={"flex-end"} spacing={2}>
                {
                    shortcuts.map((shortcut, index) => {
                        return <Shortcut key={index} href={shortcut.href} img={shortcut.img}/>
                    })
                }
            </Grid>
        </footer>
    );
}