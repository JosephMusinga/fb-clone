import React from 'react'
import './SidebarRow.css'
import SidebarRow from './SidebarRow'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='' title='Jos' />

        <SidebarRow Icon={LocalHospital} title='Covid-19 Information Center' 
        />
        <SidebarRow Icon={EmojiFlags} title='Pages' />
        <SidebarRow Icon={People} title='Friends' />
        <SidebarRow Icon={Chat} title='Messenger' />
        <SidebarRow Icon={Storefront} title='Marketplace' />
        <SidebarRow Icon={VideoLibrary} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
    </div>
  )  
}

export default Sidebar