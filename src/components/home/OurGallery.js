/* eslint-disable @next/next/no-img-element */
"use client";
import { useMemo, useState } from "react";
const slides = [
  { src: "/slider/1.webp", label: "Kids Play Area" },
  { src: "/slider/2.webp", label: "Bathroom Area" },
  { src: "/slider/3.webp", label: "Lounge Area" },
  { src: "/slider/4.webp", label: "Bedroom with Balcony View" },
  { src: "/slider/5.webp", label: "Bathroom Closeup View" },
  { src: "/slider/6.webp", label: "Lounge Area View" },
  { src: "/slider/7.webp", label: "Dining Area" },
  { src: "/slider/8.webp", label: "Kids Play" },
  { src: "/slider/9.webp", label: "Luxury Bedroom" },
];

const VISIBLE = 5; // CHANGED: show 5 at a time

const OurGallery = () => {
  // CHANGED: left-most visible index
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, slides.length - VISIBLE);
  const progress = useMemo(
    () => (maxIndex === 0 ? 1 : index / maxIndex),
    [index, maxIndex]
  );

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // CHANGED: move the track by 20% per step (because 5 visible => 100/5)
  const translatePct = -(index * (100 / VISIBLE));

  return (
    <section className="mx-10 my-12">
      <div className="rounded-2xl bg-[#efebe2] p-6 md:p-10">
        <span className="uppercase bg-[#a6895a] text-white px-4 rounded-4xl py-2 w-fit">
          Our Gallery
        </span>

        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:flex-row md:items-end md:justify-between">
          <h1 className="text-5xl md:text-6xl font-clash capitalize max-w-[40%] text-black leading-[1.05]">
            Discover homes designed to inspire
          </h1>
          <p className="font-clash max-w-[50%] text-[#666]">
            Experience the essence of luxury living through curated visuals of
            our elegant spaces, premium finishes, and signature amenities.
          </p>
        </div>

        {/* CHANGED: Slider */}
        <div className="mt-8 md:mt-10 mb-10">
          {/* viewport */}
          <div className="relative overflow-hidden">
            {/* track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translatePct}%)` }}
            >
              {slides.map((s, idx) => (
                <figure
                  key={idx}
                  // CHANGED: 5 across with small gaps -> each item ~20% width minus gap
                  className="mx-2 shrink-0 basis-[calc(20%-0.90rem)]"
                >
                  <div className=" overflow-hidden rounded-2xl">
                    {/* using <img> to keep it simple for learning */}
                    <img
                      src={s.src}
                      alt={s.label}
                      className="h-[340px] w-[260px] object-cover"
                      draggable={false}
                    />
                  </div>
                  <figcaption className="mt-2 text-sm md:text-base font-clash text-neutral-800">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* CHANGED: arrows bottom-right, disabled at bounds */}
          </div>

          {/* CHANGED: progress line */}
          <div className="mt-6 flex items-center gap-4">
            {/* progress line */}
            <div className="h-[4px] w-full rounded-full bg-neutral-300">
              <div
                className="h-[4px] rounded-full bg-neutral-700 transition-all duration-300"
                style={{ width: `${Math.max(6, progress * 100)}%` }}
              />
            </div>
            {/* buttons block */}
            <div className="flex items-center gap-2">
              {/* Prev */}
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
                className="
                    inline-flex h-8 w-8 items-center justify-center rounded-full
                    border border-neutral-300 text-neutral-600
                    bg-white/70 backdrop-blur
                    hover:bg-white hover:shadow-sm
                    disabled:opacity-40 disabled:hover:shadow-none
                  "
              >
                {/* CHANGED: SVG chevron-left */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Next"
                className="
                    inline-flex h-8 w-8 items-center justify-center rounded-full
                    border border-neutral-300 text-neutral-600
                    bg-white/70 backdrop-blur
                    hover:bg-white hover:shadow-sm
                    disabled:opacity-40 disabled:hover:shadow-none
                  "
              >
                {/* CHANGED: SVG chevron-right */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
