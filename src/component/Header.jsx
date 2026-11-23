import { RiLogosGoogleFill } from "solid-icons/ri";

function Header() {

    return (

        <header class="w-full bg-[#1b2432] h-20 flex items-center justify-between ">
            <img src="./Logo.svg" alt="Logo" class="h-12 m-2.5" />
            <button class="flex p-2 rounded-[10px] m-2.5 border border-[white] gap-4 items-center justify-between cursor-pointer">
                < RiLogosGoogleFill class="text-[30px] text-white" />
                <span class="text-6 font-bold ">Login</span>
            </button>

        </header>
    );
}
export default Header;