import React, { useState } from "react";
import NavApp from "../../../component/NavApp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { updatePasswordUser, updateUser, userData } from "../../../redux/action/userAction";

import { ArrowLeftCircleIcon, PencilIcon, StarIcon } from "@heroicons/react/16/solid";
import { IoBook, IoStar } from "react-icons/io5";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import ListProgress from "../../../component/ListProgress";
import { useLocation, useNavigate } from "react-router-dom";
import { getLiterationByUserId } from "../../../redux/action/literationAddedAction";
import { getQuestion } from "../../../redux/action/questionAction";
import { getUserAnswerByUserId } from "../../../redux/action/userAnswerAction";
import { getUserPointByUserId } from "../../../redux/action/userPointAction";
import axios from "axios";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState("all");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [file, setFile] = useState(null);

  const user = useSelector((state) => state.user.data);
  const { dataUser, isLoadingUser } = useSelector((state) => state.literationAdded);
  const { data, isLoading } = useSelector((state) => state.question);
  const { dataUserId, isLoadingUserId } = useSelector((state) => state.userAnswer);

  const dataPoint = useSelector((state) => state.userPoint.dataDetail);

  const handleUpdateUser = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const userId = user && user?._id;

    dispatch(updateUser(userId, name, email)) // Dispatch action to update user data
      .then(() => {
        alert("Success Update");
        navigate("/user/home");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        // Handle error
      });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const userId = user && user?._id;
    try {
      await dispatch(updatePasswordUser(userId, password, newPassword));
      // Password updated successfully
      alert("Password berhasil diubah");
      setPassword("");
      setNewPassword("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Password lama tidak sesuai");
        setPassword("");
        setNewPassword("");
      } else {
        console.error("Error changing password:", error);
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name || ""); // Atur nilai default nama dari data pengguna jika tersedia
      setEmail(user.email || "");
    }
  }, [user]);

  useEffect(() => {
    dispatch(userData());
  }, []);

  useEffect(() => {
    if (user && user._id) {
      localStorage.setItem("userId", user._id);
    }
  }, [user]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(getLiterationByUserId(userId));
    }
  }, [dispatch, location]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(getUserAnswerByUserId(userId));
    }
  }, [dispatch, location]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(getUserPointByUserId(userId));
    }
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(getQuestion());
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/user/signin");
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const changeAvatar = async (e) => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      const compressedFile = await new Promise((resolve) => {
        Resizer.imageFileResizer(
          file, // File to resize
          700, // New width
          700, // New height
          "JPEG", // Output format
          100, // Quality (0-100)
          0, // Rotation
          (uri) => {
            resolve(uri);
          },
          "blob" // Output type (blob, base64)
        );
      });

      const formData = new FormData();
      formData.append("profilePicture", compressedFile);

      // Upload the compressed file to the server
      await axios.post(`http://localhost:3030/image/upload_avatar/${user?._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(userData());
      document.getElementById("changeImage").close();
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file");
    }
  };

  const changeAvatarDefault = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3030/image/default_avatar/${user?._id}`);
      dispatch(userData());
      document.getElementById("changeImage").close();
      alert("change picture successfully");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file");
    }
  };
  return (
    <main className="w-full min-h-screen bg-slate-100 font-poppins">
      <section id="story" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-20 md:pb-16 pt-16 md:pt-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
            <div className="grid-cols-1 gap-4">
              <div className="bg-white p-8 rounded-xl mb-4 border-2 border-slate-200">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-slate-100 h-32 w-32 rounded-full relative mb-4 border-4 border-slate-500">
                    {user && user?.picture && (
                      <img src={user.picture} className="h-full w-full object-cover object-center rounded-full" />
                    )}
                    <div
                      className="bg-white hover:bg-slate-100 shadow h-6 w-6 rounded-full border-2 border-slate-500 absolute right-3 top-1 flex items-center justify-center p-1 cursor-pointer"
                      onClick={() => document.getElementById("changeImage").showModal()}
                    >
                      <PencilIcon className="text-slate-500" />
                    </div>
                    <dialog id="changeImage" className="modal">
                      <div className="modal-box max-w-md">
                        <form>
                          <input
                            type="file"
                            className="file-input file-input-bordered w-full mb-4"
                            onChange={handleFileChange}
                          />
                          <button
                            className="w-full bg-white text-purple-light border-2 border-purple-light rounded-lg px-4 py-2 mb-4 hover:bg-purple-light hover:text-white"
                            onClick={changeAvatarDefault}
                          >
                            Ubah Default
                          </button>
                          <button
                            type="button"
                            onClick={changeAvatar}
                            className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-light to-purple-semi-dark text-white"
                          >
                            Simpan
                          </button>
                        </form>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                  {user && <h1 className="text-slate-500 font-semibold mb-4">{user.name}</h1>}
                  {user && user?.verified && (
                    <div
                      className={`badge font-bold ${
                        user?.verified ? "bg-emerald-100 text-emerald-500" : "bg-red-100 text-red-400"
                      } p-3 rounded-lg mb-4`}
                    >
                      {user?.verified ? "Aktif" : "Belum Aktif"}
                    </div>
                  )}
                  <form className="w-full" onSubmit={handleUpdateUser}>
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="name">
                        Nama
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-400 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        readOnly
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-400 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-light to-purple-semi-dark text-white"
                    >
                      Simpan
                    </button>
                  </form>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
                <div className="flex flex-col justify-center items-center">
                  <form className="w-full" onSubmit={handleChangePassword}>
                    <div className="form-group w-full relative mb-3">
                      <label className="text-xs text-slate-400 absolute z-10 left-3 top-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        name="newPassword"
                        type="password"
                        className="w-full border-2 text-sm font-semibold border-slate-200 text-slate-500 px-3 pb-2 pt-6 rounded-xl focus:outline-none focus:border-purple-light"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-light to-purple-semi-dark text-white"
                    >
                      Simpan
                    </button>
                  </form>
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
                    <h1 className="text-purple-semi-dark font-semibold mb-2 text-4xl">{(dataUser ?? []).length}</h1>
                    <div className="text-sm text-slate-400">Daftar Literasi</div>
                  </div>
                  <IoBook className="text-4xl text-purple-light-400" />
                  <HiMiniQuestionMarkCircle className="text-lg text-slate-400 absolute right-2 top-2" />
                </div>
                <div className="bg-white rounded-xl h-32 border-2 border-slate-200 p-6 flex justify-between items-center relative">
                  <div className="flex flex-col mb-4">
                    <h1 className="text-green-500 font-semibold mb-2 text-4xl">
                      {(dataUser ?? []).reduce((acc, element) => {
                        const literationId = element?.literation?._id;
                        const progressCount = literationId
                          ? (dataUserId ?? []).filter((el) => el?.question?.story?.literation === literationId).length
                          : 0;
                        const totalProgressCount = literationId
                          ? (data ?? []).filter((el) => el?.story?.literation?._id === literationId).length
                          : 0;

                        if (literationId && progressCount === totalProgressCount) {
                          return acc + 1;
                        } else {
                          return acc;
                        }
                      }, 0)}
                    </h1>
                    <div className="text-sm text-slate-400">Terselesaikan</div>
                  </div>
                  <FaCircleCheck className="text-4xl text-green-200" />
                  <HiMiniQuestionMarkCircle className="text-lg text-slate-400 absolute right-2 top-2" />
                </div>
                <div className="col-span-2 md:col-span-1 bg-white rounded-xl h-32 border-2 border-slate-200 p-6 flex justify-between items-center relative">
                  <div className="flex flex-col mb-4">
                    <h1 className="text-yellow-300 font-semibold mb-2 text-4xl">
                      {dataPoint && dataPoint[0] && dataPoint[0]?.point}
                    </h1>
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
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">Semua</option>
                      <option value="new">Terbaru</option>
                      <option value="old">Terlama</option>
                      <option value="finished">Selesai</option>
                      <option value="notFinished">Belum Selesai</option>
                    </select>
                    <div id="progress" className="w-full mt-4">
                      {dataUser &&
                        dataUser
                          .sort((a, b) => {
                            if (filter === "new") {
                              return new Date(b.createdAt) - new Date(a.createdAt);
                            } else if (filter === "old") {
                              return new Date(a.createdAt) - new Date(b.createdAt);
                            } else {
                              return 0;
                            }
                          })
                          .filter((ele) => {
                            const totalProgress =
                              data && data.filter((el) => el?.story?.literation?._id === ele?.literation?._id).length;

                            const progress =
                              dataUserId &&
                              dataUserId.filter((el) => el?.question?.story?.literation == ele?.literation?._id).length;

                            if (filter === "all") {
                              return true;
                            } else if (filter === "finished") {
                              return totalProgress === progress;
                            } else if (filter === "notFinished") {
                              return totalProgress !== progress;
                            } else {
                              return true;
                            }
                          })
                          .map((element) => {
                            return (
                              <ListProgress
                                key={element._id}
                                id={element?.literation?._id}
                                title={element?.literation?.title}
                                src={element?.literation?.picture}
                                genre={element?.literation?.genre?.name}
                                progress={
                                  dataUserId &&
                                  dataUserId.filter((el) => el?.question?.story?.literation == element?.literation?._id)
                                    .length
                                }
                                totalProgress={
                                  data &&
                                  data.filter((el) => el?.story?.literation?._id === element?.literation?._id).length
                                }
                              />
                            );
                          })}
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
