'use client'


import { useEffect } from "react";
import About from "./About/About";
import Advantage from "./Advantage/Advantage";
import Blog from "./Blog/Blog";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Investor from "./Investor/Investor";
import Price from "./Price/Price";
import Review from "./Review/Review";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        const initAos = async () => {
            await import("aos")
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            });

        }
        initAos();
    }, [])
    return (
        <div>
            <Hero />
            <About />
            <Feature />
            <Price />
            <Advantage />
            <Investor />
            <Review />
            <Blog />
        </div>
    );
}

export default Home;