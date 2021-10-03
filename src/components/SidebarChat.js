import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebarChat.css'

const SidebarChat = (props) => {
    const [seed, setSeed] = useState('0')
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])
    const createChat = () => {
        const roomName = prompt('Please enter name for chat')

        if(roomName){
            return props.addNewRoom(roomName)
        }
    }
    return !props.addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{props.name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div className="sidebarChat">
            <h2 onClick={createChat}>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
