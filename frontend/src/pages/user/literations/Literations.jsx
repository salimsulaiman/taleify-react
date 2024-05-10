import React, { useEffect, useState } from "react";
import NavApp from "../../../component/NavApp";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { StarIcon } from "@heroicons/react/16/solid";
import LiterationList from "../../../component/LiterationList";
import { useDispatch, useSelector } from "react-redux";
import { getLiteration, getLiterationById } from "../../../redux/action/literationAction";
import ImageLoad from "../../../assets/image/imageload.png";
import {
  addUserLiteration,
  deleteUserLiteration,
  getLiterationAddedById,
} from "../../../redux/action/literationAddedAction";
import { userData } from "../../../redux/action/userAction";

function Literations() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.literation);
  const { dataDetail, isLoadingDetail } = useSelector((state) => state.literation);
  const literationAdded = useSelector((state) => state.literationAdded.dataDetail);
  const isLoadingLiteration = useSelector((state) => state.literationAdded.isLoadingDetail);
  const user = useSelector((state) => state.user.data);
  const isLoadingUser = useSelector((state) => state.user.isLoading);

  const expanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    dispatch(getLiteration());
  }, [location]);

  useEffect(() => {
    dispatch(getLiterationById(id));
  }, [id, location]);

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
    if (userId && id) {
      dispatch(getLiterationAddedById(userId, id));
    }
  }, [id, dispatch]);

  const openLiteration = () => {
    navigate(`/user/literations/detail/${id}`);
  };

  const addLiteration = () => {
    const userId = localStorage.getItem("userId");
    if (user && user?.verified == false) {
      alert("Harap verifikasi terlebih dahulu akun anda");
    } else {
      if (userId && dataDetail?._id) {
        dispatch(addUserLiteration(userId, dataDetail?._id)).then(() => {
          dispatch(userData());
        });
        dispatch(getLiterationById(id));
        dispatch(getLiteration());
      }
    }
  };

  const deleteLiteration = () => {
    alert("Berhasil dihapus");
    const idLiterationAdded = literationAdded[0]?._id;
    dispatch(deleteUserLiteration(idLiterationAdded));
    dispatch(userData());
    dispatch(getLiterationById(id));
    dispatch(getLiteration());
  };

  return (
    <main className="w-full min-h-screen bg-white font-poppins">
      <section id="literarion-item" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-5 pt-14">
          <div className="w-full bg-slate-100 border-2 border-slate-200 min-h-[343px] mt-[193px] relative rounded-lg p-4">
            <div className="w-full md:w-11/12 grid grid-cols-2 lg:grid-cols-4 h-full gap-6 mx-auto">
              <div className="row-span-4 lg:row-span-1 col-span-4 lg:col-span-1 relative">
                <div className="absolute h-[200px] lg:h-[407px] w-full bottom-0 lg:-top-28 left-1/2 -translate-x-1/2 rounded-lg overflow-hidden">
                  {isLoadingDetail ? (
                    <img src={ImageLoad} alt="cover.png" className="object-cover object-bottom h-full w-full" />
                  ) : (
                    dataDetail && (
                      <img
                        src={dataDetail.picture}
                        alt={dataDetail.picture}
                        className="object-cover object-bottom h-full w-full"
                      />
                    )
                  )}
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3 p-0 pb-2 lg:p-4 lg:pb-0 overflow-ellipsis relative flex justify-center flex-col">
                {dataDetail && (
                  <h1 className="text-slate-700 text-lg md:text-3xl font-semibold mb-4 line-clamp-none lg:line-clamp-1">
                    {dataDetail.title}
                  </h1>
                )}

                {dataDetail && dataDetail.author && (
                  <h4 className="text-sm text-slate-400 mb-4">{dataDetail.author.name}</h4>
                )}

                {dataDetail && (
                  <h3
                    className={`text-sm md:text-base text-slate-500 ${
                      isExpanded ? "line-clamp-none" : "line-clamp-4"
                    } text-justify mb-4`}
                  >
                    {dataDetail.desc}
                  </h3>
                )}

                <h4 className="text-sm text-cyan-600 mb-4 cursor-pointer" onClick={expanded}>
                  {isExpanded ? "Sembunyikan" : "Lihat Selengkapnya"}
                </h4>
                {dataDetail && dataDetail.genre && (
                  <div className="flex mb-4">
                    <div className="bg-purple-light-400 text-purple-dark text-xs font-bold text-center rounded-md py-2 px-4 me-1">
                      {dataDetail.genre.name}
                    </div>

                    <div className="bg-yellow-200 text-yellow-500 text-xs font-bold text-center rounded-md py-2 px-4 ms-1 flex items-center justify-center">
                      <StarIcon className="h-3 me-1" />
                      {dataDetail.rating}
                    </div>
                  </div>
                )}

                <div className="flex static lg:absolute -top-10">
                  {!isLoadingLiteration && literationAdded && literationAdded != null ? (
                    <div className="flex w-full">
                      <button
                        className="bg-gradient-to-r from-purple-light to-purple-semi-dark text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-base me-4 flex-grow sm:flex-grow-0"
                        onClick={openLiteration}
                      >
                        Buka Literasi
                      </button>
                      <button
                        className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-base me-4 flex-grow sm:flex-grow-0"
                        onClick={deleteLiteration}
                      >
                        Hapus
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <button
                        className="bg-gradient-to-r from-purple-light to-purple-semi-dark text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-base flex-grow sm:flex-grow-0"
                        onClick={addLiteration}
                      >
                        Tambahkan Literasi
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="populerGenre" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-5 pt-14 md:pb-14">
          <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
              <div>
                <h2 className="text-base sm:text-2xl text-slate-700">Genre</h2>
                <h2 className="text-base sm:text-2xl text-slate-700 font-bold">Populer</h2>
              </div>
            </div>
            <ul className="hidden md:flex text-slate-500 text-base">
              <li className="ms-5">Semua</li>
              <li className="ms-5">Fiksi</li>
              <li className="ms-5">Sejarah</li>
              <li className="ms-5">Akademis</li>
              <li className="ms-5">Romantis</li>
              <li className="ms-5">Horror</li>
            </ul>
            <select
              defaultValue={"Semua"}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block md:hidden mt-6"
            >
              <option value={"Semua"}>-- Genre --</option>
              <option value="Semua">Semua</option>
              <option value="Fiksi">Fiksi</option>
              <option value="Sejarah">Sejarah</option>
              <option value="Akademis">Akademis</option>
              <option value="Romantis">Romantis</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5 md:mt-11">
            {isLoading ? (
              <LiterationList
                id={null}
                title={null}
                author={null}
                genre={null}
                image={ImageLoad}
                rating={null}
                slug={null}
              />
            ) : (
              data &&
              data.map((element) => {
                return (
                  <div key={element._id}>
                    <LiterationList
                      id={element._id}
                      title={element.title}
                      author={element.author.name}
                      genre={element.genre.name}
                      image={element.picture}
                      rating={element.rating}
                      slug={element.slug}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Literations;
