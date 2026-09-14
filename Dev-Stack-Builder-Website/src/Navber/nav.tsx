import Logo from "../assets/logo-text.png";
import { Menu } from "lucide-react";

const nav = () => {

    return (
        <div className="sticky top-0 z-50 flex 
              lg:flex items-center
             justify-between border-2
              border-amber-50 bg-white">
                <button className="block xl:hidden">
                <Menu size={28} />
                </button>
            
                <button className="flex items-center justify-center h-5 w-30">
            <img src={Logo} alt="" />
                </button>
            

            <ul className="hidden lg:flex items-center gap-6">
                <li className="text-red-500 cursor-pointer">Home</li>
                <li className="cursor-pointer">Technologis</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul><div className="flex gap-3">
            <button className=" px-2 py-1 rounded-full  text-black bg-white text-sm font-semibold
             cursor-pointer">Sign In</button>
            <button className="px-3 py-1 rounded-full bg-pink-500 text-sm font-semibold
                 text-white hover:bg-pink-400 cursor-pointer">Sign Up</button>
                    
            </div>

        </div>
    );
};

export default nav;