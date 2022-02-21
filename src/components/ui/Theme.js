import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";
const arcGrey = "#868686";

export default createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
        },
        estimate: {
            color: "white",
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none"
        },
        body1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: arcGrey
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 300,
            color: arcGrey
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: arcBlue
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25 rem",
            fontWeight: 300
        },
        learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            color: arcBlue,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem"
            }
        },
        MuiInput: {
            root: {
                color: "grey",
                fontWeight: 300
            },
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
});

