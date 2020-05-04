
import actionTypes from './shop.types';


const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

  const reducer = (state = INITIAL_STATE, action) =>{
      switch(action.type) {
            case actionTypes.FETCH_COLLECTIONS_START:
              return {
                  ...state,
                  isFetching: true
              };
            case actionTypes.FETCH_COLLECTIONS_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    collections: action.payload
                };
            case actionTypes.FETCH_COLLECTIONS_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    errorMessage: action.payload
                }
            default:
              return state
      }
  }

  export default reducer;