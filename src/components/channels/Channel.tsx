import * as React from 'react'

type Props = {
  name: string
}

export default function Channel({channel}: {channel: Props}) {
  return <li>{channel.name}</li>
}
