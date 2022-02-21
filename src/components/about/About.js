import React from 'react';
import {Avatar, Grid, makeStyles, Typography, useTheme} from "@material-ui/core";
import {BrandStory} from "./BrandStory";

import history from '../../assets/history.svg';
import profile from '../../assets/founder.jpg';
import yearbook from '../../assets/yearbook.svg';
import puppy from '../../assets/puppy.svg';

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: '1.5rem',
        maxWidth: '50em',
        lineHeight: 1.4
    },
    rowContainer: {
        padding: '0 5em 0 5em',
        [theme.breakpoints.down('sm')]: {
            padding: '0 1.5em 0 1.5em',
        }
    },
    avatar: {
        height: '25em',
        width: '25em'
    }
}))

export const About = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction={'column'}>
            <Grid item className={classes.rowContainer} style={{marginTop: '2em'}}>
                <Typography variant={'h2'}>About Us</Typography>
            </Grid>
            <Grid item container justify={'center'} className={classes.rowContainer}>
                <Typography variant={'h4'} className={classes.missionStatement} align={'center'}>
                    Whether it be person to person, business to consumer, or an individual to their interests,
                    technology is meant to bring us closer to what we care about in the best way possible. Arc
                    Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to
                    the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid item container className={classes.rowContainer} justify={'space-around'}>
                <Grid item>
                    <Grid item container direction={'column'} lg style={{maxWidth: '35em'}}>
                        <Grid item>
                            <Typography variant={'h4'} gutterBottom>History</Typography>
                        </Grid>
                        <BrandStory>
                            <>Founded in 2019, we’re ready to get our hands on the world’s business problems.</>
                            <>
                                It all started with one question: Why aren't all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers,
                                educational barriers, and sometimes institutional barriers.
                            </>
                            <>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                                software engineering and computing power, compounded by the proliferation of smart phones,
                                has opened up infinite worlds of possibility. Things that have always been done by hand can
                                now be done digitally and automatically, and completely new methods of interaction are
                                created daily. Taking full advantage of these advancements is the name of the game
                            </>
                        </BrandStory>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify={'center'} lg >
                        <img src={history} alt={'quill pen sitting on top of book'} style={{maxHeight: '22em'}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={'column'} className={classes.rowContainer} alignItems={'center'}>
                <Grid item>
                    <Typography variant={'h4'} gutterBottom align={'center'}>Team</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} paragraph align={'center'}>Zachary Reece, Founder</Typography>
                    <Typography variant={'body1'} paragraph align={'center'}>
                        I started coding when I was 9 years old.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar src={profile} alt={'founder'} className={classes.avatar}/>
                </Grid>
                <Grid item container>
                    <Grid item container direction={'column'} lg alignItems={'flex-end'}>
                        <Grid item>
                            <img src={yearbook} alt={'yearbook page about founder'}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'caption'}>a page from my Sophomore yearbook</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        lg
                        style={{
                            maxWidth: '45em',
                            padding: '1.25em'
                        }}
                    >
                        <Typography variant={'body1'} align={'center'}>
                            I taught myself basic coding from a library book in third grade, and ever
                            since then my passion has solely been set on learning — learning about
                            computers, learning mathematics and philosophy, studying design, always
                            just learning.
                        </Typography>
                        <Typography variant={'body1'} align={'center'}>
                            Now I’m ready to apply everything I’ve learned, and to help others with the intuition I
                            have developed.
                        </Typography>
                    </Grid>
                    <Grid item container direction={'column'} lg>
                        <Grid item>
                            <img src={puppy} alt={'grey spotted puppy'}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'caption'}>my miniature dapple dachshund, Sterling</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}