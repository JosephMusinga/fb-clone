import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImangeUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //some database Stuff here

        setInput('')
        setImangeUrl('')
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`whats on your mind?`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImangeUrl(e.target.value)}
                        placeholder='image url (optional)' />

                    <button onClick={handleSubmit} type="submit" > Hidden Submit
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender