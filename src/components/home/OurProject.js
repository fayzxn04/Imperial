/* eslint-disable @next/next/no-img-element */
const OurProject = () => {
  return (
    <section className="mx-10 my-12 ">
      <div className="relative isolate rounded-2xl overflow-hidden">
        <div className=" relative z-30 flex flex-col p-10">
          <span className="uppercase bg-[#a6895a] text-white px-4 rounded-4xl py-2 cursor-pointer w-fit  ">
            Our project
          </span>
          <h1 className="text-6xl font-clash capitalize pt-4 max-w-[50%] text-white">
            Modern living with comfort & convenience
          </h1>
          <div className="flex justify-between items-center">
            <p className="font-clash max-w-[850px] text-[#c5bfbf]">
              Each apartment at Imperial Residence is designed for effortless
              living. The units come semi-furnished, and additional details
              about amenities will be shared soon.
            </p>
            <button className="cursor-pointer mt-6 px-1.5 py-1 gap-2 via-transparent to-transparent  font-medium rounded-full flex items-center border border-[#a6895a] bg-[#FFFFFF2E] backdrop-blur-9 w-fit h-fit text-nowrap font-clash text-white">
              VIEW PROJECT
              <img
                src="/icons/link.svg"
                alt="svg"
                className="group-hover:-rotate-45 transition-transform duration-200"
              />
            </button>
          </div>
          <div className="w-fit gap-2 md:gap-10 grid xl:grid-cols-7 grid-cols-4 py-11 pb-20 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-[81px] transition-all duration-300 hover:bg-[#a6895a] rounded items-center gap-2 text-white text-sm py-3 px-1.5 border border-white "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 text-center"
                />
                <span className="text-center leading-snug w-[95%] ">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <video
          playsInline
          loop
          autoPlay
          controls={false}
          muted
          className="absolute object-cover h-full w-full inset-0 z-0"
        >
          <source src="/videos/upanga.mp4" />
        </video>
        <div className="absolute z-10 bg-gradient-to-br from-black/60 via-black/30 to-transparent inset-0" />
        <img
          src="/images/upanga-building.webp"
          alt="Building"
          className="absolute z-20 bottom-0 right-0 w-full scale-105 object-contain pointer-events-none select-none"
        />
      </div>
    </section>
  );
};

export default OurProject;

const data = [
  {
    icon: "icons/project/pool.svg",
    title: "Swimming Pool",
  },
  {
    icon: "icons/project/gym.svg",
    title: "Rooftop Gym",
  },
  {
    icon: "icons/project/bar.svg",
    title: "Rooftop Bar",
  },
  {
    icon: "icons/project/kids.svg",
    title: "Indoor Kids Play Area",
  },
  {
    icon: "icons/project/security.svg",
    title: "Security System",
  },
  {
    icon: "icons/project/backup.svg",
    title: "Backup Generator",
  },
  {
    icon: "icons/project/parking.svg",
    title: "Basement Parking",
  },
  {
    icon: "icons/project/garden.svg",
    title: "Garden Area",
  },
  {
    icon: "icons/project/modern.svg",
    title: "Modern Elevator",
  },
  {
    icon: "icons/project/ocean.svg",
    title: "Ocean View",
  },
  {
    icon: "icons/project/court.svg",
    title: "Pickleball Court",
  },
  {
    icon: "icons/project/sauna.svg",
    title: "Private Sauna",
  },
  {
    icon: "icons/project/area.svg",
    title: "Reception Area",
  },
  {
    icon: "icons/project/semi.svg",
    title: "Semi-Furnished",
  },
];
