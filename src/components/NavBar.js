import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 

        
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
                <a class="navbar-brand" href="#">LiveChat</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://anthonysf.github.io/LiveChat/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="https://github.com/AnthonySf/ChatApp">GitHub</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="https://github.com/AnthonySf/ChatApp">Log Out</a>
                        <a class="dropdown-item" href="https://en.wikipedia.org/wiki/Special:Random">Chatting Ideas</a>
                        <a class="dropdown-item" data-toggle="modal" data-target="#myModal">Info</a>
                        </div>
                    </li>
                    </ul>
                </div>
                

                    <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">


                    <div class="modal-content">
                        <div class="modal-header">
                        <h4 class="modal-title">LiveChat Info</h4>
                        </div>
                        <div class="modal-body">
                        <p>Web chat application developed in 2019</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-outline-warning" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                    </div>
                    </div>
                    </nav>


            
         );
    }
}
 
export default NavBar;





