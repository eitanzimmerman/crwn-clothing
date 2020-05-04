import { takeLatest, call, put } from 'redux-saga/effects';
import actionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firbase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';


export function* fetchCollectionAsync() {
        try{
            const collectionRef = firestore.collection('collections');
            const snapshot = yield collectionRef.get();
            const collectionsMap = yield call (convertCollectionsSnapshotToMap, snapshot);
            yield put(fetchCollectionsSuccess(collectionsMap))
        } catch(e) {
            put(fetchCollectionsFailure(e.message))
        }
}

export function* fetchCollectionsStart() {
    yield takeLatest(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync )
}