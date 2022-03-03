import React from 'react';
import {Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";

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

export const WebUseCase = props => {
    let {img, title} = props;
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            item
            container
            className={classes.rowContainer}
            alignItems={'center'}
            justify={props.justify}
            style={props.rowContainerStyle}
            direction={matchesSM ? 'column' : 'row'}
        >
            <Grid item>
                <Grid container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h4'} gutterBottom align={title.align}>{title.content}</Typography>
                    </Grid>
                    <Grid item>
                        <img src={img.src} alt={img.alt} style={img.style}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={props.paragraphSectionStyle} className={classes.paragraphContainer}>
                {
                    children.map((child, index) => {
                        return (
                            <Typography
                                key={index}
                                variant={'body1'}
                                paragraph={props.paragraph}
                                align={'justify'}
                            >
                                {child}
                            </Typography>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}