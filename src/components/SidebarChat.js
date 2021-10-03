import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebarChat.css'

const SidebarChat = (props) => {
    const [seed, setSeed] = useState('0')
    // const {params} = useParams()
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
        <Link style={{textDecoration:"none"}} to={`/rooms/${props.id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{props.name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>

    ):(
        <div className="sidebarChat">
            <h2 onClick={createChat}>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
