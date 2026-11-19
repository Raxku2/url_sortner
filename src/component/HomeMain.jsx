import { RiArrowsArrowRightLongFill } from "solid-icons/ri";

 function HomeMain() {

    return (
         <main class="flex-1 flex flex-col items-center justify-center">
        <section class="overflow-hidden border border-[#403f4c] rounded-[10px] w-95 md:w-[70%] lg:w-[80%] flex items-center justify-between ">
          <input type="text" placeholder="https://" class="h-15 flex-1 outline-0 px-2.5 focus:bg-[#1b2432]  " />
          <button class=" h-15 w-15 text-center flex items-center justify-center cursor-pointer border-l border-l-[#403f4c] hover:bg-[#403f4c] ">
            <RiArrowsArrowRightLongFill class="text-white h-10" />
          </button>
        </section>
      </main>
    );
}
    export default HomeMain;