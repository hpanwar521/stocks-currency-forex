import {SEARCH_SYMBOL} from '../constants';

const initialState = {}

export default function getSearchResult (state=initialState,action){
    const {type , payload} = action;
    switch (action.type)
    {
        case SEARCH_SYMBOL : 
            return { payload }
       
        default : 
        return state
    }
   
}