import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import './chat.css'

const Chat = () => {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const [roomName, setRoomName] = useState('')
    const {roomId} = useParams()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if(roomId) {
            db
            .collection('rooms')
            .doc(roomId)
            .onSnapshot((snapShop) => {
                setRoomName(snapShop.data().name)
                setSeed(snapShop.data().name)
            })

            db
            .collection('rooms')
            .doc(roomId).
            collection("messages")
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()))
            )
        }
    }, [roomId])
    const sendMessage = (e) => {
        e.preventDefault()

        setInput('')
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${true && 'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Type a message" />
                    <button
                        onClick={sendMessage}
                        type="submit">Send a message
                    </button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
