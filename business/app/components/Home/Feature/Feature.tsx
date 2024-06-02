import { FaMoneyBill, FaPiggyBank } from "react-icons/fa";
import SectionHeading from "../../Helper/SectionHeading";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Feature = () => {
    return (
        <div className="pt-20 pb-16 bg-[#032055] ">
            {/* Section heading */}
            <SectionHeading heading="Why Choose us" />
            {/* define gird system */}
            <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center">
                {/* list feature card */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-600 rounded-md shadow-md">
                        {/* icon */}
                        <FaMoneyBill className="mx-auto mt-8 w-16 h-16 text-white" />
                        <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold  ">
                            Fast Prodit
                        </h1>
                        <p className="text-center text-white text-opacity-70">lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur</p>
                    </div>
                </div>
                {/* list feature card 2 */}
                <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <div className="p-6 cursor-pointxer hover:scale-110 transition-all duration-300 bg-red-600 rounded-md shadow-md">
                        {/* icon */}
                        <FaPiggyBank className="mx-auto mt-8 w-16 h-16 text-white" />
                        <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold  ">
                            Instant Withdraw
                        </h1>
                        <p className="text-center text-white text-opacity-70">lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur</p>
                    </div>
                </div>
                {/* list feature card 3 */}
                <div data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="top-center">
                    <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-green-600 rounded-md shadow-md">
                        {/* icon */}
                        <FaMoneyBillTransfer className="mx-auto mt-8 w-16 h-16 text-white" />
                        <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold  ">
                            Multi-Currency
                        </h1>
                        <p className="text-center text-white text-opacity-70">lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur</p>
                    </div>
                </div>
                {/* list feature card  */}
                <div data-aos="fade-left" data-aos-delay="600" data-aos-anchor-placement="top-center">
                    <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-indigo-900 rounded-md shadow-md">
                        {/* icon */}
                        <BiSupport className="mx-auto mt-8 w-16 h-16 text-white" />
                        <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold  ">
                            Customer Support
                        </h1>
                        <p className="text-center text-white text-opacity-70">lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Feature;