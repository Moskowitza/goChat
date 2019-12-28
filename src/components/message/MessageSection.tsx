import * as React from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
export default function MessageSection({messages,addMessage}) {
    return (
        <div>
            <MessageList messages={messages}/>
            <MessageForm addMessage={addMessage}/>
        </div>
    )
}
