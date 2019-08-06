import React from 'react'
import { Link } from "react-router-dom";
import "../styling/search.scss"; 

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            <Link to={{ pathname: `/profile/${r.id}` }} className='results'>
            {r.username} {" "}
            {r.first_name} {" "}
            {r.last_name}
            </Link>
        </li>
    ))
    return <ul>{options}</ul>
}

export default Suggestions; 