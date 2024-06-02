import SectionHeading from "../../Helper/SectionHeading";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <div className="pt-20 pb-16 bg-[#001232]">
            {/* section heading */}
            <SectionHeading heading="Latest Blog" />
            {/* define grid system */}
            <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* blog card component */}
                <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b1.jpg" title="10 Reason to Invest for your future" />
                </div>
                {/* blog card component */}
                <div data-aos="zoom-out" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b2.jpg" title="10 Reason to Invest for your future" />
                </div>
                {/* blog card component */}
                <div data-aos="zoom-out" data-aos-delay="400" data-aos-anchor-placement="top-center">
                    <BlogCard image="/images/b3.jpg" title="10 Reason to Invest for your future" />
                </div>
            </div>

        </div>
    );
}

export default Blog;