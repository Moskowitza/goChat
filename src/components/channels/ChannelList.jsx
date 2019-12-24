import * as React from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';

export default function ChannelList({ channels }) {
  return (
    <ul>
      {channels.map((channel, i) => {
        return <Channel key={i} channel={channel} />;
      })}
    </ul>
  );
}
ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
};
