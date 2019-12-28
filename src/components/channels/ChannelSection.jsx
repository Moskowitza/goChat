import * as React from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

export default function ChannelSection({ channels, addChannel }) {
  return (
    <div>
      <ChannelList channels={channels} />
      <ChannelForm addChannel={addChannel} />
    </div>
  );
}
