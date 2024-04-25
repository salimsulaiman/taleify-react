import React, { useEffect } from 'react'
import LiterationList from '../../../../component/LiterationList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredData, getLiteration } from '../../../../redux/action/literationAction';
import ImageLoad from "../../../../assets/image/imageload.png";
import { useLocation } from 'react-router-dom';

function SearchLiteration() {
  const dispatch = useDispatch()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");

  const { filteredData, isLoadingFiltered } = useSelector((state) => state.literation);

    
  useEffect(() => {
    dispatch(fetchFilteredData(title));
  }, [title]);
  return (
    <main className="w-full min-h-screen bg-white font-poppins pb-24 md:pb-0">
     <section id="populerGenre" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-16 pt-4 md:pt-32">
          <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
              <div>
                <h2 className="text-base sm:text-2xl text-slate-700">Pencarian</h2>
                <h2 className="text-base sm:text-2xl text-slate-700 font-bold">{title}</h2>
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
            ) : (
              filteredData &&
              filteredData.map((element) => {
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
  )
}

export default SearchLiteration