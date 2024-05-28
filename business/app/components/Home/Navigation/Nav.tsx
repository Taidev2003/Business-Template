// Nav.js
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

// type Props = {
//     openNav: () => void;
// };
// { openNav }: Props
const Nav = () => {
    return (
        <div className="h-16 bg-[#62269d] shadow-md">
            <div className="flex items-center justify-between w-4/5 mx-auto h-full">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <span className="text-3xl md:text-5xl text-yellow-300">Bu</span>siness
                </h1>
                <ul className="hidden lg:flex items-center space-x-8">
                    <li className="text-lg font-semibold text-yellow-300 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-lg font-semibold text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                        <Link href="/">About</Link>
                    </li>
                    <li className="text-lg font-semibold text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                        <Link href="/">Investment</Link>
                    </li>
                    <li className="text-lg font-semibold text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                        <Link href="/">Service</Link>
                    </li>
                    <li className="text-lg font-semibold text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                        <Link href="/">Blog</Link>
                    </li>
                    <li className="text-lg font-semibold text-white cursor-pointer hover:text-yellow-300 transition-all duration-200">
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300 ">
                        <span className="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rorate-12 group-hover:translate-x-40"></span>
                        <span className="relative">Login</span>
                    </button>
                </div>
                {/* onClick={openNav} */}
                <FaBars className="w-8 h-8 text-white cursor-pointer lg:hidden" />
            </div>
        </div>
    );
};

export default Nav;
