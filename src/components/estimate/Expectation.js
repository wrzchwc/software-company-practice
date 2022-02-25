import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import check from "../../assets/check.svg";

export const Expectation = props => {
    return (
        <Grid item container alignItems={'center'}>
            <Grid item>
                <img src={check} alt={'checkmark'}/>
            </Grid>
            <Grid item>
                <Typography variant={'body1'}>{props.children}</Typography>
            </Grid>
        </Grid>
    );
}