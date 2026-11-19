import { RiSystemCheckFill, RiSystemErrorWarningFill } from "solid-icons/ri";

 function Concent() {

    return (
        <main class="flex-1 flex items-center justify-center ">
        <div class="w-[90%] flex items-center justify-between border border-amber-400 border-l-8 rounded-[10px] ">

          <RiSystemErrorWarningFill class="text-[200px] text-amber-400" />


          <p class="text-wrap text-4xl m-2">
            This <span class="font-bold">
              {"https://urlsortner/123"}
            </span>
            rediirects to
            <span class="font-bold">
              {"www.youtube.com"}
              site
            </span>
          </p>

          <button class="m-2.5 border border-[#403f4c] rounded-[10px] p-2 flex text-nowrap items-center justify-between cursor-pointer   ">
            <span>I agree</span>
            <RiSystemCheckFill class="p-2 text-[40px] "/>
          </button>
        </div>

      </main>
    );
}
    export default Concent;