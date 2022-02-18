import React from 'react';
import {Grid, useMediaQuery, useTheme} from "@material-ui/core";
import {ServiceDescription} from "../../shared-components/ServiceDescription";

import analytics from '../../../../assets/analytics.svg';
import seo from '../../../../assets/seo.svg';
import outreach from '../../../../assets/outreach.svg';
import ecommerce from '../../../../assets/ecommerce.svg';
import {WebUseCase} from "./WebUseCase";
import {CallToAction} from "../../../ui/CallToAction";

export const Websites = props => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
        },
        ecommerce: {
            src: ecommerce,
            alt: 'world outline made of dollar signs'
        },
        outreach: {
            src: outreach,
            alt: 'megaphone'
        },
        seo: {
            src: seo,
            alt: "website standing on winner's podium"
        }
    }

    const titles = {
        analytics: {
            content: 'Analytics',
            align: matchesSM ? 'center' : undefined
        },
        ecommerce: {
            content: 'E-Commerce',
            align: 'center'
        },
        outreach: {
            content: 'Outreach',
            align: matchesSM ? 'center' : undefined
        },
        seo: {
            content: <>Search Engine<br/>Optimization</>,
            align: matchesSM ? 'center' : undefined
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
            <WebUseCase img={images.analytics} title={titles.analytics} rowContainerStyle={{marginTop: '15em'}}>
                <>
                    Knowledge is power and data is 21st Century gold. Analyzing this data can reveal hidden patterns
                    and trends in your business, empowering you to make smarter decisions with measurable effects.
                </>
            </WebUseCase>
            <WebUseCase
                img={images.ecommerce}
                title={titles.ecommerce}
                justify={'flex-end'}
                paragraphSectionStyle={{marginLeft: matchesSM ? 0 : '1em'}}
                rowContainerStyle={{margin: '15em 0 15em 0'}}
                paragraph={true}
            >
                <>It's no secret that people like to shop online.</>
                <>
                    In 2017 over $2.3 trillion was spent in e-commerce and it's time for your slice of that pie.
                </>
            </WebUseCase>
            <WebUseCase
                img={images.outreach}
                title={titles.outreach}
                paragraphSectionStyle={{marginLeft: matchesSM ? 0 : '1em'}}
            >
                <>
                    Draw people in with a dazzling website. Showing off your products online is a great way to help
                    customers decide what's right for them before visiting in person.
                </>
            </WebUseCase>
            <WebUseCase
                img={images.seo}
                title={titles.seo}
                justify={'flex-end'}
                paragraphSectionStyle={{marginLeft: matchesSM ? 0 : '1em'}}
                rowContainerStyle={{margin: '15em 0 15em 0'}}
                paragraph={true}
            >
                <>How often have you ever been to the second page of Google results?</>
                <>If you're like us, probably never.</>
                <>Customer don't get there either, so we make sure your website is designed to end up on top.</>
            </WebUseCase>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    );
}