import React from 'react';
import {TitledParagraphs} from "./TitledParagraphs";
import {Grid} from "@material-ui/core";

export const ProcessPhase = props => {
    let {img} = props;
    return (
        <Grid item container className={props.className} style={props.style}>
            <TitledParagraphs
                title={props.title}
                paragraphStyle={{
                    color: '#FFF',
                    maxWidth: '20em'
                }}
            >
                {props.children}
            </TitledParagraphs>
            <Grid item lg style={{alignSelf: 'center'}}>
                <img src={img.src} alt={img.alt}/>
            </Grid>
        </Grid>
    );
}