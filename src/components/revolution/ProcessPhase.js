import React from 'react';
import {TitledParagraphs} from "./TitledParagraphs";
import {Grid, useTheme} from "@material-ui/core";

export const ProcessPhase = props => {
    let {img} = props;
    const theme = useTheme();
    const matchesMD = theme.breakpoints.down('md');

    return (
        <Grid item container direction={matchesMD ? 'column' : 'row'} className={props.className} style={props.style}>
            <TitledParagraphs
                title={props.title}
                paragraphStyle={{
                    color: '#FFF',
                    maxWidth: '20em'
                }}
                paragraphAlignment={props.paragraphAlignment}
            >
                {props.children}
            </TitledParagraphs>
            <Grid item lg style={{alignSelf: 'center'}}>
                <img src={img.src} alt={img.alt} style={img.style} width={'100%'}/>
            </Grid>
        </Grid>
    );
}