import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {SectionTitle} from "./SectionTitle";

export const TitledParagraphs = props => {
    let {title} = props;
    return (
        <Grid item container direction={'column'} lg style={props.style}>
            <SectionTitle title={title}/>
            <Grid item>
                {
                    props.children.map(child=>{
                        return(
                            <Typography
                                key={props.children.indexOf(child)}
                                variant={'body1'}
                                paragraph
                                align={props.paragraphAlignment}
                                style={props.paragraphStyle}
                            >
                                {child}
                            </Typography>
                        );
                    })
                }
            </Grid>
        </Grid>
    );
}