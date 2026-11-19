
import { RiSystemCheckFill, RiSystemErrorWarningFill } from "solid-icons/ri";
import Header from "./component/Header";
import HomeMain from "./component/HomeMain";


function App(props) {

  return (
    <div class="bg-[#121420] h-full text-white flex flex-col ">
      <Header />
      {/* <HomeMain /> */}

      {props.children}

    </div>
  );
}
export default App;