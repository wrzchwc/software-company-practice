import React from 'react';
import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";

export const BrandStory = props => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid item>
            <Typography
                variant={'body1'}
                paragraph
                style={{
                    fontWeight: 700,
                    fontStyle: 'italic'
                }}
                align={matchesMD ? 'center' : undefined}
            >
                We're the new kid on the block
            </Typography>
            {
                props.children.map((child, index) => {
                    return (
                        <Typography
                            key={index}
                            variant={'body1'}
                            paragraph
                            align={matchesMD ? 'center' : undefined}
                        >
                            {child}
                        </Typography>
                    );
                })
            }
        </Grid>
    );
}