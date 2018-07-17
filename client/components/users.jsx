import React from 'react'

import { connect } from 'react-redux'

import {getUsers} from '../api/users'

class Users extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //console.log("Get the users now")
        this.props.dispatch(getUsers())
    }

    render() {
        console.log("props is",this.props.users);
        return (
            <div className='users'>
                Dis still de user comp
                {
                    this.props.users.map(user => {
                        <div key={`user-${user.id}`}>
                            <h1>{user.name}</h1>
                        </div>
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