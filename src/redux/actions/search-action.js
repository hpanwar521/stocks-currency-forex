import axios from 'axios'
import {SEARCH_SYMBOL} from '../constants';


export const getSearchResult = (search) =>async dispatch=>{
   
    try {
        const res = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=R87EZ86OZN8QGX9H`)

        dispatch({
            type: SEARCH_SYMBOL,
            payload: res.data
        })
     
    } catch (error) {
        console.log('error',error);
    }
}

   
