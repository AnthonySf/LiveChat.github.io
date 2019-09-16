import React from 'react'
import { thisExpression } from '@babel/types';
import { parseExpression } from '@babel/parser';

class UsersList extends React.Component {
    render () {
        
        console.log("array" , Object.values(this.props.roomUsers));
        
        let userPresence = [];
        for (let [key, value] of Object.entries(this.props.roomUsers)) {
            userPresence.push(<li key={key}>{key} : {value}</li>)
        }

        
        return (
            <div className="userslist border border-success border-3">
            
            <h3>Users:</h3>
            <hr></hr>
            <p>Updated in Real Time!</p>

            {userPresence}
            
            </div>
        )
    }
}

export default UsersList