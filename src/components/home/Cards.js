/* eslint-disable @next/next/no-img-element */
const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4 mx-15 ">
      {data.map((item, index) => (
        <Card
          key={index}
          count={item.count}
          title={item.title}
          hoveredImg={item.hoveredImg}
          withPlus={item.withPlus}
        />
      ))}
    </div>
  );
};

const Card = ({ count, title, hoveredImg, withPlus }) => {
  return (
    <div className="group relative transition-all duration-300 border px-5 pt-3 md:pt-5 max-md:py-5 md:h-[200px] border-[#c5bfbf] rounded-xl w-full mt-5 hover:bg-[#a6895a]">
      <img
        src={hoveredImg}
        alt={title}
        className="absolute right-0 bottom-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <h3 className="text-8xl group-hover:text-white font-clash">
        {count}
        {withPlus ? "+" : ""}
      </h3>
      <p className="text-[#666666] group-hover:text-white font-clash">
        {title}
      </p>
    </div>
  );
};

const data = [
  {
    count: 1,
    title: "Upcoming Projects",
    hoveredImg: "/images/projects.png",
  },
  {
    count: 100,
    title: "Jobs Created",
    withPlus: true,
    hoveredImg: "/images/jobs.png",
  },
  {
    count: 1,
    title: "Located in Masaki opposite Slipway",
    hoveredImg: "/images/location.png",
  },
];

export default Cards;
