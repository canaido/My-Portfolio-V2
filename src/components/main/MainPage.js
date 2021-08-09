import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import MainLogo from './MainLogo';


const MainPage = () => {
    return (
        <div
            id="home"
            className=""
        >
            <Navbar />
            <MainLogo />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainPage
