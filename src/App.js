import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from  './pages/sign/sign-in-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firbase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser } from './redux/user/user.selector';

class App extends Component{
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }
  unsusbscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount(){
    this.unsusbscribeFromAuth();
  }
  render(){
    return (
      <div >
      <Header/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={()=>(
          this.props.currentUser ?
          <Redirect to='/'/> :
          <SignInSignOut/>
        )} />
      </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
