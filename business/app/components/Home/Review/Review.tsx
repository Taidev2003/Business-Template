import SectionHeading from "../../Helper/SectionHeading";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
    return (
        <div className="pt-20 pb-16 bg-[#6a15e1] ">
            {/* section heading */}
            <SectionHeading heading="Client Review" />
            {/*  Review slider */}
            <div className="w-4/5 mx-auto mt-16">
                {/* review slider component */}
                <ReviewSlider />
            </div>
        </div>
    );
}

export default Review;