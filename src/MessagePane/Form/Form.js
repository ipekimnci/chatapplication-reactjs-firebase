import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            message:''
        }
        this.onSubmitEvent=this.onSubmitEvent.bind(this)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeMessage=this.onChangeMessage.bind(this)
    }
    onChangeName(e){
        this.setState({
            name: e.target.value.trim()
        })
    }
    onChangeMessage(e){
        this.setState({
            message: e.target.value
        })
    }
    onSubmitEvent(){
        const {name,message}=this.state
        this.props.onSend(name,message)
        this.setState({
            //name:'',
            message:''
        })

    }
    render() {
        return (
            <div className="MessagePane-Form">
                <div className="MessagePane-Form-container">
                    <p>
                        <input className="name" type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Adınızı girin"></input>
                    </p>
                    <p>
                        <textarea className="message" value={this.state.message} onChange={this.onChangeMessage} placeholder="Mesajınızı girin"></textarea>
                    </p>
                    <p>
                        <button className="send" onClick={this.onSubmitEvent}>Gönder</button>
                    </p>
                </div>

            </div>
        );
    }
}
Form.defaultProps={
    onSend:()=>{}
}

export default Form;