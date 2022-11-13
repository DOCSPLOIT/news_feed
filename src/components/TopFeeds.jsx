import Image1 from "../assets/image-retro-pcs.jpg";
import Image2 from "../assets/image-top-laptops.jpg";
import Image3 from "../assets/image-gaming-growth.jpg";

export default function TopFeeds() {
  const items = [
    {
      image: Image1,
      head: "Reviving Retro PCs ",
      scope: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: Image2,

      head: "Top 10 Laptops of 2022",
      scope: "Our best picks for various needs and budgets.",
    },
    {
      image: Image3,

      head: "The Growth of Gaming",
      scope: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className="flex flex-col mt-[4.5rem] md:flex-row  md:space-x-6">
      {items.map((t, i) => {
        return (
          <div
            key={i}
            className={`flex md:w-1/2  mt-10 md:mt-0 mr-2 space-x-5`}
          >
            <img className="h-[127px]" src={t.image} alt={i + ``} />
            <div className="">
              <h5 className="font-bold text-3xl text-[#c7c5cd]">0{i + 1}</h5>
              <p className="font-bold text-[#00001a] hover:text-[#f15e50] cursor-pointer text-xl mt-1 tracking-tight">
                {t.head}
              </p>
              <p className="mt-2 text-[#706b80] text-[15px] w-100">{t.scope}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
