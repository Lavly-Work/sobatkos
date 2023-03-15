import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/logo/logo-archico.png";
import { useRouter } from "next/router";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const headerList = ["Tentang Kami", "Portofolio", "Kontak"];
  return (
    <header className="flex flex-row items-center justify-between w-screen z-10 bg-white px-10 py-5 fixed">
      <div>
        <Image src={Logo} className="w-16 h-auto md:ml-5" alt="logo" />
      </div>
      <div
        className={`${
          dropdown
            ? "absolute top-20 left-0 h-screen w-screen p-10 flex flex-col gap-5 bg-white"
            : "hidden"
        } md:flex md:flex-row md:gap-10`}
      >
        {headerList.map((item, idx) => {
          return (
            <>
              <div
                className="cursor-pointer"
                key={idx}
                onClick={() => {
                  router.push(`#${headerList[idx]}`);
                  console.log(headerList[idx]);
                }}
              >
                {item}
              </div>
            </>
          );
        })}
        <button>Login</button>
        <button className="py-5 mx-16 mt-28 bg-red-700 rounded-xl md:hidden">
          Login
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
