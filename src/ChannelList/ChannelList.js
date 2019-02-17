import React, { Component } from 'react';

class ChannelList extends Component {
    render() {
        const Channel =({name,isSelected,onClickChannel})=>{
            const className = isSelected ? "ChannelList-item ChannelList-item-selected" : "ChannelList-item";
            return (
                <div onClick={onClickChannel} className={className}>{name}</div>
            )
        }
        return (
            <div>
                <div className="ChannelList">
                    {
                    this.props.channels.map(({id,name}) => {
                        const is_selected=this.props.selectedChannelId===id;
                        const onChannelSelect=()=>this.props.onSelect(id);
                        return <Channel key={id} name={name} isSelected={is_selected} onClickChannel={onChannelSelect}></Channel>
                    })
                    }
                </div>
            </div>
        );
    }
}

export default ChannelList;
