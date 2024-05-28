import About from "./About/About";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Price from "./Price/Price";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Feature />
            <Price />
        </div>
    );
}

export default Home;