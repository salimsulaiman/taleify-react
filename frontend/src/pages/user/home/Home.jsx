import React, { useEffect, useState } from "react";
import Fantasy from "../../../assets/image/fantasy.jpg";
import ImageLoad from "../../../assets/image/imageload.png";

// import swiper core and required module
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swipper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useLocation, useNavigate } from "react-router-dom";
import NavApp from "../../../component/NavApp";
import CardLiteration from "../../../component/CardLiteration";
import LiterationList from "../../../component/LiterationList";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getLiteration } from "../../../redux/action/literationAction";
import { getGenre } from "../../../redux/action/genreAction";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [filterGenre, setFilterGenre] = useState("All");

  const { data, isLoading } = useSelector((state) => state.literation);
  const dataGenre = useSelector((state) => state.genre.data);
  const isLoadingGenre = useSelector((state) => state.genre.isLoading);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika tidak ada token, arahkan kembali ke halaman login
      navigate("/user/signin");
    }
  }, []);

  const setGenre = (filter) => {
    setFilterGenre(filter);
  };

  useEffect(() => {
    dispatch(getGenre());
  }, [location]);

  useEffect(() => {
    dispatch(getLiteration());
  }, [location]);

  return (
    <main className="w-full min-h-screen bg-white font-poppins pb-24 md:pb-0">
      <section id="recomendation" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pt-5 md:px-9 md:pt-5 lg:px-9 lg:pt-5">
          <div className="w-full h-[150px] sm:h-[257px] bg-slate-500 rounded-lg overflow-hidden mt-20 sm:mt-24 relative">
            <img src={Fantasy} alt="recomendation" className="object-bottom object-cover h-full w-full" />
            <div className="bg-black absolute z-10 right-0 left-0 bottom-0 top-0 p-5 flex flex-col justify-center sm:justify-end items-start bg-opacity-40 text-white">
              <h2 className="text-lg sm:text-2xl line-clamp-2">Bridges of Unitiy: Guardian of One World</h2>
              <h4 className="text-xs sm:text-base line-clamp-2">
                Baca cerita Superhero pencipta kesatuan dan perdamaian di Taleify
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section id="populer" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 py-5 md:py-14">
          <div className="flex items-center">
            <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
            <div>
              <h2 className="text-base sm:text-2xl text-slate-700">Literasi</h2>
              <h2 className="text-base sm:text-2xl text-slate-700 font-bold">Populer</h2>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center flex-col w-full min-h-[300px] relative">
            <div className="hidden md:block absolute blur-side-left left-0 top-0 bottom-0 w-20 z-10"></div>
            <Swiper
              initialSlide={2}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="w-full"
            >
              {isLoading ? (
                <div></div>
              ) : (
                data &&
                data.map((element) => {
                  return (
                    <SwiperSlide key={element._id}>
                      <CardLiteration
                        deskripsi={element.desc}
                        title={element.title}
                        genre={element.genre.name}
                        image={element.picture}
                      />
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
            <div className="hidden md:block absolute blur-side-right right-0 top-0 bottom-0 w-20 z-10"></div>
          </div>
        </div>
      </section>
      <section id="populerGenre" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-5 pt-5 md:pb-14 md:pt-0">
          <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
              <div>
                <h2 className="text-base sm:text-2xl text-slate-700">Genre</h2>
                <h2 className="text-base sm:text-2xl text-slate-700 font-bold">Populer</h2>
              </div>
            </div>
            <ul className="hidden md:flex text-slate-500 text-base">
              <li
                className={`ms-5 cursor-pointer ${
                  filterGenre === "All" ? "text-purple-semi-dark font-bold" : "hover:text-purple-semi-dark"
                }`}
                onClick={() => setGenre("All")}
              >
                Semua
              </li>
              {dataGenre &&
                dataGenre.slice(0, 5).map((el) => {
                  return (
                    <li
                      className={`ms-5 cursor-pointer ${
                        filterGenre === el.name ? "text-purple-semi-dark font-bold" : "hover:text-purple-semi-dark"
                      }`}
                      key={el._id}
                      onClick={() => setGenre(`${el.name}`)}
                    >
                      {el.name}
                    </li>
                  );
                })}
            </ul>
            <select
              onChange={(e) => setFilterGenre(e.target.value)}
              defaultValue={"Semua"}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block md:hidden mt-6"
            >
              <option value={"All"}>-- Genre --</option>
              <option value="All">Semua</option>
              {dataGenre &&
                dataGenre.map((el) => {
                  return (
                    <option key={el._id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
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
            ) : data &&
              (filterGenre === "All" ? data : data.filter((el) => el.genre?.name === filterGenre)).length === 0 ? (
              <div className="w-full flex justify-center items-center col-span-12 min-h-32">
                <p className="text-center text-slate-600 font-medium text-xl">Literasi tidak ditemukan</p>
              </div>
            ) : (
              data
                .filter((el) => {
                  if (filterGenre === "All") {
                    return true;
                  } else {
                    return el.genre?.name === filterGenre;
                  }
                })
                .map((element) => (
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
                ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
