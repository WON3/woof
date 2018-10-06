import {combineReducers} from 'redux';
import {USER, JOB_LISTINGS} from '../constraints';

const user = (state = {}, action) => {
    switch(action.type){
        case USER:
            return action.payload;
        default: 
            return state;
    }
}

const job_listings = (state = [], action) => {
    switch(action.type){
        case JOB_LISTINGS:
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({user, job_listings})