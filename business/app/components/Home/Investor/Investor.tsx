import SectionHeading from "../../Helper/SectionHeading";
import InvestorCard from "./InvestorCard";

const Investor = () => {
    return (
        <div className="pt-20 pb-16 bg-[#030255]">
            {/* section heading */}
            <SectionHeading heading="Our Top Investors" />
            {/* define grid system */}
            <div className="w-4/5 mt-16 mx-auto grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                {/* Investor profile card1 */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <InvestorCard image="/images/i1.jpg" invest="29034893" name="Jhon" />
                </div>
                {/* Investor profile card2 */}
                <div data-aos="zoom-out" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <InvestorCard image="/images/i2.jpg" invest="39034893" name="Mikasa" />
                </div>
                {/* Investor profile card3 */}
                <div data-aos="zoom-out" data-aos-delay="400" data-aos-anchor-placement="top-center">
                    <InvestorCard image="/images/i3.jpg" invest="49034893" name="Sajal" />
                </div>
                {/* Investor profile card4 */}
                <div data-aos="zoom-out" data-aos-delay="600" data-aos-anchor-placement="top-center">
                    <InvestorCard image="/images/i4.jpg" invest="59034893" name="Qjuan" />
                </div>
            </div>
        </div>
    );
}

export default Investor;