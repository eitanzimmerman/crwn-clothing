import actionTypes from './shop.types';

export const updateCollections = (collectionMap) =>({
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})