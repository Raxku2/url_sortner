import { RiArrowsArrowRightLongFill } from "solid-icons/ri";
import { setUrl, url } from "../store/useUrlStore";
import { genaratorHandeler } from "../hooks/usegenHiik";
import { A } from '@solidjs/router'

function HomeMain() {
  return (
    <main class="flex-1 flex flex-col items-center justify-center">
      <section class="overflow-hidden  w-95 md:w-[70%] lg:w-[80%] flex flex-1 items-center justify-between ">

        <input type="text" placeholder="https://" class="h-15 flex-1 outline-0 px-2.5 focus:bg-[#1b2432] border border-[#403f4c] rounded-l-[10px]" value={url.url}
          onInput={e => setUrl({ url: e.target.value })} />

        <button class=" h-15 w-15 text-center flex items-center justify-center cursor-pointer border-l-[#403f4c] hover:bg-[#403f4c] border border-l-0 border-[#403f4c] rounded-r-[10px] "
          onClick={() => genaratorHandeler()}
        >
          <RiArrowsArrowRightLongFill class="text-white h-10" />
        </button>
      </section>
      <div class="text-gray-600">
        <A href="/privacy" class="m-2 hover:text-white">Privacy</A>
        <A href="/terms" class="m-2 hover:text-white">Terms & Condition</A>
      </div>
    </main>
  );
}
export default HomeMain;