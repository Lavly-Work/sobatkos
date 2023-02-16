import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <section className="flex flex-row px-20 py-10">
        <section className="w-4/12">Sobat Kos</section>
        <section className="w-2/12 flex flex-col gap-7">
          <div className="text-xl">Sobat Kos</div>
          <div className="flex flex-col gap-4">
            <div>Tentang Kami</div>
            <div>Manfaat</div>
            <div>Tanya Jawab</div>
          </div>
        </section>
        <section className="w-3/12 flex flex-col gap-7">
          <div className="text-xl">Hubungi Kami</div>
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
        <section className="w-3/12 flex flex-col gap-7">
          <div className="text-xl">Sosial Media</div>
          <div className="flex flex-row gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-7 h-7"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </div>
            <div>Sobat Kos</div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </section>
      <section className="flex justify-end px-20 py-10">
        © 2023 Sobatkos.com. All rights reserved
      </section>
    </footer>
  );
}
