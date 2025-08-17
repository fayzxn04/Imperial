/* eslint-disable @next/next/no-img-element */
function Home() {
  <>
    return (
    <main className="relative min-h-screen mx-10 my-5 rounded-md">
      <div className="relative z-10 flex justify-start items-center min-h-screen px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-clash text-white leading-tight">
            Elevated Living with <br /> Unmatched Amenities
          </h1>

          <button className="cursor-pointer mt-6 px-1.5 py-1 gap-2 via-transparent to-transparent text-white font-medium rounded-full flex items-center rounded-40 border border-[#a6895a] bg-[#FFFFFF2E] backdrop-blur-9 w-fit h-fit text-nowrap">
            VIEW PROJECTS
            <img
              src="/icons/link.svg"
              alt="svg"
              className="group-hover:-rotate-45 transition-transform duration-200"
            />
          </button>
        </div>

        <div className="absolute bottom-55 right-6 max-w-[500px] text-white text-sm">
          <h4 className="uppercase tracking-widest font-semibold text-[16px]">
            Expert Advice • Maximum Value • Luxury Oriented
          </h4>
          <p className="mt-2 text-gray-200 text-[14px] text-end font-clash leading-relaxed">
            Imperial Holdings crafts exceptional residences in Dar es
            Salaam&apos;s most prestigious neighborhoods — combining refined
            design, top-tier amenities, and bespoke service to ensure your
            investment exceeds expectations.
          </p>
        </div>
      </div>

      <img
        src="/banner/home.webp"
        alt="image"
        className="absolute object-cover top-0 left-0 "
      />
      <div
        className=" w-full h-full absolute inset-0 -z-10 rounded-2xl "
        style={{
          background:
            "linear-gradient(291deg, rgba(0, 0, 0, 0.60) 3.79%, rgba(0, 0, 0, 0.20) 33.62%, rgba(0, 0, 0, 0.10) 100%)",
        }}
      />
    </main>
    );
  </>;
}

export default Home;
