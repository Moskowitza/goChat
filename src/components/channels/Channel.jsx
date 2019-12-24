import React from 'react'
import PropTypes from 'prop-types'

export default class Channel extends React.Component {
  onClick () {
    alert('bound click handler' + this.props.channel.name)
  }
  render () {
    const { channel } = this.props
    return (
      <li onClick={this.onClick.bind(this)}>
        {channel.name}
      </li>
    )
  }
}
Channel.propTypes = {
  channel: PropTypes.object.isRequired
}
