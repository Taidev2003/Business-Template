const Footer = () => {
    return (
        <div className="pt-12  bg-[#5306e0] pb-12">
            {/* define grid system */}
            <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
                <div className="lg:mx-auto mx-0">
                    {/* logo */}
                    <h1 className="text-lg md:text-2xl font-bold text-white">
                        <span className="text-3xl md:text-5xl text-yellow-300">Bu</span>siness
                    </h1>
                    <p className="text-white text-opacity-60 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque.</p>
                    <p className="mt-4 text-white">taithedev2003@gmail.com</p>
                    <p className="text-red-300 text-xl font-bold mt-2">(+84) 865370761</p>
                </div>
                <div className="lg:mx-auto mx-0">
                    <h1 className="text-lg text-white font-semibold mb-6">Company</h1>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">About</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Affiliate</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Careers & Culture</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Blog</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Press</p>

                </div>
                <div className="lg:mx-auto mx-0">
                    <h1 className="text-lg text-white font-semibold mb-6">About Us</h1>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Support Center</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Customer Support </p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">About us</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Copy right</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Popular Campaign</p>

                </div>
                <div className="lg:mx-auto mx-0">
                    <h1 className="text-lg text-white font-semibold mb-6">Infomation</h1>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Returen Policy</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Privacy Policy</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Terms & Conditions</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Site Map</p>
                    <p className="text-white text-opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed ">Store Hours</p>

                </div>

            </div>
            {/* copyright text */}
            <div className="w-4/5 mx-auto mt-4 text-[15px] text-white opacity-75">Copyright 2024 by Taithe Developer</div>
        </div>
    );
}

export default Footer;