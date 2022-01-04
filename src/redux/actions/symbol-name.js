
import {SYMBOL_NAME} from '../constants';


export const getSymbolName = (symbolName) =>async dispatch=>{
   
    dispatch({
        type: SYMBOL_NAME,
        payload: symbolName
    })
}

   
