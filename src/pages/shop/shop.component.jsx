
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {selectIsCollectionFetching, isCollectionsLoaded} from '../../redux/shop/shop.selectors'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import  CollectionsOverview  from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {


    componentDidMount() {
        this.props.fetchCollections()
    }


    render(){
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading ={!isCollectionsLoaded} {...props}/> }/>
            </div>
        );
    }

}


const mapStateToProps = state => ({
    isCollectionFetching: selectIsCollectionFetching(state),
    isCollectionsLoaded: isCollectionsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
})

 
export default connect(mapStateToProps, mapDispatchToProps)(Shop);