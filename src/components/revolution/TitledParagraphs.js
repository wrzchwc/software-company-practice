import React from 'react';
import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {SectionTitle} from "./SectionTitle";

export const TitledParagraphs = props => {
    let {title} = props;
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid item container direction={'column'} alignItems={matchesMD ? 'center' : undefined} lg style={props.style}>
            <SectionTitle title={title}/>
            <Grid item>
                {
                    props.children.map((child, index) => {
                        return (
                            <Typography
                                key={index}
                                variant={'body1'}
                                paragraph
                                align={'justify'}
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