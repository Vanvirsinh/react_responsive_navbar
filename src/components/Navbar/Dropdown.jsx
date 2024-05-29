import { Link } from "react-router-dom";
import { useState } from "react";
import WebDropDown from "./WebDevDD";
import CybersecurityDropDown from "./CybersecurityDD";
import ComputerIcon from '@mui/icons-material/Computer';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DropDown({ open }) {

    const [openWebDropdown, setOpenWebDropdown] = useState(false);
    const [openCybersecurityDropdown, setOpenCybersecurityDropdown] = useState(false);

    return (
        <>
            <ul className={`${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"} transition-all duration-300 absolute top-[99%] w-60 bg-[#202020] flex flex-col shadow text-white`}>
                <li className="relative flex justify-between py-3 px-5 hover:bg-[#303030]" onMouseEnter={() => setOpenWebDropdown(true)} onMouseLeave={() => setOpenWebDropdown(false)}>
                    <span className="flex gap-x-3 items-center ">
                        <ComputerIcon sx={{ fontSize: 20 }} /> Web Development
                    </span>
                    <span className={`transition duration-300 inline-block ${openWebDropdown ? "-rotate-90" : "rotate-0"}`}><ExpandMoreIcon /></span>
                    <WebDropDown open={openWebDropdown} />
                </li>
                <li>
                    <Link to="/app-development" className="flex gap-x-3 items-center py-3 px-5 hover:bg-[#303030]"><AppSettingsAltIcon sx={{ fontSize: 20 }} /> App Development</Link>
                </li>
                <li>
                    <Link to="/cloud-services" className="flex gap-x-3 items-center py-3 px-5 hover:bg-[#303030]"><CloudIcon sx={{ fontSize: 20 }} /> Cloud Services</Link>
                </li>
                <li>
                    <Link to="/ai-and-ml" className="flex gap-x-3 items-center py-3 px-5 hover:bg-[#303030]"><SmartToyIcon sx={{ fontSize: 20 }} /> AI & Machine Learning</Link>
                </li>
                <li className="relative flex justify-between py-3 px-5 hover:bg-[#303030]" onMouseEnter={() => setOpenCybersecurityDropdown(true)} onMouseLeave={() => setOpenCybersecurityDropdown(false)}>
                    <span className="flex gap-x-3 items-center ">
                        <SecurityIcon sx={{ fontSize: 20 }} /> Cybersecurity
                    </span>
                    <span className={`transition duration-300 inline-block ${openCybersecurityDropdown ? "-rotate-90" : "rotate-0"}`}><ExpandMoreIcon /></span>
                    <CybersecurityDropDown open={openCybersecurityDropdown} />
                </li>
            </ul>
        </>
    )
}

export default DropDown;