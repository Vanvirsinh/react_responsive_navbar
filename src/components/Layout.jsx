import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <Navbar />
            <div className="
                bg-[url('/background-image-sm.jpeg')] 
                sm:bg-[url('/background-image-md.jpeg')]
                lg:bg-[url('/background-image-lg.jpeg')]
                bg-cover bg-center
                h-screen"
            >
                <div className="h-full w-full bg-white bg-opacity-20">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;
