"use client";
import { IconChevronDown, IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";

const Faqs = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-10 my-12">
      <div className="flex flex-col p-10 max-w-[50%]">
        <span className="uppercase bg-[#a6895a] text-white px-4 rounded-4xl py-2 cursor-pointer w-fit font-semibold ">
          Frequently asked questions
        </span>

        <h1 className="text-6xl font-clash capitalize pt-4 text-black">
          Common Questions About Imperial Holdings
        </h1>
      </div>
    </section>
  );
};

export default Faqs;

const data = [
  {
    question: "What amenities are included in the Masaki development?",
    answer:
      "Each apartment includes a private swimming pool, rooftop wellness area, gym, sauna, kids' play zone, and 24/7 security, among other premium features.",
  },
  {
    question: "Are the apartments furnished?",
    answer:
      "The apartments are semi-furnished and come equipped with high-end appliances for a convenient, move-in-ready experience.",
  },
  {
    question: "Who is the target buyer for Imperial Holdings properties?",
    answer:
      "Our residences are ideal for professionals, expatriates, diaspora investors, and families seeking premium, secure, and modern living in Dar es Salaam.",
  },
  {
    question: "How can I get more information or schedule a visit?",
    answer:
      "You can contact us via email at info@irh.co.tz, call us at +255 780 777 777, or message us directly through our website’s WhatsApp integration.",
  },
  {
    question: "What does Imperial Holdings specialize in?",
    answer:
      "Imperial Holdings develops luxury residential apartments in prime locations like Masaki, Dar es Salaam.",
  },
  {
    question: "What makes your apartments unique?",
    answer:
      "Each apartment includes a private swimming pool, rooftop access, semi-furnished interiors, and premium lifestyle features.",
  },
];
