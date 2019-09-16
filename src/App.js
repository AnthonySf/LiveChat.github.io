import React from 'react'
import chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import LogIn from './components/LogIn'
import NavBar from './components/NavBar'
import NewRoomForm from './components/NewRoomForm'
import UsersList from './components/UsersList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/4f056a27-330e-4e1e-9f7e-6bbee987067a/token";
const instanceLocator = "v1:us1:4f056a27-330e-4e1e-9f7e-6bbee987067a";



class App extends React.Component {

    constructor(){

        super();
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            isLoggedIn: false,
            username: '',
            roomUsers: [],
            currentRoom: null,
            
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
        this.RenderChatRoom = this.RenderChatRoom.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
        this.Connect = this.Connect.bind(this)
        this.updateRoomUsers = this.updateRoomUsers.bind(this)
    }
    

    Connect(userIdPassed){

        const tokenProvider = new chatkit.TokenProvider({
            url: tokenUrl
          });
          
          const chatManager = new chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: userIdPassed,
            tokenProvider: tokenProvider
          });

        

        chatManager
            .connect({
                onPresenceChanged: user=>{
                    this.updateRoomUsers();
                }
            })
            .then(currentUser => {
                this.currentUser = currentUser;

                this.getRooms();
                
                
            })
            .catch(error => {
                console.error("error:", error);
            });          


}



getRooms(){
    this.currentUser.getJoinableRooms()
                .then(joinableRooms => {
                    this.setState({
                        joinableRooms,
                        joinedRooms: this.currentUser.rooms
                    })
                })
                .catch(err => console.log('error on joinableRooms: '));
}

subscribeToRoom(roomId){
    this.setState({messages: []});
    this.currentUser.subscribeToRoomMultipart({
        roomId: roomId,
        hooks: {
          onMessage: message => {
              this.setState({
                  messages: [...this.state.messages,message] 

              })
              
              
           
          }
        }
      })
      .then(room => {
        this.setState({
            roomId: room.id,
            roomUsers: room.users[0].presenceStore,
            currentRoom: room,
        })
        this.getRooms()
    })
    .catch(err => 'error on subscribing to room: ')
}


sendMessage(text){
    this.currentUser.sendSimpleMessage({
        text,
        roomId: this.state.roomId

    });
}

    createRoom(roomName){
        this.currentUser.createRoom({name: roomName})
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('error with createRoom: '))
    }

    handleLogIn(username){
        this.Connect(username);
        this.setState({username: username , isLoggedIn: true});
        
        

    }
    
    updateRoomUsers(){
        if(this.state.currentRoom){
            this.setState({
            roomUsers: this.state.currentRoom.users[0].presenceStore
        })
        }
        
    }

    RenderChatRoom(){
        console.log("RoomUsers: ", this.state.roomUsers);
        if(this.state.isLoggedIn){
            return (
           
                <div className="app">
                    <UsersList roomUsers={this.state.roomUsers} />
                    <NavBar />
                    <RoomList roomId={this.state.roomId} subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
                    <MessageList roomId= {this.state.roomId} messages={this.state.messages}/>
                    <SendMessageForm disabled={!this.state.roomId} sendMessage={this.sendMessage}/>
                    <NewRoomForm createRoom={this.createRoom} />
                </div>
            );
        }
        else{
            return(
                <div>
                    <LogIn handleLogIn={this.handleLogIn}/>
                </div>
            )
        }
        
    }


    render() {
        return(
            
            <div>{this.RenderChatRoom()}</div>
            
            
        )
        
    }
}

export default App