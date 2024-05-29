import { useState } from "react";
import DropDown from "./Dropdown";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <div className="bg-[#202020] text-white px-5 relative">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="py-4">
                            <div className="flex gap-x-3 items-center">
                                <img className="h-10" src="/Screenshot_from_2024-05-22_11-56-26-removebg-preview.png" alt="" />
                                <h1 className="font-semibold text-xl">Tech Sphere</h1>
                            </div>
                        </div>
                        {/* MenuItem & Searchbar */}
                        <div className="flex-grow">
                            <div className="flex justify-end gap-x-10 items-center">
                                <div className="">
                                    <input type="text" placeholder="Search here..." className="border-0 border-white px-3 py-2 rounded bg-[#303030] outline-none text-white" />
                                </div>
                                <div>
                                    <ul className="flex items-center gap-x-10">
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="about">About Us</Link>
                                        </li>
                                        <li className="py-6 flex items-center gap-x-2 cursor-pointer hover:text-[#98ABEE] transition duration-300" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                                            Services <span className={`transition duration-300 inline-block ${open ? "rotate-180" : "rotate-0"}`}><ExpandMoreIcon /></span>
                                            <DropDown open={open} />
                                        </li>
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="solutions">Solutions</Link>
                                        </li>
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="products">Products</Link>
                                        </li>
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="blog">Blog</Link>
                                        </li>
                                        <li className="hover:text-[#98ABEE] transition duration-300">
                                            <Link to="contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;