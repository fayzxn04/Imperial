import Faqs from "../common/Faqs";
import Cards from "./Cards";
import OurGallery from "./OurGallery";
import OurProject from "./OurProject";
import WhoWeAre from "./WhoWeAre";

/* eslint-disable @next/next/no-img-element */
function Home() {
  return (
    <>
      <main className="relative min-h-screen mx-10 my-5 rounded-2xl overflow-hidden ">
        <div className="relative z-10 flex items-center min-h-screen px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-clash text-white leading-tight">
              Elevated Living with <br /> Unmatched Amenities
            </h1>

            <button className="cursor-pointer mt-6 px-1.5 py-1 gap-2 via-transparent to-transparent text-white font-medium rounded-full flex items-center border border-[#a6895a] bg-[#FFFFFF2E] backdrop-blur-9 w-fit h-fit text-nowrap font-clash">
              VIEW PROJECTS
              <img src="/icons/link.svg" alt="svg" />
            </button>
          </div>

          <div className="absolute right-6 max-w-[500px] text-white text-sm bottom-56">
            <h4 className="uppercase tracking-widest font-bold text-[16px] font-clash">
              Expert Advice • Maximum Value • Luxury Oriented
            </h4>
            <p className="mt-2 text-gray-200 text-[14px] text-end font-clash leading-relaxed text-2xl">
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
          className="absolute object-cover inset-0 h-full w-full "
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(291deg, rgba(0, 0, 0, 0.60) 3.79%, rgba(0, 0, 0, 0.20) 33.62%, rgba(0, 0, 0, 0.10) 100%)",
          }}
        />
      </main>
      <Cards />
      <WhoWeAre />
      <OurProject />
      <OurGallery />
      <Faqs />
    </>
  );
}

export default Home;
