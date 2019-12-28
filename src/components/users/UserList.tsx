import * as React from 'react'
import User from './User'

interface User {
  name: string,
  id:number
}
type Channels = {
  channels: User[]
}

export default function UserList({users}) {
  return (
    <ul>
      {users.map(user => {
        return <User key={user.id} userName={user.name} />
      })}
    </ul>
  )
}
