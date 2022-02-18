import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";

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
    let {img} = props;
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const classes = useStyles();

    return (
        <Grid item container className={classes.rowContainer} alignItems={'center'}>
            <Grid item>
                <Grid container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h4'} gutterBottom>{props.title}</Typography>
                    </Grid>
                    <Grid item>
                        <img src={img.src} alt={img.alt} style={img.style}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {
                    children.map(child => {
                        return (
                            <Typography
                                key={children.indexOf(child)}
                                variant={'body1'}
                                className={classes.paragraphContainer}
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