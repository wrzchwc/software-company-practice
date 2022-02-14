import React from 'react';
import {Grid} from "@mui/material";
import {Typography} from "@material-ui/core";

export const ContactBlock = props => {
    return (
        <Grid item sm style={props.style}>
            <Grid container direction={"column"}>
                <Typography variant={"h2"} style={{color: "white"}}>{props.title}</Typography>
                <Typography variant={"subtitle2"}>{props.subtitle}</Typography>
                <Grid item>{props.children}</Grid>
            </Grid>
        </Grid>
    );
}