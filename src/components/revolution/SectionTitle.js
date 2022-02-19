import React from 'react';
import {Grid, Typography} from "@material-ui/core";

export const SectionTitle = props => {
    let {title} = props;
    return (
        <Grid item>
            <Typography variant={'h4'} gutterBottom align={title.align} style={title.style}>
                {title.content}
            </Typography>
        </Grid>
    );
}