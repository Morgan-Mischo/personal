import React from 'react'
import { Link } from "react-router-dom";
import { getUsers } from "../redux/userReducer";

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            <Link to={{ pathname: `/profile/${r.username}` }}>
            {r.username}
            </Link>
        </li>
    ))
    return <ul>{options}</ul>
}

export default Suggestions; 