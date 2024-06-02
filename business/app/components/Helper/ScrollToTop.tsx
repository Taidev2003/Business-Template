'use client'

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false)
    useEffect(() => {
        const toogeleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toogeleVisibility)
        return () => {
            window.removeEventListener('scroll', toogeleVisibility)
        }

    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className="fixed bottom-4 animate-pulse right-4">
            {isVisible && (
                <button onClick={scrollToTop} className="bg-red-500 text-white  rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
                    <FaArrowUp />
                </button>)}
        </div>
    );

}

export default ScrollToTop;