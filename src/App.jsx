import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import StartingAnimation from "./component/StartingAnimation";
import { ppt } from "../src/Data/ppts"
import SlideView from "./component/SlideView";

function App() {

  const location = useLocation();

  return (
    <div className=" bg-black  w-full min-h-screen relative">

      <Routes>
        <Route path="/" element={<StartingAnimation />} />
        <Route path="/home" element={<Home />} />
      </Routes>


      {
        location.pathname === "/home" &&
        <div id='ppt' className=' mt-96 flex flex-col gap-y-10 w-11/12 mx-auto  '>
          {
            ppt?.map((ppts) => (
              <SlideView key={ppts.id} img={ppts.img} />
            ))
          }
        </div>
      }


    </div>
  );
}

export default App;
