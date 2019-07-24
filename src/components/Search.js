import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getUsers } from '../redux/userReducer'; 
import { getPosts } from '../redux/postsReducer';  
import ReactSearchBox from 'react-search-box'; 

//redo this with vanilla js

class Search extends Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    componentDidMount (){
        this.props.getUsers(); 
    }

    render(){
        console.log(this.props.users)
        return(
            <div>
                <ReactSearchBox
                placeholder="Find friends"
                value="search"
                data={this.props.users}
                callback={record => console.log(record)}
                searchAsYouType={true}
                />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state.user; 
}

export default connect(mapStateToProps, { getUsers, getPosts })(Search); 