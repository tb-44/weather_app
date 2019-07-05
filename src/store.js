import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import weather from "./reducer/weather";

export default createStore(weather, undefined, applyMiddleware(promiseMiddleware()));