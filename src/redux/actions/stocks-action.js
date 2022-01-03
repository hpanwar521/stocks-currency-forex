import axios from 'axios'
import {STOCKS_TIME_SERIES_DAILY,
    STOCKS_TIME_SERIES_MONTHLY,
    STOCKS_TIME_SERIES_WEEKLY,
    MULTIPLE_STOCKS_SERIES_MONTHLY} from '../constants';


export const getStocksTimeSeriesDaily = (symbol) =>async dispatch=>{
   
    try {
        const res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=R87EZ86OZN8QGX9H`)

        dispatch({
            type: STOCKS_TIME_SERIES_DAILY,
            payload: res.data
        })
     
    } catch (error) {
        console.log('error',error);
    }
}


export const getStocksTimeSeriesWeekly = (symbol) =>async dispatch=>{
    
    try {
        const res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=R87EZ86OZN8QGX9H`)
        
        dispatch({
            type: STOCKS_TIME_SERIES_WEEKLY,
            payload: res.data
        })
        
    } catch (error) {
        console.log('error',error);
    }
}


export const getStocksTimeSeriesMonthly = (symbol) =>async dispatch=>{
   
    try {
        const res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=R87EZ86OZN8QGX9H`)

        dispatch({
            type: STOCKS_TIME_SERIES_MONTHLY,
            payload: res.data
        })
     
    } catch (error) {
        console.log('error',error);
    }
}


export const getMultipleStocksTimeSeriesMonthly = (...symbols) =>async dispatch=>{

   Promise.all(symbols.map(symbol =>{
    try {
        const res = axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=R87EZ86OZN8QGX9H`)

        const stocksData = res.data;
     
    } catch (error) {
        console.log('error',error);
    }

   })).then( stocks =>
    dispatch({
        type: MULTIPLE_STOCKS_SERIES_MONTHLY,
        payload: stocks
    })
   )
   
}