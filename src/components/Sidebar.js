import { Avatar, IconButton } from '@material-ui/core'
import { Chat, ChatBubble, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import db from '../firebase'


const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        db
        .collection('rooms')
        .onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc) => {
                return({
                    id: doc.id,
                    data :doc.data(),
                })
            }))
        })
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
                <SidebarChat 
                    addNewChat
                    addNewRoom = {(roomName) => {
                        db
                        .collection('rooms')
                        .add({
                            name: roomName
                        })
                    }} />
                {rooms.map((room) => {
                    return <SidebarChat key={room.id} name = {room.data.name} />
                })}
            </div>
        </div>
    )
}

export default Sidebar
