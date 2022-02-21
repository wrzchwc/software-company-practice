import React from 'react';
import {TitledParagraphs} from "./TitledParagraphs";
import {Grid, useMediaQuery,useTheme} from "@material-ui/core";

export const ProcessPhase = props => {
    let {img} = props;
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid
            item
            container
            direction={matchesMD ? 'column' : 'row'}
            justify={matchesMD ? 'center' : undefined}
            className={props.className}
            style={props.style}
        >
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
                <img src={img.src} alt={img.alt} width={'100%'} style={img.style}/>
            </Grid>
        </Grid>
    );
}