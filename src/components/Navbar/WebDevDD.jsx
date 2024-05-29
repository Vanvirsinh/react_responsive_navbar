import { Link } from "react-router-dom";

function WebDropDown({ open }) {
    return (
        <>
            <ul className={`${open ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-4 invisible"} transition-all duration-300 absolute left-full top-0 border border-[#303030] bg-[#202020] w-60`}>
                <li>
                    <Link to="/front-end" className="flex py-3 px-5 hover:bg-[#303030]">Front End Development</Link>
                </li>
                <li>
                    <Link to="/back-end" className="flex py-3 px-5 hover:bg-[#303030]">Back End Development</Link>
                </li>
                <li>
                    <Link to="/full-stack" className="flex py-3 px-5 hover:bg-[#303030]">Full Stack Development</Link>
                </li>
            </ul>
        </>
    )
}

export default WebDropDown;