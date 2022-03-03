import React from 'react';
import {Grid, Hidden, Typography} from "@material-ui/core";

export const Bio = props => {
    return (
        <Hidden mdDown={props.mdDown} lgUp={props.lgUp}>
            <Grid
                item
                lg
                style={{
                    maxWidth: '45em',
                    padding: '1.25em'
                }}
            >
                <Typography variant={'body1'} align={'justify'}>
                    I taught myself basic coding from a library book in third grade, and ever
                    since then my passion has solely been set on learning — learning about
                    computers, learning mathematics and philosophy, studying design, always
                    just learning.
                </Typography>
                <Typography variant={'body1'} align={'justify'}>
                    Now I’m ready to apply everything I’ve learned, and to help others with the intuition I
                    have developed.
                </Typography>
            </Grid>
        </Hidden>
    );
}