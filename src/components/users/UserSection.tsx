import * as React from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
export default function UserSection({users, addUser}) {
  return (
    <div>
      <UserList users={users} />
      <UserForm addUser={addUser} />
    </div>
  )
}
