import { Link } from "react-router-dom";

function CybersecurityDropDown({ open }) {
    return (
        <>
            <ul className={`${open ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-4 invisible"} transition-all duration-300 absolute left-full top-0 border border-[#303030] bg-[#202020] w-56`}>
                <li>
                    <Link to="/threat-intelligence" className="flex py-3 px-5 hover:bg-[#303030]">Threat Intelligence</Link>
                </li>
                <li>
                    <Link to="/network-security" className="flex py-3 px-5 hover:bg-[#303030]">Network Security</Link>
                </li>
                <li>
                    <Link to="/compliance" className="flex py-3 px-5 hover:bg-[#303030]">Compliance</Link>
                </li>
                <li>
                    <Link to="/regulations" className="flex py-3 px-5 hover:bg-[#303030]">Regulations</Link>
                </li>
            </ul>
        </>
    )
}

export default CybersecurityDropDown;