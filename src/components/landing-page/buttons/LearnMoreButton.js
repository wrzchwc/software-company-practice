import React from 'react';
import ButtonArrow from "./ButtonArrow";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export const LearnMoreButton = props => {
    return(
        <Button
            variant={"outlined"}
            className={props.className}
            style={props.style}
            component={Link}
            to={props.to}
            onClick={props.onClick}
        >
            <span style={props.spanStyle}>Learn More</span>
            <ButtonArrow width={props.width} height={props.height} fill={props.fill}/>
        </Button>
    );
}