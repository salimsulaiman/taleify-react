import React, { useEffect, useState } from "react";
import LiterationList from "../../../../component/LiterationList";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredData, getLiteration } from "../../../../redux/action/literationAction";
import ImageLoad from "../../../../assets/image/imageload.png";
import { useLocation } from "react-router-dom";
import { getGenre } from "../../../../redux/action/genreAction";

function SearchLiteration() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const [filterGenre, setFilterGenre] = useState("All");

  const { filteredData, isLoadingFiltered } = useSelector((state) => state.literation);
  const dataGenre = useSelector((state) => state.genre.data);
  const isLoadingGenre = useSelector((state) => state.genre.isLoading);

  const slugToNormalString = (slug) => {
    const words = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(" ");
  };

  const setGenre = (filter) => {
    setFilterGenre(filter);
  };

  useEffect(() => {
    dispatch(getGenre());
  }, [location]);

  useEffect(() => {
    dispatch(fetchFilteredData(title));
  }, [title, dispatch, location]);
  return (
    <main className="w-full min-h-screen bg-white font-poppins pb-24 md:pb-0">
      <section id="populerGenre" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-16 pt-4 md:pt-32">
          <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
              <div>
                <h2 className="text-base sm:text-2xl text-slate-700">Pencarian</h2>
                <h2 className="text-base sm:text-2xl text-slate-700 font-bold">{slugToNormalString(title)}</h2>
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
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block md:hidden mt-6"
              onChange={(e) => setFilterGenre(e.target.value)}
              value={filterGenre}
            >
              <option value={"All"}>-- Genre --</option>
              <option value="All">Semua</option>
              {dataGenre &&
                dataGenre.map((el) => {
                  return (
                    <option key={el?._id} value={el?.name}>
                      {el?.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-5 md:mt-11">
            {isLoadingFiltered ? (
              <LiterationList
                id={null}
                title={null}
                author={null}
                genre={null}
                image={ImageLoad}
                rating={null}
                slug={null}
              />
            ) : filteredData && filteredData.length > 0 ? (
              filteredData
                .filter((el) => filterGenre === "All" || el.genre?.name === filterGenre)
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
            ) : (
              <div className="w-full flex justify-center items-center col-span-12 min-h-32">
                <p className="text-center text-slate-600 font-medium text-xl">Literasi tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SearchLiteration;
