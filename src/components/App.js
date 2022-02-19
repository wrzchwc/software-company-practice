import React, {useState} from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./ui/Theme"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaceHolder from "./PlaceHolder";
import {Footer} from "./ui/Footer";
import {Contact} from "./Contact";
import {LandingPage} from "./landing-page/LandingPage";
import {Services} from "./services/main/Services";
import {CustomSoftware} from "./services/main/CustomSoftware";
import {MobileApps} from "./services/main/MobileApps";
import {Websites} from "./services/main/websites/Websites";
import {Revolution} from "./revolution/Revolution";


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
                    <Route path="/" element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
                    <Route
                        path="/services"
                        element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>}
                    />
                    <Route
                        path="/custom-software"
                        element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex}/>}
                    />
                    <Route
                        path="/mobile-apps"
                        element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>}
                    />
                    <Route
                        path="/websites"
                        element={<Websites setValue={setValue} setSelectedIndex={setSelectedIndex}/>}
                    />
                    <Route
                        path="/revolution"
                        element={<Revolution setValue={setValue} setSelectedIndex={setSelectedIndex}/>}
                    />
                    <Route path="/about" element={<PlaceHolder label="About Us"/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/estimate" element={<PlaceHolder label="Estimate"/>}/>
                </Routes>
                <Footer
                    setSelectedIndex={setSelectedIndex}
                    setValue={setValue}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
