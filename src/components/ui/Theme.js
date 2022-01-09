import {createMuiTheme} from "@material-ui/core/styles";
const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab:{
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
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        }
    }
});

