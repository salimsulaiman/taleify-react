import React from "react";
import NavApp from "../../../component/NavApp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userData } from "../../../redux/action/userAction";

import { ArrowLeftCircleIcon, PencilIcon, StarIcon } from "@heroicons/react/16/solid";
import { IoBook, IoStar } from "react-icons/io5";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import ListProgress from "../../../component/ListProgress";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(userData);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/user/signin");
  };
  return (
    <main className="w-full min-h-screen bg-slate-100 font-poppins">
      <section id="story" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-20 md:pb-16 pt-16 md:pt-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
            <div className="grid-cols-1 gap-4">
              <div className="bg-white p-8 rounded-xl mb-4 border-2 border-slate-200">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-purple-light h-32 w-32 rounded-full relative mb-4 border-4 border-slate-500">
                    {user && (
                      <img
                        src={user.picture}
                        className="h-full w-full object-cover object-center rounded-full"
                        alt="profile"
                      />
                    )}
                    <div className="bg-white shadow h-6 w-6 rounded-full border-2 border-slate-200 absolute right-3 top-1 flex items-center justify-center p-1">
                      <PencilIcon className="text-slate-500" />
                    </div>
                  </div>
                  {user && <h1 className="text-slate-500 font-semibold mb-4">{user.name}</h1>}
                  <form action="" className="w-full">
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="name">
                        Nama
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-500 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-500 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-light to-purple-semi-dark text-white">
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
                <div className="flex flex-col justify-center items-center">
                  <form action="" className="w-full">
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-500 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="newPassword">
                        Password Baru
                      </label>
                      <input
                        name="newPassword"
                        type="password"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-500 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-light to-purple-semi-dark text-white">
                      Simpan
                    </button>
                  </form>
                  {/* {user.map((items: any, index: number) => {
                  return (
                    <div key={index} className="text-slate-400">
                      <p>{items.name}</p>
                    </div>
                  );
                })} */}
                </div>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-xl text-white mt-4 w-full"
                onClick={logout}
              >
                Logout
              </button>
            </div>
            <div className="rounded-xl col-span-1 lg:col-span-2">
              <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl h-32 border-2 border-slate-200 p-6 flex justify-between items-center relative">
                  <div className="flex flex-col mb-4">
                    <h1 className="text-purple-semi-dark font-semibold mb-2 text-4xl">3</h1>
                    <div className="text-sm text-slate-400">Daftar Literasi</div>
                  </div>
                  <IoBook className="text-4xl text-purple-light-400" />
                  <HiMiniQuestionMarkCircle className="text-lg text-slate-400 absolute right-2 top-2" />
                </div>
                <div className="bg-white rounded-xl h-32 border-2 border-slate-200 p-6 flex justify-between items-center relative">
                  <div className="flex flex-col mb-4">
                    <h1 className="text-green-500 font-semibold mb-2 text-4xl">1</h1>
                    <div className="text-sm text-slate-400">Terselesaikan</div>
                  </div>
                  <FaCircleCheck className="text-4xl text-green-200" />
                  <HiMiniQuestionMarkCircle className="text-lg text-slate-400 absolute right-2 top-2" />
                </div>
                <div className="col-span-2 md:col-span-1 bg-white rounded-xl h-32 border-2 border-slate-200 p-6 flex justify-between items-center relative">
                  <div className="flex flex-col mb-4">
                    <h1 className="text-yellow-300 font-semibold mb-2 text-4xl">100</h1>
                    <div className="text-sm text-slate-400">Poin Literasi</div>
                  </div>
                  <IoStar className="text-4xl text-yellow-100" />
                  <HiMiniQuestionMarkCircle className="text-lg text-slate-400 absolute right-2 top-2" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-white rounded-xl col-span-3 border-2 border-slate-200 p-4">
                  <div className="w-full">
                    <select
                      name="category"
                      id="category"
                      className="border-2 border-slate-200 bg-slate-100 rounded-lg text-slate-500 px-2 py-2"
                    >
                      <option value="semua">Terbaru</option>
                      <option value="semua">Terlama</option>
                      <option value="semua">Selesai</option>
                      <option value="semua">Belum Selesai</option>
                    </select>
                    <div id="progress" className="w-full mt-4">
                      <ListProgress
                        title={"Bridge of Unity: Guardian of One World"}
                        src={"/fantasy.jpg"}
                        genre="Fiksi"
                        progress={5}
                        totalProgress={7}
                      />
                      <ListProgress
                        title={"Atlantis Kota Yang Hilang"}
                        src={"/atlantis.png"}
                        genre="Sejarah"
                        progress={2}
                        totalProgress={7}
                      />
                      <ListProgress
                        title={"Aurora Penghias Langit"}
                        src={"/aurora.jpg"}
                        genre="Romantis"
                        progress={4}
                        totalProgress={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;