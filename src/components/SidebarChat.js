import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebarChat.css'

const SidebarChat = () => {
    const [seed, setSeed] = useState('0')
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
