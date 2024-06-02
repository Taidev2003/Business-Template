import React from "react"
import Image from 'next/image';
import HeroImage from "@/public/images/hero.png"
const Hero = () => {
    return (<div className="lg:h-[88vh] bg-[#62269d] md:h-[80vh] sm:h-[75vh] h-[70vh] flex items-center justify-center flex-col ">
        {/* define grid system */}
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto ">
            {/* text contnet */}
            <div className="col-span-2">
                <h1 data-aos="fade-right" className="text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold text-white leading-[2.4rem] md:leading-[4rem] ">100% Secure <span className="text-yellow-300">Invesment</span> Plan
                </h1>
                <p data-aos="fade-left" data-aos-delay="200" className="md:text-[17px] text-[15px] mb-8 text-white opacity-90 font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae dolorem saepe, adipisci vero amet iure fuga dolor laboriosam, delectus eum atque voluptatum obcaecati autem repellendus libero voluptates assumenda molestiae.</p>
                {/* input box */}
                <div data-aos="zoom-in" data-aos-delay="400" className="w-full h-14 relative rounded-full bg-blue-950">
                    {/* input */}
                    <input type="text" placeholder="Enter your email" className=" bg-transparent h-full ml-8 text-white outline-none w-[90%]  " />
                </div>
                {/* submit button */}
                <button data-aos="zoom-out" data-aos-delay="600" className="px-4 py-2 w-[40%] bg-blue-500 hover:bg-blue-700 transition-all duration-150 rounded-full mt-4 text-white">Submit</button>
            </div>
            {/* Image content */}
            <div data-aos="fade-left" data-aos-delay="800" className="col-span-3 hidden sm:block mx-auto">
                <Image src={HeroImage} alt="hero" />
            </div>
        </div>
    </div>);
}

export default Hero;