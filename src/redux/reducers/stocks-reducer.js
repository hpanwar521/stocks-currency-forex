import {STOCKS_TIME_SERIES_DAILY,
    STOCKS_TIME_SERIES_MONTHLY,
    STOCKS_TIME_SERIES_WEEKLY,
    MULTIPLE_STOCKS_SERIES_MONTHLY} from '../constants';

const initialState = {
    dailyStocks : {},
    weeklyStocks : {},
    monthlyStocks : {},
    multipleStocks : []
}

export default function stocksTimeSeries (state=initialState,action){
    const {type , payload} = action;
    switch (action.type)
    {
        case STOCKS_TIME_SERIES_DAILY : 
            return {
                ...state,
                dailyStocks : payload
            }
        case STOCKS_TIME_SERIES_WEEKLY : 
            return {
                ...state,
                weeklyStocks : payload
            }
        case STOCKS_TIME_SERIES_MONTHLY : 
            return {
                ...state,
                monthlyStocks : payload
            }
        case MULTIPLE_STOCKS_SERIES_MONTHLY : 
            return {
                ...state,
                multipleStocks : payload
            }
       
        default : 
        return state
    }
   
}