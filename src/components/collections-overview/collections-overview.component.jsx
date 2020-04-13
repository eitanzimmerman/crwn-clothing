import React from 'react';
import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles.scss';


const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherProps})=> {
            return <PreviewCollection key={id} {...otherProps}/>
        })}   
    </div>
)

const mapStateToProps = state =>({
    collections: selectCollectionForPreview(state)
})


export default connect(mapStateToProps)(CollectionsOverview)