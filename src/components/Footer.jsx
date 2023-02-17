import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  // const router = useRouter();
  return (
    <footer className="bg-indigo-900 text-white">
      <section className="flex flex-col items-center text-center md:items-start md:text-start md:flex-row md:px-20 py-10 gap-10 md:gap-0">
        <section className="md:w-3/12 lg:w-4/12">Sobat Kos</section>
        <section className="md:w-3/12 lg:w-2/12 flex flex-col md:gap-7">
          <div className="hidden text-xl md:flex">Sobat Kos</div>
          <div className="flex flex-row md:flex-col gap-2 md:gap-4">
            <div>Tentang Kami</div>
            <div className="md:hidden">|</div>
            <div>Manfaat</div>
            <div className="md:hidden">|</div>
            <div>Tanya Jawab</div>
          </div>
        </section>
        <section className="md:w-4/12 lg:w-3/12 flex flex-col gap-7">
          <div className="hidden md:flex text-xl">Hubungi Kami</div>
          <div className="flex flex-col gap-4">
            <div>
              <div>Jabodetabek dan Bandung</div>
              <div>+6282246817775 - Tania</div>
            </div>
            <div>
              <div>Jabodetabek dan Bandung</div>
              <div>+6282246817775 - Tania</div>
            </div>
          </div>
        </section>
        <section className="md:w-2/12 lg:w-3/12 flex flex-col gap-7">
          <div className="hidden text-xl md:flex">Sosial Media</div>
          <div className="flex flex-row gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </div>
            <div
              className="cursor-pointer "
              onClick={() => {
                window.open("https://www.instagram.com/sobatkos.id/", "_blank");
              }}
            >
              sobatkos.id
            </div>
          </div>
        </section>
      </section>
      <section className="flex justify-center md:justify-end md:px-20 pb-10 md:py-10">
        © 2023 Sobatkos.com. All rights reserved
      </section>
    </footer>
  );
}
