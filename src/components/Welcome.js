import React from "react"
import {useParams, Link} from "react-router-dom"

const Welcome = (props) => {
   let { name } = useParams() 
        return(<><h1>Welcome {name || props.name}</h1>
        <ul>  
        
        </ul></>)
}
  export default Welcome