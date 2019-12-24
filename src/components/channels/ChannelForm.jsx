import * as React from 'react';
import PropTypes from 'prop-types';

export default function ChannelForm({ addChannel }) {
  const [channelName, setChannelName] = React.useState('');
  const onSubmit = e => {
    e.preventDefault();
    addChannel(channelName);
    setChannelName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={e => setChannelName(e.target.value)}
        value={channelName}
      />
    </form>
  );
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
};
