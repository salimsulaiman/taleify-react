import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import Bubble from "../../../assets/image/buble.png";
import Login from "../../../assets/image/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/action/userAction";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  const { isLoading } = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);

  const login = async (e) => {
    e.preventDefault();

    await dispatch(loginUser(email, password));

    // Cek apakah ada kesalahan setelah login, jika ada tampilkan pesan kesalahan

    const token = localStorage.getItem("token");
    if (token) {
      // Jika berhasil login, arahkan ke halaman beranda
      navigate("/user/home");
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-white-100 bg-cover flex justify-center items-center font-poppins"
      style={{ backgroundImage: `url(${Bubble})` }}
    >
      <div className="w-[907px] min-h-[470px] bg-white rounded-lg p-5 flex shadow-sm mx-4">
        <div
          className="hidden md:block w-1/2 rounded-lg me-2.5 bg-cover bg-center overflow-hidden relative"
          style={{ backgroundImage: `url(${Login})` }}
        >
          <div className="absolute bg-black p-4 text-center bg-opacity-40 bottom-0 mb-4 ms-4 me-4 rounded-lg text-white">
            Membaca akan membantumu menemukan dirimu
          </div>
        </div>
        <div className="w-full md:w-1/2 ms-2.5 flex justify-center flex-col">
          <h1 className="text-[32px] text-purple-semi-dark font-bold mb-2">Teleify</h1>
          <h2 className="text-2xl text-slate-600 font-medium mb-3">Hello, Pengguna</h2>
          <h4 className="text-[16px] text-slate-500 mb-5">Selamat datang, silahkan login untuk melanjutkan</h4>
          <form onSubmit={login}>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <EnvelopeIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="email"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <LockClosedIcon className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full ps-11 px-3 py-2 border text-slate-600 border-gray-300 rounded-lg focus:outline-none focus:border-purple-light"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>

            {error ? (
              <div role="alert" className="alert alert-error mb-4 text-white p-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Email atau password salah</span>
              </div>
            ) : (
              <div></div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-light to-purple-dark text-white py-1.5 px-3 rounded-full hover:bg-gradient-to-l hover:from-purple-light hover:to-purple-dark focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-300"
              disabled={isLoading && isLoading}
            >
              {isLoading && isLoading ? "Loading" : "Masuk"}
            </button>
            <h4 className="text-slate-600 mt-4 text-center">Belum punya akun?</h4>
          </form>
          <Link
            to={"/user/signup"}
            className="mt-4 w-full bg-transparent text-purple-light border-2 border-purple-light py-1.5 px-3 rounded-full hover:bg-gradient-to-l hover:from-purple-light hover:to-purple-dark hover:text-white focus:outline-none focus:shadow-outline-blue text-center"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
