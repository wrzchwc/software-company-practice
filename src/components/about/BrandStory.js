import React from 'react';
import {Grid, Typography} from "@material-ui/core";

export const BrandStory = props => {

    return (
        <Grid item>
            <Typography
                variant={'body1'}
                paragraph
                style={{
                    fontWeight: 700,
                    fontStyle: 'italic'
                }}
            >
                We're the new kid on the block
            </Typography>
            {
                props.children.map(child => {
                    return <Typography variant={'body1'} paragraph>{child}</Typography>
                })
            }
        </Grid>
    );
}