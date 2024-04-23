import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion, getQuestionyByStoryId } from "../../../../redux/action/questionAction";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { addUserAnswer, getUserAnswerByUser } from "../../../../redux/action/userAnswerAction";

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataDetail, isLoadingDetail } = useSelector((state) => state.question);
  const user = useSelector((state) => state.user.data);
  const userAnswer = useSelector((state) => state.userAnswer.dataDetail);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (user && user._id) {
      localStorage.setItem("userId", user._id);
    }
  }, [user]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && id) {
      dispatch(getUserAnswerByUser(userId, id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getQuestionyByStoryId(id));
  }, []);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const previous = () => {
    navigate(-1);
  };

  const saveAnswer = () => {
    if (selectedAnswer == dataDetail?.correct_answer) {
      alert("Selamat Jawabanmu Benar");
    } else {
      alert("Maaf Jawabanmu salah");
    }

    const userId = localStorage.getItem("userId");

    dispatch(addUserAnswer(userId, dataDetail?._id, selectedAnswer)).then(
      navigate(`/user/literations/detail/${dataDetail?.story?.literation?._id}`)
    );
  };

  if (userAnswer?.userAnswer == null) {
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
              <h4 className="text-slate-500 text-sm font-semibold mb-2 line-clamp-1">
                {dataDetail?.story?.literation?.title}
              </h4>
              <h1 className="text-slate-600 text-xl font-semibold line-clamp-1">{dataDetail?.story?.subTitle}</h1>
            </div>
            <div className="w-full bg-white h-auto rounded-xl p-11 flex flex-col items-start justify-center mb-4">
              <h4 className="w-full text-slate-500 text-base mb-8 text-center">{dataDetail?.question}</h4>
              <div className="grid grid-cols-1 w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto gap-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="answerOption1"
                    name="answerOptions"
                    value="A"
                    onChange={handleAnswerChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="answerOption1"
                    className="text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start bg-slate-100 hover:bg-slate-200 p-4 rounded-lg border-2 border-slate-200 checked:bg-purple-light focus:outline-none focus:border-purple-light"
                  >
                    <span
                      className={`${
                        selectedAnswer == "A" ? "bg-white text-purple-light" : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      A
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[0]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="answerOption2"
                    name="answerOptions"
                    value="B"
                    onChange={handleAnswerChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="answerOption2"
                    className="text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start bg-slate-100 hover:bg-slate-200 p-4 rounded-lg border-2 border-slate-200 checked:bg-purple-light focus:outline-none focus:border-purple-light"
                  >
                    <span
                      className={`${
                        selectedAnswer == "B" ? "bg-white text-purple-light" : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      B
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[1]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="answerOption3"
                    name="answerOptions"
                    value="C"
                    onChange={handleAnswerChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="answerOption3"
                    className="text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start bg-slate-100 hover:bg-slate-200 p-4 rounded-lg border-2 border-slate-200 checked:bg-purple-light focus:outline-none focus:border-purple-light"
                  >
                    <span
                      className={`${
                        selectedAnswer == "C" ? "bg-white text-purple-light" : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      C
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[2]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="answerOption4"
                    name="answerOptions"
                    value="D"
                    onChange={handleAnswerChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="answerOption4"
                    className="text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start bg-slate-100 hover:bg-slate-200 p-4 rounded-lg border-2 border-slate-200 checked:bg-purple-light focus:outline-none focus:border-purple-light"
                  >
                    <span
                      className={`${
                        selectedAnswer == "D" ? "bg-white text-purple-light" : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      D
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[3]}</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-r from-purple-light to-purple-dark hover:from-purple-dark hover:to-purple-semi-dark px-4 py-2 text-white rounded-xl"
              onClick={saveAnswer}
            >
              Selesai
            </button>
          </div>
        </section>
      </main>
    );
  } else {
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
              <h4 className="text-slate-500 text-sm font-semibold mb-2 line-clamp-1">
                {dataDetail?.story?.literation?.title}
              </h4>
              <h1 className="text-slate-600 text-xl font-semibold line-clamp-1">{dataDetail?.story?.subTitle}</h1>
            </div>
            <div className="w-full bg-white h-auto rounded-xl p-11 flex flex-col items-start justify-center mb-4">
              <h4 className="w-full text-slate-500 text-base mb-8 text-center">{dataDetail?.question}</h4>
              <div className="grid grid-cols-1 w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto gap-4">
                <div className="flex items-center mb-2">
                  <input type="radio" id="answerOption1" name="answerOptions" value="A" className="hidden" disabled />

                  <label
                    htmlFor="answerOption1"
                    className={`text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start ${
                      userAnswer?.userAnswer?.userAnswer == "A"
                        ? "bg-purple-light text-white"
                        : dataDetail?.correct_answer == "A"
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    } p-4 rounded-lg border-2 border-slate-200`}
                  >
                    <span
                      className={`${
                        userAnswer?.userAnswer?.userAnswer === "A"
                          ? "bg-white text-purple-light"
                          : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      A
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[0]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="answerOption2" name="answerOptions" value="B" className="hidden" disabled />
                  <label
                    htmlFor="answerOption1"
                    className={`text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start ${
                      userAnswer?.userAnswer?.userAnswer == "B"
                        ? "bg-purple-light text-white"
                        : dataDetail?.correct_answer == "B"
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    } p-4 rounded-lg border-2 border-slate-200`}
                  >
                    <span
                      className={`${
                        userAnswer?.userAnswer?.userAnswer === "B"
                          ? "bg-white text-purple-light"
                          : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      A
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[1]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="answerOption3" name="answerOptions" value="C" className="hidden" disabled />
                  <label
                    htmlFor="answerOption1"
                    className={`text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start ${
                      userAnswer?.userAnswer?.userAnswer == "C"
                        ? "bg-purple-light text-white"
                        : dataDetail?.correct_answer == "C"
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    } p-4 rounded-lg border-2 border-slate-200`}
                  >
                    <span
                      className={`${
                        userAnswer?.userAnswer?.userAnswer === "C"
                          ? "bg-white text-purple-light"
                          : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      A
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[2]}</span>
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="answerOption4" name="answerOptions" value="D" className="hidden" disabled />
                  <label
                    htmlFor="answerOption1"
                    className={`text-sm md:text-base text-slate-500 cursor-pointer flex w-full items-center justify-start ${
                      userAnswer?.userAnswer?.userAnswer == "D"
                        ? "bg-purple-light text-white"
                        : dataDetail?.correct_answer == "D"
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    } p-4 rounded-lg border-2 border-slate-200`}
                  >
                    <span
                      className={`${
                        userAnswer?.userAnswer?.userAnswer === "D"
                          ? "bg-white text-purple-light"
                          : "bg-purple-light text-white"
                      } h-8 w-8 flex justify-center items-center rounded-full p-4 me-4`}
                    >
                      A
                    </span>
                    <span>{dataDetail?.answer && dataDetail?.answer[3]}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Question;
