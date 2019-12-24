import * as React from 'react';
import PropTypes from 'prop-types';

export default function Channel({ channel }) {
  return <li>{channel.name}</li>;
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
};
