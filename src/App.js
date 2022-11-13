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
            <h1 className="font-extrabold leading-[.95] tracking-tight text-[3.71rem] w-1/2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="w-1/2 pl-3">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.But
                is it really fulfilling its promise
              </p>
              <button className="bg-red-400 tracking-[0.2em] text-white font-bold w-[185px] h-11 py-2 px-1 mt-9">
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
              <h5 className="font-bold text-3xl">03</h5>
              <p className="font-bold text-xl mt-1 tracking-tight">
                The Growth of Gaming
              </p>
              <p className="mt-2  w-100">
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
