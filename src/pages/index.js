import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import Logo from "@/assets/logo/logo-archico.png";
import Architect from "src/assets/arsitek/e-1.jpg";
import Interior from "src/assets/interior/i-19.jpg";
import Construction from "src/assets/arsitek/e-2.jpg";
import { useState } from "react";
import Footer from "@/components/Footer";
import Slider from "src/components/Slider";
import SliderInterior from "src/components/SliderInterior";
import SliderConstruction from "src/components/SliderConstruction";
import styles from "src/styles/Slider.module.css";

export default function Home() {
  const [section, setSection] = useState(1);
  const [quote, setQuote] = useState(1);
  const [shown1, setShown1] = useState(false);
  const [shown2, setShown2] = useState(false);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 bg-white">
        <section className="flex flex-col-reverse lg:flex-row w-screen bg-blue-200 md:mb-10">
          <article className="flex flex-col items-center w-screen p-5 lg:p-20 lg:items-start lg:w-1/2 text-white gap-3">
            <Image src={Logo} className="md:h-20 md:w-auto" alt="logo2" />
            <div className="text-center lg:text-start font-extrabold text-5xl ">
              Archico, Sahabat Arsitek dan Konstruksimu
            </div>
            <div className="text-center lg:text-start text-xl">
              Semua yang anda butuhkan jasa desain asitektur , desain interior,
              konstruksi interior dan konstruksi sipil bisa anda selesaikan
              melalui Archico. Kami mengutamakan kepercayaan dan kepuasan
              pelanggan di atas segalanya.
            </div>
            <button className="bg-orange-600 p-5 rounded-md text-lg">
              Pesan Sekarang
            </button>
          </article>
          <article className="items-start lg:w-1/2">
            <Slider />
          </article>
        </section>
        <section id="Tentang Kami" className="lg:p-20 flex flex-col gap-20 ">
          <article className="text-center text-5xl lg:px-20">
            Archico menyediakan 3 jasa utama yaitu :
          </article>
          <article className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col items-center gap-5">
              <Image
                src={Architect}
                alt="content-image-3"
                className={`${styles.image}`}
              />
              <div className="text-center font-extrabold text-4xl">
                Arsitektur
              </div>
              <div className="text-center font-bold">
                Menyediakan jasa desain, RAB, 3D render dan gambar kerja
                arsitektur bangunan
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image
                src={Interior}
                alt="content-image-3"
                className={`${styles.image}`}
              />
              <div className="text-center font-extrabold text-4xl">
                Interior
              </div>
              <div className="text-center font-bold">
                Menyediakan jasa desain, RAB, 3D render, gambar kerja dan
                pembuatan interior.
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <Image
                src={Construction}
                alt="content-image-3"
                className={`${styles.image}`}
              />
              <div className="text-center font-extrabold text-4xl">
                Konstruksi
              </div>
              <div className="text-center font-bold">
                Menyediakan jasa pembangunan rumah, gedung, taman, bangunan
                publik dan jalan.
              </div>
            </div>
          </article>
        </section>
        <section
          id="Portofolio"
          className="w-screen flex flex-col-reverse items-center lg:items-start lg:flex-row lg:p-10"
        >
          <article className="lg:w-1/2 flex flex-col p-5 lg:p-10 gap-5">
            <div className="text-5xl font-extrabold">
              Archico berpengalaman lebih dari 1 tahun dengan portofolio projek
              kami
            </div>
            <SliderInterior />
          </article>
          <article className="w-1/2 flex flex-col p-10">
            <div>
              <SliderConstruction className="w-full" />
              <Image src={Logo} className="w-full" alt="content-image-2" />
            </div>
            <div className="flex mt-5 justify-center">
              <Image src={Logo} className="w-1/2" alt="content-image-2" />
            </div>
          </article>
        </section>
        {/* <section
          id="Tentang Kami"
          className="flex flex-col relative lg:flex-row bg-pink-900 p-10 pb-28 text-white"
        >
          <article className="lg:w-1/2 lg:p-10 flex flex-col gap-10">
            <div className="m-auto lg:m-0">
              <Image src={Logo} className="h-10" alt="content-logo-2" />
            </div>
            <div className="text-center lg:text-start pb-5 lg:pb-0 text-3xl lg:text-5xl font-extrabold">
              Solusi mendapatkan pendapatan baru
            </div>
            <div className="flex flex-row absolute bottom-5 right-1/4 lg:bottom-0 lg:right-0 lg:relative items-center gap-7">
              <button
                className="text-black text-3xl bg-white w-12 h-12 rounded-full"
                onClick={() => {
                  section === 1 ? setSection(3) : setSection(section - 1);
                }}
              >
                &lt;
              </button>
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`${
                    section === 1 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
                <div
                  className={`${
                    section === 2 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
                <div
                  className={`${
                    section === 3 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
              </div>
              <button
                className="text-black text-3xl bg-white w-12 h-12 rounded-full"
                onClick={() => {
                  section === 3 ? setSection(1) : setSection(section + 1);
                }}
              >
                &gt;
              </button>
            </div>
          </article>
          <article
            className={`lg:w-1/2 lg:p-10 ${
              section === 1 ? "flex" : "hidden"
            } flex-col gap-5 lg:gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa 1</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
          </article>
          <article
            className={`lg:w-1/2 lg:p-10 ${
              section === 2 ? "flex" : "hidden"
            } flex-col  gap-5 lg:gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa 2</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
          </article>
          <article
            className={`lg:w-1/2 lg:p-10 ${
              section === 3 ? "flex" : "hidden"
            } flex-col gap-5 lg:gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa 3</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">Kamar Rasa</p>
              <p>
                Gerai makanan online dengan berbagai brand kuliner dalam 1
                outlet
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col relative lg:flex-row bg-purple-900 p-10 text-white">
          <article className="lg:w-1/2 lg:p-10 flex flex-col gap-10">
            <div className="text-5xl font-extrabold">Kata pemilik kost</div>
            <div className="flex flex-row absolute bottom-3 pb-1 right-1/4 lg:static items-center gap-7">
              <button
                className="text-black text-3xl bg-white w-12 h-12 rounded-full"
                onClick={() => {
                  quote === 1 ? setQuote(3) : setQuote(quote - 1);
                }}
              >
                &lt;
              </button>
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`${
                    quote === 1 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
                <div
                  className={`${
                    quote === 2 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
                <div
                  className={`${
                    quote === 3 ? "bg-white" : "bg-slate-500"
                  } w-2 h-2 rounded-full`}
                ></div>
              </div>
              <button
                className="text-black text-3xl bg-white w-12 h-12 rounded-full"
                onClick={() => {
                  quote === 3 ? setQuote(1) : setQuote(quote + 1);
                }}
              >
                &gt;
              </button>
            </div>
          </article>
          <article
            className={`pb-10 lg:w-1/2 lg:p-10 ${
              quote === 1 ? "flex" : "hidden"
            } flex-col gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">
                “Saya memilih kerja sama dengan Mamikos karena saya sering
                mendengar mamikos dari internet dan saya merasa branding nya
                bagus. Saya merasa cukup puas setelah bergabung dengan singgah
                sini, karena saya tidak perlu repot untuk menghandle kost saya”.
              </p>
              <div>
                <p className="font-extrabold">Erni 1</p>
                <p>
                  Pemilik Kost Singgahsini Wisma KS23 Setiabudi Jakarta Selatan
                </p>
              </div>
            </div>
          </article>
          <article
            className={`pb-10 lg:w-1/2 lg:p-10 ${
              quote === 2 ? "flex" : "hidden"
            } flex-col gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">
                “Saya memilih kerja sama dengan Mamikos karena saya sering
                mendengar mamikos dari internet dan saya merasa branding nya
                bagus. Saya merasa cukup puas setelah bergabung dengan singgah
                sini, karena saya tidak perlu repot untuk menghandle kost saya”.
              </p>
              <div>
                <p className="font-extrabold">Erni 2</p>
                <p>
                  Pemilik Kost Singgahsini Wisma KS23 Setiabudi Jakarta Selatan
                </p>
              </div>
            </div>
          </article>
          <article
            className={`pb-10 lg:w-1/2 lg:p-10 ${
              quote === 3 ? "flex" : "hidden"
            } flex-col gap-10`}
          >
            <div className="flex flex-col gap-3">
              <p className="font-bold text-xl">
                “Saya memilih kerja sama dengan Mamikos karena saya sering
                mendengar mamikos dari internet dan saya merasa branding nya
                bagus. Saya merasa cukup puas setelah bergabung dengan singgah
                sini, karena saya tidak perlu repot untuk menghandle kost saya”.
              </p>
              <div>
                <p className="font-extrabold">Erni 3</p>
                <p>
                  Pemilik Kost Singgahsini Wisma KS23 Setiabudi Jakarta Selatan
                </p>
              </div>
            </div>
          </article>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
