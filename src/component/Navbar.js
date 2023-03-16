import React from "react";
import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'Utama'
        },
        {
            id: 2,
            link: 'Gallery'
        },
        {
            id: 3,
            link: 'Kontak'
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-pink-500 bg-pink-200 fixed z-10 top-0">
            <div>
                <h1 className="text-4xl font-signature ml-2">Kia</h1>
            </div>

            <ul className=" hidden md:flex">
                {links.map(({id, link}) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize hover:scale-110 duration-200"
                    >
                       <Link to={`/${link}`}>{link}</Link> 
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)}
            className="block cursor-pointer lg:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
                {nav && (
                    <>
                    
                    <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-200 bg-gradient-to-b from-pink-300 to-pink-300 text-white">
                    {links.map(({id, link}) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-2xl"
                            >
                                <Link to={`/${link}`}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                    </>
                )}
        </div>
    );
};

export default Navbar