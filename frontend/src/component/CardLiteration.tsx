import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";

function CardLiteration({ deskripsi, title, genre, image }) {
  return (
    <div className="w-auto h-[284px] bg-slate-100 rounded-lg border-2 border-slate-200 py-7 px-6 flex justify-between items-start">
      <div className="min-w-[173px] max-w-[50px] sm:max-w-[173px] h-full bg-purple-light rounded-lg me-8 relative overflow-hidden">
        <img src={image} alt="coverimage" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex-grow flex items-start justify-start flex-col">
        <div className="flex mb-3">
          <div className="min-w-[71px] h-[31px] bg-purple-light-400 px-4 py-2 text-xs rounded-md text-center text-purple-dark font-bold me-4">
            {genre}
          </div>
          <div className="w-[71px] h-[31px] bg-yellow-200 px-4 py-2 text-xs rounded-md text-center text-yellow-500 font-bold flex items-center justify-center">
            <StarIcon className="h-3 me-1" />
            <h4>4.6</h4>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between items-start">
          <div>
            <h4 className="font-bold text-slate-700 mb-1 line-clamp-1">{title}</h4>
            <p className="text-sm text-slate-500 text-justify block line-clamp-2 sm:line-clamp-4 md:line-clamp-5">
              {deskripsi}
            </p>
          </div>
          <button className="w-full bg-purple-light hover:bg-purple-semi-dark px-4 py-2 text-center text-white rounded-md mt-3 text-xs md:text-base">
            Tambahkan Literasi
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLiteration;
