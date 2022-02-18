import React from 'react';
import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {ServiceDescription} from "../../shared-components/ServiceDescription";

import analytics from '../../../../assets/analytics.svg';
import seo from '../../../../assets/seo.svg';
import outreach from '../../../../assets/outreach.svg';
import ecommerce from '../../../../assets/ecommerce.svg';
import {WebUseCase} from "./WebUseCase";

const useStyles = makeStyles(theme => ({
    rowContainer: {
        padding: '0 5em 0 5em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1.5em 10em 1.5em',
        }
    },
    paragraphContainer: {
        maxWidth: '30em'
    }
}))

export const Websites = props => {
    const classes = useStyles();

    const navigation = {
        back: {
            to: '/mobile-apps',
            onClick: () => props.setSelectedIndex(2),
            alt: 'back to iOS/Android Development Page'
        },
        forward: {
            to: '/services',
            onClick: () => props.setSelectedIndex(0),
            alt: 'forward to Services Page'
        }
    }

    const images = {
        analytics: {
            src: analytics,
            alt: 'graph with magnifying glass revealing 1s and 0s',
            style: {
                marginLeft: '-2.75em'
            }
        }
    }

    return (
        <Grid container direction={'column'}>
            <ServiceDescription navigation={navigation} title={'Website Development'}>
                <>
                    Having a website is a necessity in today's business world. They give you one central, public
                    location to let people know who you are, what you do and why you're the best at it.
                </>
                <>
                    From simply having your hours posted to having a full fledged online store, making yourself as
                    accessible as possible to users online drives growth and enables you to reach new customers.
                </>
            </ServiceDescription>
            <WebUseCase img={images.analytics} title={'Analytics'}>
                <>
                    Knowledge is power and data is 21st Century gold. Analyzing this data can reveal hidden patterns
                    and trends in your business, empowering you to make smarter decisions with measurable effects.
                </>
            </WebUseCase>
        </Grid>
    );
}