import "./App.css";
import Navbar from "./components/Navbar";
import Web3Image from "./assets/image-web-3-desktop.jpg";
import Web3ImageMob from "./assets/image-web-3-mobile.jpg";
import NewItems from "./components/NewItems";
import TopFeeds from "./components/TopFeeds";
import React from "react";

export const ScreenContext = React.createContext({ size: 0 });

function App() {
  const [size, setSize] = React.useState(window.innerWidth);
  React.useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      setSize(window.innerWidth);
    });
  });

  return (
    <ScreenContext.Provider value={{ size }}>
      <div className="">
        <Navbar />
        <main className="flex flex-col sm:flex-col md:flex-row md:w-4/5 m-auto md:space-x-5 px-5">
          <div className="md:w-8/12 pr-2 ">
            <img
              src={size > 375 ? Web3Image : Web3ImageMob}
              className=""
              alt="web-3"
            />
            <div className="flex flex-col md:flex-row mt-8">
              <h1 className="font-extrabold text-[#00001a]  leading-[1] md:leading-[.95] tracking-tight text-[3rem] md:text-[3.71rem] md:w-1/2">
                The Bright Future of Web 3.0?
              </h1>
              <div className="md:w-1/2 md:pl-3 mt-5 md:mt-0">
                <p className="text-[15px] text-[#5d5f79] px-1 inline-block">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-[#f15e50] text-[15px] hover:bg-[#00001a] tracking-[0.3em] text-white font-bold w-[185px] h-11 py-2 px-1 mt-9">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grow  mt-16 md:mt-0 md:w-1/4 ">
            <NewItems />
          </div>
        </main>
        <footer className="md:w-4/5 m-auto px-5">
          <TopFeeds />
        </footer>
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
