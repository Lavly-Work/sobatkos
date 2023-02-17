import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/download.jpg";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between w-screen z-10 bg-white px-10 py-5 fixed">
      <div>
        <Image
          src={Logo}
          className="w-10 h-auto md:ml-5 rounded-full"
          alt="logo"
        />
      </div>
      <div
        className={`${
          dropdown
            ? "absolute top-20 left-0 h-screen w-screen p-10 flex flex-col gap-5 bg-white"
            : "hidden"
        } md:flex md:flex-row md:gap-10`}
      >
        <div>Tentang Kami</div>
        <div>Manfaat</div>
        <div>Tanya Jawab</div>
        <button className="py-5 mx-16 mt-28 bg-red-700 rounded-xl md:hidden">
          Daftar Sekarang
        </button>
      </div>
      <div
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className="flex flex-col gap-1 md:hidden"
      >
        <div className="bg-black w-7 h-1"></div>
        <div className="bg-black w-7 h-1"></div>
        <div className="bg-black w-7 h-1"></div>
      </div>
    </header>
  );
}
