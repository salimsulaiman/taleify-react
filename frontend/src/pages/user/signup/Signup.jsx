import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Bubble from "../../../assets/image/buble.png";
import Register from "../../../assets/image/register.jpg";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <div
      className="w-full min-h-screen bg-white-100 bg-cover flex justify-center items-center font-poppins"
      style={{ backgroundImage: `url(${Bubble})` }}
    >
      <div className="w-[907px] min-h-[470px] bg-white rounded-lg p-5 flex shadow-sm mx-4">
        <div
          className="hidden md:block w-1/2 rounded-lg me-2.5 bg-cover overflow-hidden relative bg-no-repeat"
          style={{
            backgroundImage: `url(${Register})`,
            backgroundPositionX: "-210px",
          }}
        >
          <div className="absolute bg-black p-4 text-center bg-opacity-40 bottom-0 mb-4 ms-4 me-4 rounded-lg text-white">
            Membaca akan membantumu menemukan dirimu
          </div>
        </div>
        <div className="w-full md:w-1/2 ms-2.5 flex justify-center flex-col">
          <h1 className="text-[32px] text-purple-semi-dark font-bold mb-2">
            Teleify
          </h1>
          <h2 className="text-2xl text-slate-600 font-medium mb-3">
            Bergabung bersama kami
          </h2>
          <h4 className="text-[16px] text-slate-500 mb-5">
            Segera daftar untuk menikmati fitur kami
          </h4>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <UserIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="input-group-1"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Nama"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <EnvelopeIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="input-group-2"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <LockClosedIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="input-group-3"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <LockClosedIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="input-group-4"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Konfirmasi Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-light to-purple-dark text-white py-1.5 px-3 rounded-full hover:bg-gradient-to-l hover:from-purple-light hover:to-purple-dark focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-300"
            >
              Daftar
            </button>
            <h4 className="text-slate-600 mt-4 text-center">
              Sudah punya akun?
            </h4>
          </form>
          <Link
            to={"/user/signin"}
            className="mt-4 w-full bg-transparent text-purple-light border-2 border-purple-light py-1.5 px-3 rounded-full hover:bg-gradient-to-l hover:from-purple-light hover:to-purple-dark hover:text-white focus:outline-none focus:shadow-outline-blue text-center"
          >
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
