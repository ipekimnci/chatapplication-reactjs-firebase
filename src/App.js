import React, { Component } from 'react';
import MessagePane from './MessagePane/MessagePane'
import ChannelList from './ChannelList/ChannelList'
import './App.css';

import { getMessages, getChannels, saveMessage, onNewMessage } from './storage';

class App extends Component {
  constructor(){
    super()
    this.state={
      messages:[],
      channels:[],
      selectedChannelId: null
    }
    this.onSendMessage=this.onSendMessage.bind(this)
    this.onChannelSelect=this.onChannelSelect.bind(this)
    this.filteredMessages=this.filteredMessages.bind(this)
  }
  componentDidMount() {
    getMessages().then(messages => this.setState({messages}));
    getChannels().then(channels => this.setState({channels, selectedChannelId: channels[0].id}));
    onNewMessage(new_message => {
      const messages = [...this.state.messages, new_message];
      this.setState({messages});
    });
  }

  
  onSendMessage(author,text){
    const new_message={
      id:this.state.messages[this.state.messages.length-1].id+1,
      author,
      text,
      channel_id:this.state.selectedChannelId
    }
    saveMessage(new_message);
    const messages=[...this.state.messages, new_message]
    this.setState({
      messages
    })
  }
  onChannelSelect(id){
    this.setState({
      selectedChannelId:id
    })
  }
  filteredMessages(){
    return this.state.messages.filter(({channel_id})=>channel_id===this.state.selectedChannelId)
  }
  render() {
    return (
      <div className="App">
        <ChannelList channels={this.state.channels} selectedChannelId={this.state.selectedChannelId} onSelect={this.onChannelSelect}></ChannelList>
        <MessagePane messagess={this.filteredMessages()} onSendMessage={this.onSendMessage}></MessagePane>
      </div>
    );
  }
}

export default App;
