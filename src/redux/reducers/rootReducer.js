import { combineReducers } from "redux";
import stocksTimeSeries from './stocks-reducer'; //file inside reducers folder
import getSearchResult from "./search-reducer";
import getSymbolName from "./symbol-name";

export default combineReducers({stocksTimeSeries,getSearchResult,getSymbolName});

