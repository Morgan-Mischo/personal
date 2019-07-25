import React from 'react'
import { Link } from "react-router-dom";

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            {/* <Link to={{ pathname: '/profile/${r.username}' }} onClick={this.props.grabUser}> */}
            {r.username}
            {/* </Link> */}
        </li>
    ))
    return <ul>{options}</ul>
}

export default Suggestions; 