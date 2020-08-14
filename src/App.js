import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import  Welcome  from "./components/Welcome"
import NotFound from './components/NotFound'
import { Route, Link, Switch, useParams } from 'react-router-dom'


  



// const params = () => (useParams)

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(props){

  return (
    <>
  
    
    <Switch>
      <Route exact path = '/' >
        <HomePage />
      </Route>
      <Route path ="/welcome/:name">
      <Welcome/>
      </Route>
      <Route path = "/welcome">
      <Welcome name ="Mike"/>
      </Route>
      <Route path="*">
      <NotFound />
      </Route>
    </Switch>
    </>)
  
}
}

  
export default App;
   

    /* <Router>
      <ul>  
        <li>
        <Link to='/welcome'>Welcome</Link>
        </li>
      </ul>
      
      </Router> */

   
  

