import React, { Component } from 'react';
import Form from './Form/Form'

class MessagePane extends Component {
    render() {
        const Message =({author,text})=>(
            <div className="Message">
                <div className="Message-author">{author}</div>
                <div className="Message-text">{text}</div>
            </div>
        )
        
        const List=this.props.messagess.map(({id, author, text})=> 
            <div className="MessagePane-List" key={id}>
                <Message  id={id} author={author} text={text}></Message>
            </div>
        )

        return (
            <div className="MessagePane">
                {List}
                <Form onSend={this.props.onSendMessage}></Form>
            </div>
        );
    }
}

export default MessagePane;