import { StarIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageLoad from "../../../../assets/image/imageload.png";
import BorringIcon from "../../../../assets/image/iconrating/1.png";
import NotEngagingIcon from "../../../../assets/image/iconrating/2.png";
import OkayIcon from "../../../../assets/image/iconrating/3.png";
import EngagingIcon from "../../../../assets/image/iconrating/4.png";
import VeryEngagingIcon from "../../../../assets/image/iconrating/5.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userData } from "../../../../redux/action/userAction";
import { getLiterationById } from "../../../../redux/action/literationAction";
import { getLiterationAddedById } from "../../../../redux/action/literationAddedAction";
import {
  getStory,
  getStoryById,
  getStoryByIdLiteration,
} from "../../../../redux/action/storyAction";
import StoryList from "../../../../component/StoryList";
import { getUserAnswerByUserId } from "../../../../redux/action/userAnswerAction";
import { getQuestion } from "../../../../redux/action/questionAction";
import {
  addRating,
  getRatingByUserLiteration,
} from "../../../../redux/action/ratingAction";
import { IoCloseCircle } from "react-icons/io5";

function LiterationDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [closeToast, setCloseToast] = useState(false);
  const [icons, setIcons] = useState([
    {
      img: BorringIcon,
      desc: "Sangat Membosankan",
      rating: 1,
    },
    {
      img: NotEngagingIcon,
      desc: "Kurang Menarik",
      rating: 2,
    },
    {
      img: OkayIcon,
      desc: "Bagus",
      rating: 3,
    },
    {
      img: EngagingIcon,
      desc: "Menarik",
      rating: 4,
    },
    {
      img: VeryEngagingIcon,
      desc: "Sangat Menarik",
      rating: 5,
    },
  ]);

  const [selectedRating, setSelectedRating] = useState({
    desc: null,
    rating: null,
  });

  const modalRef = useRef(null);

  const { dataDetail, isLoadingDetail } = useSelector(
    (state) => state.literation
  );
  const literationAdded = useSelector(
    (state) => state.literationAdded.dataDetail
  );
  const isLoadingLiteration = useSelector(
    (state) => state.literationAdded.isLoadingDetail
  );
  const dataStory = useSelector((state) => state.story.data);
  const dataStoryLiteration = useSelector(
    (state) => state.story.dataLiteration
  );
  const user = useSelector((state) => state.user.data);
  const { dataUserId, isLoadingUserId } = useSelector(
    (state) => state.userAnswer
  );
  const { data, isLoading } = useSelector((state) => state.question);
  const dataRating = useSelector((state) => state.rating.data);
  const dataDetailRating = useSelector((state) => state.rating.dataDetail);
  const dataDetailRatingUserLiteration = useSelector(
    (state) => state.rating.dataUserLiteration
  );

  const expanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    dispatch(getLiterationById(id));
  }, [id, location]);

  useEffect(() => {
    dispatch(getStory());
  }, [id, location]);

  useEffect(() => {
    dispatch(getStoryByIdLiteration(id));
  }, [id, location]);

  useEffect(() => {
    dispatch(userData());
  }, []);

  useEffect(() => {
    dispatch(getQuestion());
  }, [location]);

  useEffect(() => {
    if (user && user._id) {
      localStorage.setItem("userId", user._id);
    }
  }, [user]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && id) {
      dispatch(getLiterationAddedById(userId, id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && id) {
      dispatch(getUserAnswerByUserId(userId));
    }
  }, [id, dispatch]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId && id) {
      dispatch(getRatingByUserLiteration(userId, id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (
      id &&
      dataUserId &&
      dataStoryLiteration &&
      dataUserId.filter((item) => item?.question?.story?.literation === id)
        ?.length > 0 &&
      dataStoryLiteration?.length > 0 &&
      dataUserId.filter((item) => item?.question?.story?.literation === id)
        ?.length === dataStoryLiteration.length
    ) {
      if (dataDetailRatingUserLiteration === null) {
        modalRef.current.showModal();
      }
    }
  }, [id, dataUserId, dataStoryLiteration, dataDetailRatingUserLiteration]);

  const openLiteration = () => {};
  const deleteLiteration = () => {};
  const addLiteration = () => {};
  const handleRating = (desc, rating) => {
    setSelectedRating({
      desc: desc,
      rating: rating,
    });
  };
  const handleSendRating = (rating) => {
    if (selectedRating.desc == null && selectedRating.rating == null) {
      alert("Silahkan nilai kami dengan klik emoticon");
    } else {
      dispatch(addRating(rating, id, user?._id)).then((response) => {
        dispatch(getLiterationById(id));
        dispatch(getStory());
        dispatch(getStoryByIdLiteration(id));
        dispatch(userData());
        dispatch(getQuestion());
        dispatch(getLiterationAddedById(user?._id, id));
        dispatch(getUserAnswerByUserId(user?._id));
        modalRef.current.close();
        alert("Terimakasih atas feedbacknya");
      });
    }
  };
  return (
    <main className="w-full min-h-screen bg-white font-poppins pb-16 md:pb-0">
      <dialog id="ratingModal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Kamu telah menyelesaikan semua cerita
          </h3>
          <p className="py-4 text-center">Gimana pendapatmu tentang cerita</p>
          <p className="text-center">
            <b>{dataDetail?.title}</b>?
          </p>
          <div className="flex flex-wrap items-center justify-center mt-5">
            {icons.map((icon, index) => {
              return (
                <div key={index}>
                  <img
                    src={icon?.img}
                    alt={icon.desc}
                    width={"40px"}
                    className="mx-2 cursor-pointer"
                    onClick={() => handleRating(icon.desc, icon.rating)}
                  />
                </div>
              );
            })}
          </div>
          <div className="font-bold text-center mt-4">
            {selectedRating.desc}
          </div>
          <div className="text-center mt-4">
            <button
              className="bg-purple-light px-4 py-2 rounded-lg text-white hover:bg-purple-dark"
              onClick={() => handleSendRating(selectedRating.rating)}
            >
              Kirim
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <section id="literarion-item" className="w-full">
        <div className="max-w-screen-xl mx-auto px-9 pb-16 pt-4 md:pt-14">
          <div className="w-full bg-slate-100 border-2 border-slate-200 min-h-[343px] mt-[193px] relative rounded-lg px-4 pt-4 pb-8">
            <div className="w-full md:w-11/12 grid grid-cols-2 lg:grid-cols-4 h-full gap-6 mx-auto">
              <div className="row-span-4 lg:row-span-1 col-span-4 lg:col-span-1 relative">
                <div className="absolute h-[200px] lg:h-[407px] w-full bottom-0 lg:-top-28 left-1/2 -translate-x-1/2 rounded-lg overflow-hidden">
                  {isLoadingDetail ? (
                    <img
                      src={ImageLoad}
                      alt="cover.png"
                      className="object-cover object-bottom h-full w-full"
                    />
                  ) : (
                    dataDetail && (
                      <img
                        src={dataDetail.picture}
                        alt={dataDetail.picture}
                        className="object-cover object-bottom h-full w-full"
                      />
                    )
                  )}
                </div>
              </div>
              <div className="col-span-4 lg:col-span-3 p-0 pb-2 lg:p-4 lg:pb-0 overflow-ellipsis relative flex justify-center flex-col">
                {dataDetail && (
                  <h1 className="text-slate-700 text-lg md:text-3xl font-semibold mb-4 line-clamp-none lg:line-clamp-1">
                    {dataDetail.title}
                  </h1>
                )}

                {dataDetail && dataDetail.author && (
                  <h4 className="text-sm text-slate-400 mb-4">
                    {dataDetail.author.name}
                  </h4>
                )}

                {dataDetail && (
                  <h3
                    className={`text-sm md:text-base text-slate-500 ${
                      isExpanded ? "line-clamp-none" : "line-clamp-4"
                    } text-justify mb-4`}
                  >
                    {dataDetail.desc}
                  </h3>
                )}
                <h4
                  className="text-sm text-cyan-600 mb-4 cursor-pointer"
                  onClick={expanded}
                >
                  {isExpanded ? "Sembunyikan" : "Lihat Selengkapnya"}
                </h4>
                <div className="flex mb-4">
                  <div className="bg-purple-light-400 text-purple-dark text-xs font-bold text-center rounded-md py-2 px-4 me-1">
                    {dataDetail?.genre?.name}
                  </div>
                  <div className="bg-yellow-200 text-yellow-500 text-xs font-bold text-center rounded-md py-2 px-4 ms-1 flex items-center justify-center">
                    <StarIcon className="h-3 me-1" />
                    {dataDetail?.rating}
                  </div>
                </div>
<<<<<<< HEAD
                {/* <div className="flex static lg:absolute -top-10">
                  {!isLoadingLiteration && literationAdded && literationAdded != null ? (
=======
                <div className="flex static lg:absolute -top-10">
                  {!isLoadingLiteration &&
                  literationAdded &&
                  literationAdded != null ? (
>>>>>>> b8aeda6dc92a7067d073a02dad52bb8398f47b09
                    <div className="flex w-full">
                      <button
                        className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-base me-4 flex-grow sm:flex-grow-0"
                        onClick={deleteLiteration}
                      >
                        Hapus
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-full"></div>
                  )}
                </div> */}
              </div>
              <div className="col-span-4 mt-4">
                {dataStoryLiteration?.map((items, index) => {
                  const filteredData =
                    data && data.filter((el) => el?.story?._id === items?._id);
                  return (
                    <div key={items._id}>
                      <StoryList
                        title={items.subTitle}
                        status={
                          dataUserId &&
                          dataUserId.filter(
                            (el) => el?.question?.story?._id == items._id
                          ).length > 0
                            ? 1
                            : 0
                        }
                        index={index + 1}
                        score={
                          filteredData &&
                          filteredData[0] &&
                          filteredData[0]?.point
                        }
                        idStory={items._id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full mt-9">
            <div className="w-full sm:w-[130px] h-[176px] bg-slate-100 rounded-xl overflow-hidden relative">
              <img
                src={dataDetail?.picture ?? ImageLoad}
                alt="fantasy.jpg"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="ms-0 sm:ms-4 mt-4 sm:mt-0 flex flex-col items-start justify-around">
              <h4 className="text-base sm:text-xl font-bold text-slate-700 line-clamp-none sm:line-clamp-1 mb-4 sm:mb-0">
                {dataDetail?.title}
              </h4>
              <div className="flex mb-4 sm:mb-0">
                <div className="bg-purple-light-400 text-purple-dark text-xs font-bold text-center rounded-md py-2 px-4 me-1">
                  {dataDetail?.genre?.name}
                </div>
                <div className="bg-yellow-200 text-yellow-500 text-xs font-bold text-center rounded-md py-2 px-4 ms-1 flex items-center justify-center">
                  <StarIcon className="h-3 me-1" />
                  {dataDetail?.rating}
                </div>
              </div>
              <h4 className="text-slate-500 text-base font-bold mb-4 sm:mb-0">
                Poin Literasi
              </h4>
              <h3 className="text-4xl text-green-700 font-bold">10</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LiterationDetail;
