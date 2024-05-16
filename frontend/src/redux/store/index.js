import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "../reducer/userReducer";
import { thunk } from "redux-thunk";
import { useReducer } from "react";
import literationReducer from "../reducer/literationReducer";
import literationAddedReducer from "../reducer/literationAddedReducer";
import storyReducer from "../reducer/storyReducer";
import questionReducer from "../reducer/questionReducer";
import userAnswerReducer from "../reducer/userAnswerReducer";
import userPointReducer from "../reducer/userPointReducer";
import genreReducer from "../reducer/genreReducer";
import verifyCodeReducer from "../reducer/verificationReducer";
import ratingReducer from "../reducer/ratingReducer";

const allReducer = combineReducers({
  user: userReducer,
  literation: literationReducer,
  literationAdded: literationAddedReducer,
  story: storyReducer,
  question: questionReducer,
  userAnswer: userAnswerReducer,
  userPoint: userPointReducer,
  genre: genreReducer,
  verifyCode: verifyCodeReducer,
  rating: ratingReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
