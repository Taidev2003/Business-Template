import Image from "next/image";

type Props = {
    image: string,
    title: string,
}
const BlogCard = ({ image, title }: Props) => {
    return (
        <div>
            {/* image */}
            <Image src={image} alt={title} width={400} height={400} className="object-cover rounded-3xl" />
            <div className="flex mt-6 items-center space-x-4">
                <span className="text-[15px] text-white text-opacity-60">20 March 2024</span>
                <span className="text-[15px] text-white text-opacity-60">By Admin</span>
            </div>
            <h1 className="mt-4 cursor-pointer text-xl text-white font-semibold underline">{title}</h1>
            <p className="text-lg cursor-pointer text-white mt-4 underline">Read more</p>
        </div>
    );
}

export default BlogCard;