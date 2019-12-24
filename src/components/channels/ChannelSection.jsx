import React, { useState } from 'react'
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'
import PropTypes from 'prop-types'

export default function ChannelSection () {
  const [channels, setChannels] = useState([
    { name: 'channel 1' },
    { name: 'channel 2' },
    { name: 'channel 3' }
  ])

  const addChannel = name => {
    setChannels([...channels, {name:name}])
  }
  
  return (
    <div>
      <ChannelList channels={channels} />
      <ChannelForm addChannel={addChannel} />
    </div>
  )
}

ChannelSection.propTypes = {}
