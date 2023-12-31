import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
        case REGISTER_USER_REQUEST:

            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:

            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGOUT_SUCCESS:
            
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                successMessage: action.payload
            }

        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
           
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOAD_USER_FAIL:
            
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }



        default:
            return state;
    }

}

export const allUserReducers = (state = { users: [] }, action) => {

    switch (action.type) {
        case ALL_USERS_REQUEST:

            return {
                ...state,
                loading: true,
            }
        case ALL_USERS_SUCCESS:

            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ALL_USERS_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload

            }

        default:
            return state
    }

}



export const profileReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_USER_REQUEST:

            return {
                ...state,

                loading: true,
            }
        case UPDATE_USER_SUCCESS:

            return {
                ...state,
                loading: false,

                isUpdated: action.payload,
                message: action.payload.message
            }
        case UPDATE_USER_FAIL:

            return {

                loading: false,

                error: action.payload,
            }

        default:
            return state
    }
}