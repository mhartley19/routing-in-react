import React from "react"
import {Link} from "react-router-dom"

const Welcome = (props) => {
        return(<><h1 id="name">Hello {props.name}</h1>
        <ul id="links">  
        <li id="homelink"><Link to='/'>Home</Link></li>
        <li id="welcomelink"><Link to='/welcome/:name'>Welcome</Link></li>
        </ul></>)
}
  export default Welcome