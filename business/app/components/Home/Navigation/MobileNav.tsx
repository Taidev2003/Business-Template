import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";


type Props = {
    nav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ closeNav, nav }: Props) => {
    const navOpenStyle = nav ? "translate-x-0" : "translate-x-full";

    const handleNavClose = () => {
        console.log("Closing mobile navigation...");
        closeNav(); // Gọi closeNav khi nút đóng được nhấp
    };

    return (
        <div className={`transform ${navOpenStyle} transition-all duration-500 fixed top-0 left-0 z-50 w-full h-screen bg-[#29207f]`}>
            <FaTimes onClick={closeNav} className="w-8 h-8 absolute top-8 right-8 text-white cursor-pointer" />

            <ul className="relative z-50 flex flex-col items-center justify-center h-full space-y-10">
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">About</Link>
                </li>
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Investment</Link>
                </li>
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Service</Link>
                </li>
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Blog</Link>
                </li>
                <li className="text-2xl text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileNav;
