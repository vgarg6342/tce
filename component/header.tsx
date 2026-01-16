"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
export default function Header() {
    const [open, setOpen] = useState(false);

    function getMenuClass() {

        let menuClass = [];
        if (open) {
            menuClass = [
                "flex",
                "absolute",
                "top-[60px]",
                "left-0",
                "w-full",
                "p-4",
                'bg-white',
                "flex-col",
                "md:flex-row"
            ]
        } else {
            menuClass.push("hidden sm:flex")
        }
        return menuClass.join(" ");
    }
    return (

        <nav className=" sticky  top-0 w-full z-50 bg-white/70 p-4 border-b-2 backdrop-blur-xl  border-indigo-500 sm:p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <Image src={Logo} height= {60} alt="logo" className=" object-cover align-middle" />
                  
                <div className={getMenuClass()}>
                    
                    <Link href="/" className="mx-2 text-lg text-slate-600  hover:text-gray-400">
                        Home
                    </Link>
                    {/* <Link href="/about" className="mx-2 text-lg text-slate-600 hover:text-gray-400">
                        About
                    </Link> */}
                    <Link href="/pricing" className="mx-2 text-lg text-slate-600 hover:text-gray-400">
                        Pricing
                    </Link>
                    {/* <Link href="/blogs" className="mx-2 text-lg  text-slate-600 hover:text-gray-400">
                        blogs
                    </Link> */}
                </div>
                
                <button className="sm:hidden" onClick={() => setOpen(!open)}>
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </nav>

    );
}