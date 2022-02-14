import React from 'react';
import ButtonArrow from "./ButtonArrow";
import {Button} from "@material-ui/core";

export const LearnMoreButton = props => {
    return(
        <Button variant={"outlined"} className={props.className} style={props.style}>
            <span style={{marginRight: 10}}>Learn More</span>
            <ButtonArrow width={props.width} height={props.height} fill={props.fill}/>
        </Button>
    );
}