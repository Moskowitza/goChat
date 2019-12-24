import React from 'react'
import Channel from './Channel'
import PropTypes from 'prop-types'

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
ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
}
