import React from 'react'
import { USER_ICON } from '../utils/constant'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className="w-7 h-7" src={USER_ICON} alt="user_icon"/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage