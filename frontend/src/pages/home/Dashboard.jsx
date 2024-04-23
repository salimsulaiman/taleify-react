import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../component/Navbar";

import Facebook from "../../assets/image/facebook.png";
import Instagram from "../../assets/image/instagram-logo.png";
import Youtube from "../../assets/image/youtube.png";
import Woman from "../../assets/image/woman1.png";
import Background from "../../assets/image/background1.png";
import WomanConfuse from "../../assets/image/woman-confuse.png";
import Woman3 from "../../assets/image/woman3.png";
import Background2 from "../../assets/image/background2.png";
import Background3 from "../../assets/image/background3.png";
import Background4 from "../../assets/image/background4.png";
import Literation from "../../assets/image/literation.jpg";
import Idea from "../../assets/image/idea.jpg";
import Happy from "../../assets/image/happy.jpg";

// react icon
import { FaBell } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { AiFillGift } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import Footer from "../../component/Footer";

function Dashboard() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true, // Specify whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div className="w-full min-h-screen font-poppins">
        <Navbar />
        <section id="banner">
          <div
            className="container-fluid relative overflow-hidden bg-cover bg-center bg-purple-light-100"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <div className="max-w-screen-xl mx-auto min-h-[550px] sm:min-h-[500px] md:min-h-[637px] flex lg:flex items-center relative px-9 pt-28 pb-14 md:px-9 md:pt-24 md:pb-14 lg:px-9 lg:pt-5 lg:pb-14">
              <div className="sm:w-full lg:w-1/2 z-20">
                <h1 className="text-2xl sm:text-4xl text-slate-700 font-bold mb-3 leading-[50px]" data-aos="fade-up">
                  Tingkatkan Kemampuan Literasimu Bersama <span className="text-purple-semi-dark">Taleify</span>
                </h1>
                <p className="text-[14px] sm:text-base text-slate-500 leading-loose" data-aos="fade-up">
                  Tempat dimana petualangan tak terbatas dan dunia imajinasi terbuka lebar! Temukan keajaiban literasi
                  membaca dengan cerita seru hanya di <span className="text-purple-semi-dark font-bold">Taleify</span>!
                </p>
                <div className="flex mt-12" data-aos="fade-up">
                  <img
                    src={Facebook}
                    alt="facebook"
                    width={500}
                    height={500}
                    className="h-7 drop-shadow-lg w-auto cursor-pointer me-7"
                  />
                  <img
                    src={Instagram}
                    alt="facebook"
                    width={500}
                    height={500}
                    className="h-7 drop-shadow-lg w-auto cursor-pointer me-7"
                  />
                  <img
                    src={Youtube}
                    alt="facebook"
                    width={500}
                    height={500}
                    className="h-7 drop-shadow-lg w-auto cursor-pointer"
                  />
                </div>
              </div>
              <div className="hidden lg:block w-1/2 px-2">
                <img
                  src={Woman}
                  width={500}
                  height={500}
                  quality={100}
                  alt="woman"
                  className="lg:absolute relative h-auto lg:h-[600px] w-auto bottom-0 right-1/2 translate-x-1/2 lg:right-1/3 lg:translate-x-2/3"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div
            className="container-fluid bg-gradient-to-b from-white to-purple-light-50 overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Background2})` }}
          >
            <div className="max-w-screen-xl px-9 py-14 lg:px-9 lg:py-5 md:flex-row bg-cover relative min-h-0 lg:min-h-[593px] mx-auto flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2">
                <img
                  src={WomanConfuse}
                  alt="woman-confuse.png"
                  quality={100}
                  width={500}
                  height={1000}
                  className="mb-8 md:mb-0 lg:absolute relative h-auto lg:h-[524px] w-auto bottom-0 left-1/2 -translate-x-1/2 lg:left-1/3 lg:-translate-x-2/3"
                />
              </div>
              <div className="w-full lg:w-1/2 z-20">
                <h1 className="text-2xl sm:text-4xl font-bold text-slate-700" data-aos="fade-left">
                  Kenapa Harus Kami?
                </h1>
                <p className="text-slate-500 text-justify mt-4 mb-5 text-[14px] sm:text-base" data-aos="fade-left">
                  Literasi merupakan sebuah kemampuan yang harus diasah sejak usia muda.{" "}
                  <span className="text-purple-semi-dark font-bold">Taleify</span> merupakan sebuah aplikasi yang ikut
                  berkontribusi dalam upaya meningkatkan kemampuan membaca dengan fitur-fitur yang menarik
                </p>
                <a
                  href=""
                  className="bg-purple-dark px-4 py-2 rounded-md hover:bg-purple-semi-dark text-white"
                  data-aos="fade-left"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="feature" className="bg-gradient-to-b from-white to-purple-light-50">
          <div
            className="container-fluid rounded-b-md md:rounded-b-lg lg:rounded-b-[150px] overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Background3})` }}
          >
            <div className="max-w-screen-xl min-h-0 lg:min-h-[751px] mx-auto flex flex-col lg:flex-row items-center px-9 py-14 lg:px-9 lg:py-5">
              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-4xl font-bold text-slate-700" data-aos="fade-right">
                  Apa Yang Kami Tawarkan?
                </h1>
                <p className="text-slate-500 text-justify mt-4 text-[14px] sm:text-base" data-aos="fade-right">
                  Untuk menunjang kemampuan literasi, kami menawarkan beberapa fitur yang disediakan pada aplikasi
                  <span className="text-purple-semi-dark font-bold"> Taleify</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-9 mt-16">
                  <div className="min-h-0 sm:min-h-[171px] bg-white border-[1px] border-purple-light rounded-xl relative pt-9 px-5 pb-5 group hover:bg-purple-light cursor-default transition ease-in-out duration-150">
                    <div className="h-[44px] w-[44px] bg-purple-light rounded-lg absolute left-5 -top-5 p-2 group-hover:bg-white border-0 group-hover:border-[1px] border-purple-light transition ease-in-out duration-150">
                      <FaAward className="w-full h-auto text-white group-hover:text-purple-light transition ease-in-out duration-150" />
                    </div>
                    <h4 className="text-base text-justify text-slate-700 font-bold mb-2 group-hover:text-white transition ease-in-out duration-150">
                      Poin Literasi
                    </h4>
                    <h4 className="text-[14px] sm:text-base text-slate-500 group-hover:text-white transition ease-in-out duration-150">
                      Fitur poin yang dapat kamu kumpulkan dengan menyelesaikan literasi & kuis
                    </h4>
                  </div>
                  <div className="min-h-0 sm:min-h-[171px] bg-white border-[1px] border-purple-light rounded-xl relative pt-9 px-5 pb-5 group hover:bg-purple-light cursor-default transition ease-in-out duration-150">
                    <div className="h-[44px] w-[44px] bg-purple-light rounded-lg absolute left-5 -top-5 p-2 group-hover:bg-white border-0 group-hover:border-[1px] border-purple-light transition ease-in-out duration-150">
                      <AiFillGift className="w-full h-auto text-white group-hover:text-purple-light transition ease-in-out duration-150" />
                    </div>
                    <h4 className="text-base text-justify text-slate-700 font-bold mb-2 group-hover:text-white transition ease-in-out duration-150">
                      Reward
                    </h4>
                    <h4 className="text-[14px] sm:text-base text-slate-500 group-hover:text-white transition ease-in-out duration-150">
                      Penukaran poin literasi untuk mendapatkan beberapa reward yang disediakan
                    </h4>
                  </div>
                  <div className="min-h-0 sm:min-h-[171px] bg-white border-[1px] border-purple-light rounded-xl relative pt-9 px-5 pb-5 group hover:bg-purple-light cursor-default transition ease-in-out duration-150">
                    <div className="h-[44px] w-[44px] bg-purple-light rounded-lg absolute left-5 -top-5 p-2 group-hover:bg-white border-0 group-hover:border-[1px] border-purple-light transition ease-in-out duration-150">
                      <FaBell className="w-full h-auto text-white group-hover:text-purple-light transition ease-in-out duration-150" />
                    </div>
                    <h4 className="text-base text-justify text-slate-700 font-bold mb-2 group-hover:text-white transition ease-in-out duration-150">
                      Notifikasi
                    </h4>
                    <h4 className="text-[14px] sm:text-base text-slate-500 group-hover:text-white transition ease-in-out duration-150">
                      Notifikasi tentang literasi terkini yang mungkin kamu sukai
                    </h4>
                  </div>
                  <div className="min-h-0 sm:min-h-[171px] bg-white border-[1px] border-purple-light rounded-xl relative pt-9 px-5 pb-5 group hover:bg-purple-light cursor-default transition ease-in-out duration-150">
                    <div className="h-[44px] w-[44px] bg-purple-light rounded-lg absolute left-5 -top-5 p-2 group-hover:bg-white border-0 group-hover:border-[1px] border-purple-light transition ease-in-out duration-150">
                      <BiSolidBookAlt className="w-full h-auto text-white group-hover:text-purple-light transition ease-in-out duration-150" />
                    </div>
                    <h4 className="text-base text-justify text-slate-700 font-bold mb-2 group-hover:text-white transition ease-in-out duration-150">
                      Kumpulan Literasi
                    </h4>
                    <h4 className="text-[14px] sm:text-base text-slate-500 group-hover:text-white transition ease-in-out duration-150">
                      Berbagai macam bacaan literasi yang menarik dan seru
                    </h4>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img
                  src={Woman3}
                  width={500}
                  height={500}
                  alt="woman"
                  className="lg:absolute relative h-auto lg:h-[672px] w-auto bottom-0 right-1/2 translate-x-1/2 lg:right-1/3 lg:translate-x-2/3"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="article" className="bg-gradient-to-b from-white to-purple-light-50">
          <div
            className="container-fluid overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${Background4})` }}
          >
            <div className="max-w-screen-xl min-h-[751px] mx-auto px-9 py-14 lg:px-9 lg:py-5 flex items-center justify-center flex-col">
              <div className="w-full flex flex-col lg:flex-row items-start lg:items-end  lg:justify-between">
                <div className="w-full lg:w-1/2">
                  <h1 className="text-2xl sm:text-4xl font-bold text-slate-700" data-aos="fade-right">
                    Artikel Kami
                  </h1>
                  <p className="text-slate-500 text-justify mt-4 text-[14px] sm:text-base" data-aos="fade-right">
                    <span className="text-purple-semi-dark font-bold">Taleify</span> menyediakan beberapa artikel yang
                    dapat digunakan sebagai sumber pengetahuan tertkait literasi
                  </p>
                </div>
                <button
                  className="hidden lg:block bg-white border-2 border-purple-light rounded-md px-4 py-2 text-purple-light hover:bg-purple-semi-dark hover:text-white mt-6 lg:mt-0"
                  data-aos="fade-left"
                >
                  Lihat Semua Artikel
                </button>
              </div>
              <div className="w-full mt-11">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 lg:gap-9 mx-0 lg:mx-6">
                  <div
                    className="min-h-0 md:min-h-[482px] bg-white text-slate-700 shadow-sm border-2 border-slate-100 rounded-2xl flex flex-col items-center p-5"
                    data-aos="zoom-in"
                  >
                    <div className="w-full h-[208px] bg-purple-light-200 rounded-2xl overflow-hidden flex items-center justify-center">
                      <img src={Literation} alt="image" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="text-slate-700 font-bold mt-5">Pentingkah Kemampuan Literasi Membaca?</h4>
                    <p className="text-slate-500 text-sm text-justify leading-relaxed mt-4">
                      Kemampuan literasi membaca sangat penting, terutama dikalangan anak muda yang saat ini memiliki
                      tergantungan dengan gadget
                    </p>
                    <Link
                      to={"/artikel"}
                      className="text-center bg-white border-2 border-purple-light px-4 py-2 rounded-md text-purple-light w-full mt-5 hover:bg-purple-semi-dark hover:text-white"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                  <div
                    className="min-h-0 md:min-h-[482px] bg-white text-slate-700 shadow-sm border-2 border-slate-100 rounded-2xl flex flex-col items-center p-5"
                    data-aos="zoom-in"
                  >
                    <div className="w-full h-[208px] bg-purple-light-200 rounded-2xl overflow-hidden flex items-center justify-center">
                      <img src={Idea} alt="image" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="text-slate-700 font-bold mt-5">Pentingkah Kemampuan Literasi Membaca?</h4>
                    <p className="text-slate-500 text-sm text-justify leading-relaxed mt-4">
                      Kemampuan literasi membaca sangat penting, terutama dikalangan anak muda yang saat ini memiliki
                      tergantungan dengan gadget
                    </p>
                    <Link
                      to={"/artikel"}
                      className="text-center bg-white border-2 border-purple-light px-4 py-2 rounded-md text-purple-light w-full mt-5 hover:bg-purple-semi-dark hover:text-white"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                  <div
                    className="min-h-0 md:min-h-[482px] bg-white text-slate-700 shadow-sm border-2 border-slate-100 rounded-2xl flex flex-col items-center p-5"
                    data-aos="zoom-in"
                  >
                    <div className="w-full h-[208px] bg-purple-light-200 rounded-2xl overflow-hidden flex items-center justify-center">
                      <img src={Happy} alt="image" className="w-full h-full object-cover object-center" />
                    </div>
                    <h4 className="text-slate-700 font-bold mt-5">Pentingkah Kemampuan Literasi Membaca?</h4>
                    <p className="text-slate-500 text-sm text-justify leading-relaxed mt-4">
                      Kemampuan literasi membaca sangat penting, terutama dikalangan anak muda yang saat ini memiliki
                      tergantungan dengan gadget
                    </p>
                    <Link
                      to={"/artikel"}
                      className="text-center bg-white border-2 border-purple-light px-4 py-2 rounded-md text-purple-light w-full mt-5 hover:bg-purple-semi-dark hover:text-white"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
                <button className="block lg:hidden w-full bg-purple-light border-2 border-purple-light rounded-md px-4 py-2 text-white hover:bg-purple-semi-dark hover:text-white mt-6 lg:mt-0">
                  Lihat Semua Artikel
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
