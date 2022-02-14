import React from 'react';
import ButtonArrow from "./ButtonArrow";
import {Button} from "@material-ui/core";
import {useTheme} from "@material-ui/core";

export const LearnMoreButton = ({className, height, width}) => {
    const theme = useTheme();

    return(
        <Button variant={"outlined"} className={className}>
            <span style={{marginRight: 10}}>Learn More</span>
            <ButtonArrow width={width} height={height} fill={theme.palette.common.blue}/>
        </Button>
    );
}