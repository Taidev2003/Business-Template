// ResponsiveNav.js
'use client'
import React, { useState } from "react";
// import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
    // const [showNav, setShowNav] = useState(false);

    // const showNavHandler = () => setShowNav(true);
    // const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            {/* <MobileNav nav={showNav} closeNav={closeNavHandler} /> */}
            {/* openNav={showNavHandler} */}
            <Nav />
        </div>
    );
};

export default ResponsiveNav;
