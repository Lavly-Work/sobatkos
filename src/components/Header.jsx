import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/download.jpg";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-screen z-10 bg-white px-10 py-5 fixed">
      <div>
        <Image
          src={Logo}
          className="w-10 h-auto ml-5 rounded-full"
          alt="logo"
        />
      </div>
      <div className="flex flex-row gap-10">
        <div className="">Tentang Kami</div>
        <div>Manfaat</div>
        <div>Tanya Jawab</div>
        <button className="hidden">Daftar Sekarang</button>
      </div>
    </header>
  );
}
