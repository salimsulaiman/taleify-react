import React from "react";
import { useNavigate } from "react-router-dom";

function StoryList({ title, status, index, score, idStory }) {
  const navigate = useNavigate();
  const storyNav = () => {
    navigate(`/user/literations/story/${idStory}`);
  };
  index + 1;
  return (
    <div className="w-full bg-white rounded-xl border-2 border-slate-200 py-4 px-6 mb-4">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 flex-col justify-center">
          <h4 className="text-xs text-slate-400">Literasi {index}</h4>
          <h4 className="text-sm sm:text-base text-slate-500 hidden md:block">{title}</h4>
          <a href="">
            <h4 className="text-sm sm:text-base text-slate-500 block md:hidden hover:text-purple-light">{title}</h4>
          </a>
        </div>
        <div className="flex md:grid grid-cols-3 gap-4 p-0 md:p-4">
          <div className="flex flex-col items-center">
            <h4 className="text-xs text-slate-400 text-center hidden md:block">Status Literasi</h4>
            <h4
              className={`text-xs bg-slate-100 px-2 py-1 rounded-md border-[1px] text-center ${
                status == "0" ? "text-slate-500 border-slate-500 mt-2" : "text-green-700 border-green-700 mt-2"
              }`}
            >
              {status == "0" ? "Belum Selesai" : "Selesai"}
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xs text-slate-400 hidden md:block">Skor</h4>
            <h4 className="text-xs bg-yellow-300 text-yellow-700 px-2 py-1 rounded-md border-[1px] border-yellow-700 mt-2">
              {score}
            </h4>
          </div>
          <div className="hidden md:flex h-full">
            <button
              onClick={storyNav}
              className={`text-sm px-4 py-2 rounded-xl  border-2 text-center ${
                status == 0
                  ? "text-slate-500 border-slate-500 bg-slate-100 cursor-not-allowed"
                  : "text-purple-light border-purple-light hover:bg-purple-light hover:text-white cursor-pointer"
              }`}
            >
              Lihat Cerita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryList;
