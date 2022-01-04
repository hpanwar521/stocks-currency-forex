import {SYMBOL_NAME} from '../constants';

const initialState = {}

export default function getSymbolName (state=initialState,action){
    const {type , payload} = action;
    switch (type)
    {
        case SYMBOL_NAME : 
            return { payload }
       
        default : 
        return state
    }
   
}