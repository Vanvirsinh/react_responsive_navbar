import { useState, useEffect, useRef } from "react";
import DropDown from "./Dropdown";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuItem = ({ to, label, onClick }) => (
    <li className="hover:text-[#98ABEE] transition duration-300">
        <Link to={to} onClick={onClick}>{label}</Link>
    </li>
);

const MobileMenuItem = ({ to, label, onClick }) => (
    <li>
        <Link to={to} onClick={onClick} className="py-3 px-5 border-b border-[#272727] w-full inline-block hover:text-[#98ABEE] hover:bg-[#303030] transition duration-300">{label}</Link>
    </li>
);

function Navbar() {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const navbarRef = useRef(null);
    const [verticalMenubarHeight, setVerticalMenubarHeight] = useState('0px');

    useEffect(() => {
        setOpen(false);
    }, [openMenu]);

    useEffect(() => {
        const handleResize = () => {
            if (navbarRef.current) {
                const navbarHeight = navbarRef.current.offsetHeight;
                setVerticalMenubarHeight(`${window.innerHeight - navbarHeight}px`);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const style = {
        height: verticalMenubarHeight,
        transform: openMenu ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
    };

    return (
        <header>
            <div ref={navbarRef} className="bg-[#202020] text-white md:px-5 px-3 relative z-50">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className="md:py-4 py-3">
                        <div className="flex gap-x-3 items-center">
                            <img className="h-10" src="/logo.png" alt="Tech Sphere Logo" />
                            <h1 className="font-semibold text-xl">Tech Sphere</h1>
                        </div>
                    </div>
                    {/* MenuItem */}
                    <div className="flex-grow">
                        <div className="flex justify-end gap-x-5 xl:gap-x-10 items-center">
                            {/* Desktop Menu */}
                            <ul className="hidden lg:flex items-center gap-x-5 xl:gap-x-10">
                                <MenuItem to="/" label="Home" />
                                <MenuItem to="/about" label="About Us" />
                                <li className="py-6 flex items-center gap-x-2 cursor-pointer hover:text-[#98ABEE] transition duration-300" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                                    Services <span className={`transition duration-300 inline-block ${open ? "rotate-180" : "rotate-0"}`}><ExpandMoreIcon /></span>
                                    <DropDown setOpen={setOpen} open={open} />
                                </li>
                                <MenuItem to="/solutions" label="Solutions" />
                                <MenuItem to="/products" label="Products" />
                                <MenuItem to="/blog" label="Blog" />
                                <MenuItem to="/contact" label="Contact Us" />
                            </ul>
                            {/* Mobile Menu Toggle */}
                            <div className="block lg:hidden">
                                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                                    {openMenu ? <CloseIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />}
                                </IconButton>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        <ul style={style} className="w-full transition-all duration-500 overflow-auto border-t-2 px-0 border-[#303030] absolute top-[100%] left-0 bg-[#202020] flex flex-col lg:hidden">
                            <MobileMenuItem to="/" label="Home" onClick={() => setOpenMenu(false)} />
                            <MobileMenuItem to="/about" label="About Us" onClick={() => setOpenMenu(false)} />
                            <li>
                                <span className={`${open ? "bg-[#272727]" : ""} cursor-pointer hover:text-[#98ABEE] transition-all duration-300 py-3 px-5 border-b border-[#272727] flex items-center justify-between hover:bg-[#303030]`} onClick={() => setOpen(!open)}>
                                    Services
                                    <span className={`transition duration-500 inline-block ${open ? "rotate-180" : "rotate-0"}`}><ExpandMoreIcon /></span>
                                </span>
                                <DropDown open={open} setOpenMenu={setOpenMenu} />
                            </li>
                            <MobileMenuItem to="/solutions" label="Solutions" onClick={() => setOpenMenu(false)} />
                            <MobileMenuItem to="/products" label="Products" onClick={() => setOpenMenu(false)} />
                            <MobileMenuItem to="/blog" label="Blog" onClick={() => setOpenMenu(false)} />
                            <MobileMenuItem to="/contact" label="Contact Us" onClick={() => setOpenMenu(false)} />
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
