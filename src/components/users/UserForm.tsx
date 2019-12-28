import * as React from 'react'

export default function ChannelForm({addUser}) {
  const [userName, setUserName] = React.useState('')
  const onSubmit = e => {
    e.preventDefault()
    addUser(userName)
    setUserName('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={e => setUserName(e.target.value)}
        value={userName}
      />
    </form>
  )
}
