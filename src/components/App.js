import React from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./ui/Theme"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaceHolder from "./PlaceHolder";
import {Footer} from "./ui/Footer";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<PlaceHolder label="Home"/>}/>
                    <Route path="/services" element={<PlaceHolder label="Services"/>}/>
                    <Route path="/custom-software" element={<PlaceHolder label="Custom software"/>}/>
                    <Route path="/mobile-apps" element={<PlaceHolder label="Mobile apps"/>}/>
                    <Route path="/websites" element={<PlaceHolder label="Websites"/>}/>
                    <Route path="/revolution" element={<PlaceHolder label="Revolution"/>}/>
                    <Route path="/about" element={<PlaceHolder label="About Us"/>}/>
                    <Route path="/contact" element={<PlaceHolder label="Contact Us"/>}/>
                    <Route path="/estimate" element={<PlaceHolder label="Estimate"/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
