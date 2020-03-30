import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOut from  './pages/sign/sign-in-sign-out.component';
import {auth, createUserProfileDocument} from './firebase/firbase.utils';


class App extends Component{
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }
  unsusbscribeFromAuth = null;

  componentDidMount(){
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        });
      }
      this.setState({currentUser: userAuth})
    });
  }
  componentWillUnmount(){
    this.unsusbscribeFromAuth();
  }
  render(){
    return (
      <div >
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignOut}/>
      </Switch>
         
      </div>
    );
  }
  
}

export default App;
