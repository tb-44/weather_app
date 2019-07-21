import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import * as thunk from "redux-thunk";
import weather from "./reducer/weather";

const logger = createLogger();

export default createStore(
    weather,
    {},
    applyMiddleware(logger, thunk.default)
  );

  

  

  

  