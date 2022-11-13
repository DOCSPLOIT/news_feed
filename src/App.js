import "./App.css";
import Navbar from "./components/Navbar";
import Web3Image from "./assets/image-web-3-desktop.jpg";
import NewItems from "./components/NewItems";
import TopFeeds from "./components/TopFeeds";
import Image3 from "./assets/image-gaming-growth.jpg";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="flex w-4/5 m-auto space-x-5 px-5">
        <div className="w-8/12 pr-2 ">
          <img src={Web3Image} className="" alt="web-3" />
          <div className="flex mt-8">
            <h1 className="font-extrabold text-[#00001a] leading-[.95] tracking-tight text-[3.71rem] w-1/2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="w-1/2 pl-3">
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
          <TopFeeds />
        </div>
        <div className="grow w-1/4">
          <NewItems />
          <div className={`flex  mr-2 mt-[4.5rem] space-x-5`}>
            <img className="h-[127px]" src={Image3} alt={"growth"} />
            <div className="">
              <h5 className="font-bold text-[#c7c5cd] text-3xl">03</h5>
              <p className="font-bold text-[#00001a] hover:text-[#f15e50] cursor-pointer text-xl mt-1 tracking-tight">
                The Growth of Gaming
              </p>
              <p className="mt-2 text-[#706b80] text-[15px] w-100">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
