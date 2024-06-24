import { Link } from "react-router-dom";

const DropDownLink = ({ to, onClick, label }) => (
    <li>
        <Link to={to} onClick={onClick} className="flex py-3 px-16 lg:px-5 hover:bg-[#373737] lg:hover:bg-[#303030]">
            {label}
        </Link>
    </li>
);

function WebDropDown({ open, setOpen, setOpenMenu }) {
    const dropdownLinks = [
        { to: "/services/web-development/front-end", label: "Front End Development" },
        { to: "/services/web-development/back-end", label: "Back End Development" },
        { to: "/services/web-development/full-stack", label: "Full Stack Development" },
    ];

    return (
        <>
            {/* Desktop DropDown */}
            <ul className={`${open ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-4 invisible"} lg:block hidden transition-all duration-300 absolute left-full top-0 border border-[#303030] bg-[#202020] w-56`}>
                {dropdownLinks.map(({ to, label }) => (
                    <DropDownLink key={to} to={to} label={label} onClick={() => setOpen(false)} />
                ))}
            </ul>

            {/* Mobile DropDown */}
            <ul className={`${open ? "max-h-[500px]" : "max-h-0"} lg:hidden flex flex-col w-full overflow-hidden transition-all duration-500 bg-[#303030]`}>
                {dropdownLinks.map(({ to, label }) => (
                    <DropDownLink key={to} to={to} label={label} onClick={() => setOpenMenu(false)} />
                ))}
            </ul>
        </>
    );
}

export default WebDropDown;
