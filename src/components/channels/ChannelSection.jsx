import * as React from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

export default function ChannelSection() {
  const [channels, setChannels] = React.useState([
    { name: 'channel 1' },
    { name: 'channel 2' },
    { name: 'channel 3' },
  ]);

  const addChannel = name => {
    setChannels([...channels, { name: name }]);
  };

  return (
    <div>
      <ChannelList channels={channels} />
      <ChannelForm addChannel={addChannel} />
    </div>
  );
}
