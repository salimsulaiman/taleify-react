import React from "react";
import { Link } from "react-router-dom";

function ListProgress({ title, src, genre, progress, totalProgress, id }) {
  const progressBar = Math.round((progress / totalProgress) * 100) + "%";
  return (
    <div className="w-full h-[108px] bg-slate-100 border-2 border-slate-200 rounded-2xl flex justify-between overflow-hidden gap-4 mb-4 relative sm:static">
      <div className="w-full sm:w-9/12 h-full flex items-center flex-col sm:flex-row me-0 sm:me-8 relative sm:static">
        <div className="bg-gradient-to-r from-transparent to-slate-100 w-full sm:w-5/12 h-full me-6 skew-x-0 sm:skew-x-[10deg] relative left-0 sm:-left-4">
          <img
            src={src}
            alt={src}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute sm:static flex flex-col w-full sm:w-7/12 h-full sm:h-auto justify-center p-5 sm:p-0">
          <Link to={`/user/literations/${id}`}>
            <h1 className="text-white sm:text-slate-700 font-semibold line-clamp-1 mb-2 text-sm sm:text-base">
              {title}
            </h1>
          </Link>
          <div>
            <div className="bg-purple-light-400 px-4 py-2 text-[10px] sm:text-xs rounded-md text-center text-purple-dark font-bold inline-block">
              {genre}
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/12 h-full flex flex-col justify-center me-8">
        <div className="text-xs text-slate-400 mb-2">Progress</div>
        <div className="h-2 w-full bg-slate-300 rounded-full overflow-hidden mb-2">
          <div
            className={`bg-green-500 h-full`}
            style={{ width: progressBar }}
          ></div>
        </div>
        <h4 className="text-xs text-slate-400">
          {progress}/{totalProgress}
        </h4>
      </div>
    </div>
  );
}

export default ListProgress;
