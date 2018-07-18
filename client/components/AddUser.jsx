import React from 'react'
import {connect} from 'react-redux'

class AddUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            img_url: '',
            email: '',
            quote: '',
        }
        this.updateDetails = this.updateDetails.bind(this)
    }

    updateDetails(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e){
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const {name, img_url, email, quote}

        return (
            <div>
            <form onSubmit={this.submit.bind(this)}>
            <input onChange={this.updateDetails} type='text' name='name' value={name} />
            <input onChange={this.updateDetails} type='text' name='img_irl' value={img_url} />
            <input onChange={this.updateDetails} type='text' name='email' value={email} />
            <input onChange={this.updateDetails} type='text' name='quote' value={quote} />
            <input type="submit" />
            </ form >
            </div>
        )

    }

}

export default connect()(AddUser)