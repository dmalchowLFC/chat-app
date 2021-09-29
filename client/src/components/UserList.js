import React from 'react';
import { render } from 'react-dom';
import '../App.css'


class userList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        };
    }


    render() {
        return (
            <div>
                <div id="userList" >
                    <h1>User List</h1>
                </div>
            </div>
        )
    }
};

export default userList