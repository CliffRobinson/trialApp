import React from 'react'

import { connect } from 'react-redux'

import {getUsers} from '../api/users'

class User extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {user} = this.props
        console.log("user props is",user);
        return (
            <React.Fragment>
            <h3> {user.name}</h3>
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <img src={user.img_url} />
            <p>"{user.quote}"</p>
            </React.Fragment>
        )
    }


}//class

export default User