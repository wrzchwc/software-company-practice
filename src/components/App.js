import React, {useState} from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./ui/Theme"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaceHolder from "./PlaceHolder";
import {Footer} from "./ui/Footer";
import {Contact} from "./Contact";
import {LandingPage} from "./LandingPage";


const App = () => {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    setValue={setValue}
                    value={value}
                />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/services" element={<PlaceHolder label="Services"/>}/>
                    <Route path="/custom-software" element={<PlaceHolder label="Custom software"/>}/>
                    <Route path="/mobile-apps" element={<PlaceHolder label="Mobile apps"/>}/>
                    <Route path="/websites" element={<PlaceHolder label="Websites"/>}/>
                    <Route path="/revolution" element={<PlaceHolder label="Revolution"/>}/>
                    <Route path="/about" element={<PlaceHolder label="About Us"/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/estimate" element={<PlaceHolder label="Estimate"/>}/>
                </Routes>
                <Footer
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    setValue={setValue}
                    value={value}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
