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

    useEffect(() => {
        if(roomId) {
            db
            .collection('rooms')
            .doc(roomId)
            .onSnapshot((snapShop) => {
                setRoomName(snapShop.data().name)
                setSeed(snapShop.data().name)
            })
        }
    }, [roomId])

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random()*5000))
    // }, [])

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
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Mrinal</span>
                    Hey guys
                    <span className="chat__timestamp">
                        3:52 pm
                    </span>
                </p>
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
