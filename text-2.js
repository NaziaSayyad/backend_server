import * as types from './ActionTypes';

const InfitalData = {
    BugsCritical : [],
    BugsMajor : [ ],
    BugsMedium : [],
    isLoading : false,
    isError : false
}

export default function Reducer (state=InfitalData,action){
    const {type,payload} = action;
    switch(type){
        //Singup
        case types.POST_SIGNUP_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.POST_SIGNUP_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false
            }
        }

        case types.POST_SIGNUP_FAILURE : {
            return {
                ...state,
                Bugs : [ ],
                isLoading : false,
                isError : true
            }
        }

        //GET Critical
        case types.GET_BUG_CRITICAL_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_BUG_CRITICAL_SUCCESS : {
            return {
                ...state,
                BugsCritical : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_BUG_CRITICAL_FAILURE : {
            return {
                ...state,
                BugsCritical : [ ],
                isLoading : false,
                isError : true
            }
        }


          //GET Major
          case types.GET_BUG_MAJOR_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_BUG_MAJOR_SUCCESS : {
            return {
                ...state,
                BugsMajor : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_BUG_MAJOR_FAILURE : {
            return {
                ...state,
                BugsMajor : [ ],
                isLoading : false,
                isError : true
            }
        }


        //GET Medium
        case types.GET_BUG_MEDIUM_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_BUG_MEDIUM_SUCCESS : {
            return {
                ...state,
                BugsMedium : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_BUG_MEDIUM_FAILURE : {
            return {
                ...state,
                BugsMedium : [ ],
                isLoading : false,
                isError : true
            }
        }

        default :
        return state
    }
}