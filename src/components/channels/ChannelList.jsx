import React from 'react'
import Channel from './Channel'


export default class ChannelList extends React.Component {
  render () {
    const { channels } = this.props
    return (
      <ul>
        {channels.map((channel, i) => {
          console.log(channel)
          return <Channel key={i} channel={channel} />
        })}
      </ul>
    )
  }
}
