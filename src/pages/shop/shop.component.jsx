
import React, {Component} from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';


class Shop extends Component {
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
            collections.map(({id, ...otherProps})=> {
                return <PreviewCollection key={id} {...otherProps}/>
            })
        )
    }
}

export default Shop;