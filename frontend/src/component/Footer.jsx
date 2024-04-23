import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneArrowDownLeftIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="container-fluid min-h-[365px] bg-white flex items-center justify-center flex-col">
      <div className="max-w-screen-xl mx-auto px-9 pt-14 pb-6 lg:pt-5 lg:pb-6">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="col-span-4 lg:col-span-2">
            <h1 className="text-slate-700 text-xl md:text-4xl font-bold text-center lg:text-start">
              Ilmu Apa Yang Kamu Dapat Hari Ini?
            </h1>
            <p className="text-slate-500 mt-4 text-center lg:text-start">
              Platform pendukung dalam mengasah kemampuan literasi?{" "}
              <span className="text-purple-semi-dark font-bold">Taleify</span> solusinya
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-5 mb-3">
              <FaGithub className="text-4xl text-slate-700 me-6" />
              <FaTwitter className="text-4xl text-slate-700 me-6" />
              <FaLinkedin className="text-4xl text-slate-700 me-6" />
            </div>
          </div>
          <ul className="col-span-3 md:col-span-1 text-center md:text-start flex justify-center">
            <div>
              <li className="text-purple-semi-dark font-bold mb-4">Navigasi</li>
              <li className="mb-2">
                <a href="" className="text-slate-500">
                  Beranda
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="text-slate-500">
                  Tentang Kami
                </a>
              </li>
            </div>
          </ul>
          <ul className="col-span-3 md:col-span-1 text-center md:text-start flex justify-center">
            <div>
              <li className="text-purple-semi-dark font-bold mb-4">Lainnya</li>
              <li className="mb-2">
                <a href="" className="text-slate-500">
                  Kebijakan Privasi
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="text-slate-500">
                  Term of Use
                </a>
              </li>
            </div>
          </ul>
          <ul className="col-span-3 md:col-span-2 text-center md:text-start flex justify-center">
            <div>
              <li className="text-purple-semi-dark font-bold mb-4">Kontak</li>
              <li className="mb-2 text-slate-500 flex items-center justify-center md:justify-start">
                <span className="hidden sm:block">
                  <EnvelopeIcon className="w-6 inline me-2" />
                </span>
                taleify@gmail.com
              </li>
              <li className="mb-2 text-slate-500 flex items-center justify-center md:justify-start">
                <span className="hidden sm:block">
                  <PhoneIcon className="w-6 inline me-2" />
                </span>
                0877-7788-7878
              </li>
              <li className="mb-2 text-slate-500 flex items-center justify-center md:justify-start">
                <span className="hidden sm:block">
                  <MapPinIcon className="w-6 inline me-2" />
                </span>
                Semarang, Jalan Imam Bonjol, Indonesia
              </li>
            </div>
          </ul>
        </div>
        <hr className="w-full border-[1px] border-slate-300 my-5" />
        <div className="text-center text-slate-500">Copyright &copy; 2024 Taleify</div>
      </div>
    </footer>
  );
}

export default Footer;
