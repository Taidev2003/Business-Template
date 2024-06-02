import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
    image: string,
    name: string,
}

const ReviewCard = ({ image, name }: Props) => {
    return (
        <div className="p-6 m-4 bg-[#032055]">
            {/* review star */}
            <div className="flex items-center space-x-2 mt-4">
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
            </div>
            {/* review text */}
            <p className="mt-4 text-white text-opacity-70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iure. Quis sed mollitia aperiam cupiditate hic.
            </p>
            {/* profile */}
            <div className="flex mt-8 items-center space-x-4">
                <div>
                    <Image src={image} alt={name} width={60} height={60} />
                </div>
                <div>
                    <h1 className="text-lg text-white uppercase">{name}</h1>
                    <p className="mt-[0.3rem] text-[15px] text-white  text-opacity-75">CEO, WOW</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;