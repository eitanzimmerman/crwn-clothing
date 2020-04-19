
import actionTypes from './shop.types';


const INITIAL_STATE = {
    collections: null
}

  const reducer = (state = INITIAL_STATE, action) =>{
      switch(action.type) {
          case actionTypes.UPDATE_COLLECTIONS:
              return {
                  ...state,
                  collections: action.payload
              }
          default:
              return state
      }
  }

  export default reducer;