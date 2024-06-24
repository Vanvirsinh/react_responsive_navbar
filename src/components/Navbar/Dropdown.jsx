import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WebDropDown from "./WebDevDD";
import CybersecurityDropDown from "./CybersecurityDD";
import ComputerIcon from '@mui/icons-material/Computer';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function DropDown({ open, setOpenMenu, setOpen }) {
    const [openWebDropdown, setOpenWebDropdown] = useState(false);
    const [openCybersecurityDropdown, setOpenCybersecurityDropdown] = useState(false);

    useEffect(() => {
        setOpenWebDropdown(false);
        setOpenCybersecurityDropdown(false);
    }, [open]);

    const handleWebDropDown = () => {
        setOpenWebDropdown(!openWebDropdown);
        setOpenCybersecurityDropdown(false);
    };

    const handleCybersecurityDropDown = () => {
        setOpenCybersecurityDropdown(!openCybersecurityDropdown);
        setOpenWebDropdown(false);
    };

    const dropdownItems = [
        { icon: ComputerIcon, label: "Web Development", dropdown: true, isOpen: openWebDropdown, handleClick: handleWebDropDown, children: <WebDropDown open={openWebDropdown} setOpen={setOpen} setOpenMenu={setOpenMenu} /> },
        { icon: AppSettingsAltIcon, label: "App Development", to: "/services/app-development" },
        { icon: CloudIcon, label: "Cloud Services", to: "/services/cloud-services" },
        { icon: SmartToyIcon, label: "AI & Machine Learning", to: "/services/ai-and-ml" },
        { icon: SecurityIcon, label: "Cybersecurity", dropdown: true, isOpen: openCybersecurityDropdown, handleClick: handleCybersecurityDropDown, children: <CybersecurityDropDown open={openCybersecurityDropdown} setOpen={setOpen} setOpenMenu={setOpenMenu} /> },
    ];

    return (
        <>
            {/* Desktop DropDown */}
            <ul className={`${open ? "opacity-100 visible lg:block hidden" : "opacity-0 invisible hidden"} animate-slideInOut transition-all duration-300 absolute top-[99%] w-60 bg-[#202020] text-white`}>
                {dropdownItems.map(({ icon: Icon, label, to, dropdown, isOpen, handleClick, children }) => (
                    <li key={label}>
                        {dropdown ? (
                            <span className="relative flex justify-between items-center py-3 px-5 hover:bg-[#303030]" onMouseEnter={handleClick} onMouseLeave={handleClick}>
                                <span className="flex gap-x-3 items-center">
                                    <Icon sx={{ fontSize: 20 }} /> {label}
                                </span>
                                <span className={`transition duration-300 inline-block ${isOpen ? "-rotate-90" : "rotate-0"}`}><ExpandMoreIcon /></span>
                                {children}
                            </span>
                        ) : (
                            <Link to={to} onClick={() => setOpen(false)} className="flex gap-x-3 items-center py-3 px-5 hover:bg-[#303030]">
                                <Icon sx={{ fontSize: 20 }} /> {label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile DropDown */}
            <ul className={`${open ? "max-h-[1000px]" : "max-h-0"} lg:hidden relative flex overflow-hidden transition-all duration-500 bg-[#272727] w-full flex-col text-white`}>
                {dropdownItems.map(({ icon: Icon, label, to, dropdown, isOpen, handleClick, children }) => (
                    <li key={label}>
                        {dropdown ? (
                            <>
                                <span className={`${isOpen ? "bg-[#303030] hover:bg-[#373737]" : ""} hover:bg-[#303030] cursor-pointer flex justify-between py-3 px-8`} onClick={handleClick}>
                                    <span className="flex gap-x-3 items-center">
                                        <Icon sx={{ fontSize: 20 }} /> {label}
                                    </span>
                                    <span className={`transition duration-500 inline-block ${isOpen ? "-rotate-45" : "rotate-0"}`}><AddIcon sx={{ fontSize: 20 }} /></span>
                                </span>
                                {children}
                            </>
                        ) : (
                            <Link to={to} onClick={() => setOpenMenu(false)} className="flex gap-x-3 items-center py-3 px-8 hover:bg-[#303030]">
                                <Icon sx={{ fontSize: 20 }} /> {label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default DropDown;
