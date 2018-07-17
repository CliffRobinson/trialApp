import React from 'react'

import { connect } from 'react-redux'

import {getUsers} from '../api/users'

import User from './User'

class Users extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //console.log("Get the users now")
        this.props.dispatch(getUsers())
    }

    render() {
        const {users} = this.props
        //console.log("props is",users);
        return (
            <div className='users'>
                {
                    users.map(user => {
                        return (<div className="userView" key={`user-${user.user_id}`}>
                            <User user={user} />
                        </div>)
                    })
                }
            </div>
        )
    }


}//class

const mapStateToProps = ({ users }) => ({
    users
})

function oldSchoolMapStateToProps({ users, and, some, other, keys }) {
    return {
        users: users,
    }
}

export default connect(mapStateToProps)(Users)