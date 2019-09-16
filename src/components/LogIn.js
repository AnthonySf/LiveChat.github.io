import React, { Component } from 'react';

class LogIn extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    state = { 
        username: ""
     }




    handleLogIn(e){
        e.preventDefault();
        this.props.handleLogIn(this.state.username);
        this.setState({username: ''})
    }

    handleChange(e){
        this.setState({username: e.target.value});
    }

    render() { 
        return ( 
        <div class="container logIn">
            <div align="middle"  class="jumbotron border border-primary rounded">
            <h1 class="display-8">Log In</h1>
            <hr></hr><hr></hr>
            <br></br>
            
            <form
            onSubmit={this.handleLogIn}>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">@</span>
                </div>
                <input value = {this.state.username} onChange={this.handleChange} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                
                
            </div>
            <br></br>
            <button type="Submit" class="btn btn-outline-primary">ENTER</button>

            <br></br><br></br>

            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>frickity frick!<br></br> please login with </strong><br></br> "First ","Gerebab ","Watson ",or ,"Horse"
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            </form>
        
            </div> 



        </div>
        );
    }
}
 
export default LogIn;