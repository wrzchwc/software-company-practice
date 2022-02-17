import React from 'react';
import {Grid, Typography} from "@material-ui/core";

export const IconImage = props => {
    return (
        <Grid item container direction={'column'} md style={props.style} alignItems={'center'}>
            <Grid item>
                <Typography variant={'h4'}>{props.label}</Typography>
            </Grid>
            <Grid item>
                <img src={props.src} alt={props.alt} style={props.imageStyle}/>
            </Grid>
        </Grid>
    );
}