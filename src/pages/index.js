import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
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
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
            <Image src={Logo} className="h-20 w-auto" alt="logo2" />
            <div className="text-center lg:text-start font-extrabold text-5xl ">
              Archico, Sahabat Arsitek dan Konstruksimu
            </div>
            <div className="text-center lg:text-start text-xl">
              Semua yang anda butuhkan jasa desain asitektur , desain interior,
              konstruksi interior dan konstruksi sipil bisa anda selesaikan
              melalui Archico. Kami mengutamakan kepercayaan dan kepuasan
              pelanggan di atas segalanya.
            </div>
            <button
              onClick={() => {
                router.push(
                  "https://api.whatsapp.com/send?phone=6285225514983"
                );
              }}
              className="bg-orange-600 p-5 rounded-md text-lg"
            >
              Pesan Sekarang
            </button>
          </article>
          <article className="items-start lg:w-1/2">
            <Slider />
          </article>
        </section>
        <section
          id="Tentang Kami"
          className="lg:p-20 flex flex-col gap-20 pt-10"
        >
          <article className="text-center text-4xl lg:px-20">
            Archico menyediakan 3 jasa utama yaitu :
          </article>
          <article className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col items-center gap-5 p-5">
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
            <div className="flex flex-col items-center gap-5 p-5">
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
            <div className="flex flex-col items-center gap-5 p-5">
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
          className="w-screen flex flex-col items-center lg:items-start lg:flex-row pb-96 px-10 pt-10 mb-20"
        >
          <article className="lg:w-1/2 flex flex-col lg:p-10 gap-5">
            <div className="text-center lg:text-start text-3xl md:text-5xl font-extrabold">
              Archico berpengalaman lebih dari 1 tahun dengan portofolio projek
              kami
            </div>
            <SliderInterior />
          </article>
          <article className="lg:w-1/2 flex flex-col lg:p-10">
            <div>
              <SliderConstruction className="w-full" />
              <Image src={Logo} className="lg:w-full" alt="content-image-2" />
            </div>
            <div className="flex mt-5 justify-center">
              <Image src={Logo} className="w-1/2" alt="content-image-2" />
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
