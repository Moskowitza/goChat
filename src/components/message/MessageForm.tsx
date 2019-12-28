import * as React from 'react'

export default function MessageForm({addMessage}) {
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  const onSubmit = e => {
    e.preventDefault()
    if (title.length && body.length){
        addMessage(title, body)
        setTitle('')
        setBody('')
    } else {
        alert("message form not complete")
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input type="text" onChange={e => setBody(e.target.value)} value={body} />
      <button type="submit">Submit</button>
    </form>
  )
}
