import * as React from 'react'
import Message from './Message'

export default function MessageList({messages}) {
  return (
    <ul>
      {messages.map(message => {
        return (
          <Message key={message.id} title={message.title} body={message.body} />
        )
      })}
    </ul>
  )
}
