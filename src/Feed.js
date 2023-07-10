import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post
            profilePic='https://img.freepik.com/free-photo/happy-business-afro-american-man-standing-smiling-against-blue-background-profile-view_155003-15255.jpg'
            message='Check mike check mike'
            timestamp='timestamp here'
            username='jose'
            image='https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_422,q_65,w_450/v1/clients/virginia/BR1707_1_b637192e-c03b-4cc2-9ea0-176b7d4bf3e6.jpg'
         />
         <Post
            profilePic='https://img.freepik.com/free-photo/happy-business-afro-american-man-standing-smiling-against-blue-background-profile-view_155003-15255.jpg'
            message='Check mike check mike'
            timestamp='timestamp here'
            username='jose'
            image=''
         />
    </div>
  )
}

export default Feed