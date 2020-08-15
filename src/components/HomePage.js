import React from 'react'
import {Link} from "react-router-dom"


const HomePage = () => {
    return (
        <>
    <h1>Welcome to the HomePage</h1>
    <ul id="links">  
    <li id="homelink"><Link to='/'>Home</Link></li>
    <li id="welcomelink"><Link to='/welcome/:name'>Welcome</Link></li>
    </ul>
    </>)
    }


export default HomePage