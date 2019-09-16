import React from 'react'

class SendMessageForm extends React.Component {

    constructor(){
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({message: e.target.value});
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({message: ''})
        
    }

    render() {
        console.log(this.state.message)
        return (
            <form 
            onSubmit={this.handleSubmit}
            className="send-message-form">
                <input
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    placeholder="Say Something"
                    value = {this.state.message}
                    type="text" />
                    <button Class="btn btn-primary btn-lg" type= "Submit">Send</button>
            </form>
        )
    }
}

export default SendMessageForm