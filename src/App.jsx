import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import StartingAnimation from "./component/StartingAnimation";
import { ppt } from "../src/Data/ppts"
import { services } from "./Data/services";
import SlideView from "./component/SlideView";
import StarField from "./component/StartField";
import Navbar from "./component/Navbar";
import Card from "./component/Card";

function App() {

  const location = useLocation();

  return (
    <div className=" bg-black  w-full min-h-screen relative">

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<StartingAnimation />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/star" element={<StarField />} /> */}
      </Routes>


      {
        location.pathname === "/home" &&
        <div id='ppt' className='grid w-11/12 mx-auto mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {
            services?.map((ppts) => (
              <Card key={ppts.id} data={ppts} />
            ))
          }
        </div>
      }


    </div>
  );
}

export default App;
