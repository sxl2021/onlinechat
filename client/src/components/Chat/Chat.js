import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:3002';
  
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ({ error }) => {
            alert(error);
        });
    }, [ENDPOINT, location.search]);

    return(
        <h1>（TODO）聊天内容</h1>
    )
}

export default Chat;