"use client";

import { setTheme } from "@/lib/themes/theme-setter";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [lang, setLang] = useState("/bn/");
  useEffect(() => {
    if (localStorage) {
      setLang(
        (localStorage.getItem("lang") ? localStorage.getItem("lang") : "/bn/")!
      );
    }
  }, []);

  return (
    <>
      <div className="min-h-[40vh]">
        <div className="p-10 container section-padding flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
          {Links.map((item: any) => {
            const { id, text, link, color } = item;
            return (
              <Link
                key={id}
                href={`${lang}${link}`}
                className={`px-20 py-10 rounded-md font-bold text-xl mg:text-2xl ${color} text-white hover:opacity-[90%]`}
                onClick={() => {
                  setTheme(link, undefined, undefined);
                  if (localStorage) {
                    localStorage.setItem("theme", link);
                  }
                }}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <div className="container section-padding">
          Occaecat est ea esse officia cillum eiusmod voluptate ea proident sit.
          Incididunt nostrud pariatur veniam id veniam commodo est quis. Sit
          labore nulla dolor minim tempor et ad quis. Minim elit incididunt
          reprehenderit ullamco dolore velit occaecat tempor minim esse. Laborum
          tempor reprehenderit proident consequat nulla. Occaecat est ea esse
          officia cillum eiusmod voluptate ea proident sit. Incididunt nostrud
          pariatur veniam id veniam commodo est quis. Sit labore nulla dolor minim
          tempor et ad quis. Minim elit incididunt reprehenderit ullamco dolore
          velit occaecat tempor minim esse. Laborum tempor reprehenderit proident
          consequat nulla. Occaecat est ea esse officia cillum eiusmod voluptate
          ea proident sit. Incididunt nostrud pariatur veniam id veniam commodo
          est quis. Sit labore nulla dolor minim tempor et ad quis. Minim elit
          incididunt reprehenderit ullamco dolore velit occaecat tempor minim
          esse. Laborum tempor reprehenderit proident consequat nulla.
        </div>
      </div>

      <div className="container">
        <div className='flex justify-between'>
          {/* block1 left */}
          <div className="max-w-[50%] my-[6rem]">
            <div className="text-black leading-[4rem] heading text-[4rem] font-bold ">Reinventing the future of laundry and dry cleaning</div>
            <div className="subheading mt-5 font-bold text-[1.3rem]">
              Laundryheap delivers the quickest, easiest to use, and most reliable professional laundry and dry cleaning service that completely adjusts to your needs.
            </div>
            <div className="subheading2 mt-3 text-[1.2rem]">
              We collect, clean, and deliver your laundry to your doorstep. When and where you need us, we will be there. 98.7% of all standard laundry and dry cleaning is delivered the next day.
            </div>
          </div>

          {/* block1 right */}
          <div className="flex items-center">
            {/* photo */}
            <div className='flex justify-end'>
              <img className='w-[80%]' src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            </div>
          </div>
        </div>

        {/* block2 */}

        <div className="flex justify-around">
          <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
          <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
          <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
          <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
        </div>

        {/* block3 */}
        <div className="flex justify-between mt-10">
          {/* block3 left*/}
          <div className="flex items-center">

            <div className="max-w-[80%]">
              <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            </div>
          </div>

          {/* block3 right */}
          <div className="w-[45%] my-10">
            <div className="text-left text-[2rem] font-bold" >Who we are</div>
            <div className="subheading mt-5 font-bold text-[1.3rem] text-black">Founded in 2014 in London, Laundryheap is the next generation laundry & dry cleaning company. We offer professional laundry and dry cleaning delivered to your doorstep in as quick as 24 hours.</div>

            <div className="font-bold mt-10 text-[1rem]">We are available globally</div>
            <div className="mt-2 text-[1.14rem]">Since our beginnings in London, we have expanded globally to 12 countries. Our services are available in the following countries: Ireland, UAE, Bahrain, Qatar, Singapore, Kuwait, United Kingdom, Sweden, Netherlands, France, United States, and Denmark.</div>

            <div className="mt-2 font-bold text-blue-900">See All The Locations (this is a link)</div>

            <div className="mt-8 font-bold">We protect our environment </div>
            <div className="mt-1 text-[1.14rem]">Social and environmental sustainability is at the heart of what we do. We are building the largest fleet of electric delivery vehicles and are committed to reducing water, electricity consumption and the amount of packaging.</div>

            <div className="mt-2 text-[1.14rem]">You can read more at our <span>Sustainability page. (this is a link)</span> </div>
          </div>


        </div>


      </div>

    </>

  );
};


export default Home;


const Links = [
  {
    id: 0,
    text: "User",
    link: "user",
    color: "bg-user-600",
  },
  {
    id: 1,
    text: "Rider",
    link: "rider",
    color: "bg-rider-600",
  },
  {
    id: 2,
    text: "Shop",
    link: "shop",
    color: "bg-shop-600",
  },
  {
    id: 3,
    text: "Admin",
    link: "admin",
    color: "bg-admin-600",
  },
];
