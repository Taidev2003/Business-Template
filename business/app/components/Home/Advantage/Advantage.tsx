import SectionHeading from "../../Helper/SectionHeading";
import Image from "next/image";
import advantageImage from "@/public/images/advantage.png"
const Advantage = () => {
    return (
        <div className="pt-20 pb-16 bg-[#001232] ">

            {/* setion heading */}
            <SectionHeading heading="Our Advantage" />
            {/* define grid system */}
            <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* text content */}
                <div>
                    <h1 className="text-lg md:text-2xl font-semibold text-white">We are Offerring 100% Guarantee.</h1>
                    <p className="text-white text-opacity-60 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate delectus ab optio blanditiis.
                        Dicta deserunt est dolores obcaecati vitae perferendis, ea cupiditate dignissimos veritatis cumque explicabo quae, suscipit voluptatum.</p>
                    <p className="text-white text-opacity-60 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate delectus ab optio blanditiis.
                        Dicta deserunt est dolores obcaecati vitae perferendis, ea cupiditate dignissimos !</p>
                </div>
                {/* Image content*/}
                <div data-aos="zoom-out" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <Image src={advantageImage} alt="advantage" />
                </div>
            </div>
        </div>
    );
}

export default Advantage;