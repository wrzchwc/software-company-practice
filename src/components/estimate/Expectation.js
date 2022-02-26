import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import check from "../../assets/check.svg";

export const Expectation = props => {
    return (
        <Grid item container alignItems={'center'} style={props.style}>
            <Grid item xs={2}>
                <img src={check} alt={'checkmark'}/>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={'body1'}>{props.children}</Typography>
            </Grid>
        </Grid>
    );
}