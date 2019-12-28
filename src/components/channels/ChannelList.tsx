import * as React from 'react'
import Channel from './Channel'

interface Channel {
  name: string
}
type Channels = {
  channels: Channel[]
}

export default function ChannelList({channels}) {
  return (
    <ul>
      {channels.map(channel => {
        return <Channel key={channel.id} channel={channel} />
      })}
    </ul>
  )
}
