import React from 'react';
import {Link} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import forwardArrow from '../../../assets/forwardArrow.svg';
import backArrow from "../../../assets/backArrow.svg";

export const NavigationArrowButton = props => {
    return (
        <IconButton
            style={{backgroundColor: 'transparent'}}
            component={Link}
            to={props.to}
            onClick={props.onClick}
        >
            <img src={props.forward ? forwardArrow : backArrow} alt={props.alt}/>
        </IconButton>
    );
}