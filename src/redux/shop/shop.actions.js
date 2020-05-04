import actionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firbase.utils';

export const fetchCollectionsStart = () =>({
    type: actionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errMessage => ({
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapShot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
           dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(err => dispatch(fetchCollectionsFailure(err.message)));
    }
}