
import React, {Component} from 'react';

import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firbase.utils';
import { updateCollections } from '../../redux/shop/shop.actions'
import  CollectionsOverview  from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component{
     state = {
         loading: true
     };

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollection } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
           updateCollection(collectionsMap)
           this.setState({loading: false})
        });

    }
    

    render(){
        const { match } = this.props;
        const {loading} = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading ={loading} {...props}/> }/>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
})

 
export default connect(null, mapDispatchToProps)(Shop);