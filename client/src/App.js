import './App.css';
import React from 'react';
import UserList from './components/UserList';
import MessageBar from './components/MessageBar';
import ChatWindow from './components/ChatWindow';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid" id="UserChatBlock">
          <div className="row justify-content-around">
            <div className="col-4" >
              <UserList />
            </div>
            <div className="col-6">
              <ChatWindow />
            </div>
          </div>
          <div className="row">
            <MessageBar />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
