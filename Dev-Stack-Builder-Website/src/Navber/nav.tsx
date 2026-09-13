import Logo from "../assets/logo-text.png";
import { Menu } from "lucide-react";

const nav = () => {

    return (
        <div className="sticky top-0 z-50 
              flex items-center
             justify-between border-2
              border-amber-50 bg-white">
                <button className="block xl:hidden">
                <Menu size={28} />
                </button>
            <img src={Logo} alt="" />
            <ul className="sm:hidden md:hidden xl:flex items-center gap-6">
                <li className="text-red-500 cursor-pointer">Home</li>
                <li className="cursor-pointer">Technologis</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul><div className="flex gap-3">
            <button className="rounded-full border-2 text-black
           bg-white px-6 py-3 font-semibold border-gray-50 hover-3d
           hover:bg-gray-50 cursor-pointer">Sing</button>
            <button className="rounded-full
                  bg-pink-500 px-6 py-3 font-semibold
                 text-white hover:bg-pink-400 cursor-pointer">Sing Up</button>
                    
            </div>

        </div>
    );
};

export default nav;