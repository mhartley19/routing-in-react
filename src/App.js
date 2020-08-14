import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import  Welcome  from "./components/Welcome"
import NotFound from './components/NotFound'
import { Route, Link, Switch, useParams } from 'react-router-dom'

const Name = (props) =>{
  const params = useParams()
  console.log ({props, params})
  return (<h1>hello</h1>)
}

// const params = () => (useParams)

class App extends React.Component {
  render(){
  return (
    <>
    <Switch>
      <Route exact path = '/'>
        <HomePage />
      </Route>
      <Route path ="/welcome/:Name">
        <Welcome name="Nobody" />
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

   
  

