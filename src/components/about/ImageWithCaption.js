import React from 'react';
import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";

export const ImageWithCaption = props => {
    let {img} = props;
    const matchesMD = useMediaQuery(useTheme().breakpoints.down('md'));

    return (
        <Grid item container direction={'column'} lg alignItems={props.alignItems} style={props.style}>
            <Grid item>
                <img src={img.src} alt={img.alt} style={{maxWidth: matchesMD ? 300 : undefined}}/>
            </Grid>
            <Grid item>
                <Typography variant={'caption'}>{props.caption}</Typography>
            </Grid>
        </Grid>
    );
}