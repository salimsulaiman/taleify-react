import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

function CardLiteration({ deskripsi, title, genre, image, id }) {
  const navigate = useNavigate();

  const navigatePage = (id) => {
    navigate(`/user/literations/${id}`);
  };
  return (
    <div className="w-auto h-[400px] lg:h-[284px] bg-slate-100 rounded-lg border-2 border-slate-200 py-7 px-6 flex flex-col lg:flex-row justify-between items-start relative">
      <div className="min-w-[173px] w-full lg:w-[173px] h-[200px] lg:h-full bg-purple-light rounded-lg me-8 lg:relative overflow-hidden">
        <img src={image} alt="coverimage" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex-grow flex items-start justify-start flex-col mt-4 lg:mt-0">
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
            <h4 className="text-sm md:text-base font-bold text-slate-700 mb-1 line-clamp-1">{title}</h4>
            <p className="text-xs md:text-sm text-slate-500 text-justify line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
              {deskripsi}
            </p>
          </div>
          <button
            className="w-full bg-purple-light hover:bg-purple-semi-dark px-4 py-2 text-center text-white rounded-md mt-3 text-xs md:text-base"
            onClick={() => navigatePage(id)}
          >
            Tambahkan Literasi
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLiteration;
