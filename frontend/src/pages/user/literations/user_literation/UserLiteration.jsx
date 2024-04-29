import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLiterationAdded, getLiterationByUserId } from "../../../../redux/action/literationAddedAction";
import { userData } from "../../../../redux/action/userAction";
import LiterationList from "../../../../component/LiterationList";

function UserLiteration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()

  const { dataUser, isLoadingUser } = useSelector((state) => state.literationAdded);

  const user = useSelector((state) => state.user.data);

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
  return (
    <main className="w-full min-h-screen bg-white font-poppins pb-24 md:pb-0">
      <section id="populerGenre" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-16 pt-4 md:pt-32">
          <div className="w-full flex items-start md:items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <div className="h-12 w-[2px] bg-purple-dark rounded-lg me-2"></div>
              <div>
                <h2 className="text-base sm:text-2xl text-slate-700">Koleksi</h2>
                <h2 className="text-base sm:text-2xl text-slate-700 font-bold">Literasi</h2>
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
            {isLoadingUser ? (
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
              dataUser &&
              dataUser.map((element) => {
                return (
                  <div key={element._id}>
                    <LiterationList
                      id={element.literation._id}
                      title={element.literation.title}
                      author={element.literation.author.name}
                      genre={element.literation.genre.name}
                      image={element.literation.picture}
                      rating={element.literation.rating}
                      slug={element.literation.slug}
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

export default UserLiteration;
