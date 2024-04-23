import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoryById } from "../../../../redux/action/storyAction";
import { useNavigate, useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

function Story() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.story.dataDetail);

  const next = () => {
    navigate(`/user/literations/question/${id}`);
  };

  useEffect(() => {
    dispatch(getStoryById(id));
  }, [id, location]);

  const previous = () => {
    navigate(-1);
  };

  const htmlString = `${data?.story}`;
  const story = HTMLReactParser(htmlString);
  return (
    <main className="w-full min-h-screen bg-slate-100 font-poppins">
      <section id="story" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-28 md:pb-16 pt-20 md:pt-32">
          <div className="w-full bg-white h-24 rounded-xl py-5 px-7 flex flex-col items-start justify-center mb-4 relative">
            <div
              className="absolute h-8 w-8 rounded-full bg-slate-400 -left-3 top-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer overflow-hidden"
              onClick={previous}
            >
              <ArrowLeftCircleIcon className="bg-slate-400 text-white" />
            </div>
            <h4 className="text-slate-500 text-sm font-semibold mb-2 line-clamp-1">{data?.literation?.title}</h4>
            <h1 className="text-slate-600 text-xl font-semibold line-clamp-1">{data?.subTitle}</h1>
          </div>
          <div className="w-full bg-white h-auto rounded-xl p-11 flex flex-col items-start justify-center mb-4 text-xs sm:text-sm md:text-base leading-loose story">
            {story}
          </div>
          <button
            onClick={next}
            className="w-full bg-gradient-to-r from-purple-light to-purple-dark hover:from-purple-dark hover:to-purple-semi-dark px-4 py-2 text-white rounded-xl"
          >
            Selesai Membaca
          </button>
        </div>
      </section>
    </main>
  );
}

export default Story;
