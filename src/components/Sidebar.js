import { Avatar, IconButton } from '@material-ui/core'
import { Chat, ChatBubble, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import db from '../firebase'


const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {

    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input type="text" placeholder="search or start a new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
