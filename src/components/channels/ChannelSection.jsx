import React from 'react'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

export default class ChannelSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      channels: [
        { name: 'channel 1' },
        { name: 'channel 2' },
        { name: 'channel 3' }
      ]
    }
  }
  addChannel (name) {
    let { channels } = this.state
    channels.push({ name: name })
    this.setState({ channels: channels })
  }
  render () {
    return (
      <div>
        <ChannelList channels={this.state.channels} />
        <ChannelForm addChannel={this.addChannel.bind(this)} />
      </div>
    )
  }
}
