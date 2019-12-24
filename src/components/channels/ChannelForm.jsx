import React, { useState } from 'react';
import PropTypes from 'prop-types';

// export default class ChannelForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       channelName: ''
//     }
//   }
//   onSubmit (e) {
//     e.preventDefault()
//     const { channelName } = this.state
//     this.props.addChannel(channelName)
//     this.setState({
//       channelName: ''
//     })
//   }

//   onChange (e) {
//     this.setState({
//       channelName: e.target.value
//     })
//   }
//   render () {
//     return (
//       <form onSubmit={this.onSubmit.bind(this)}>
//         <input
//           type='text'
//           onChange={this.onChange.bind(this)}
//           value={this.state.channelName}
//         />
//       </form>
//     )
//   }
// }


export default function ChannelForm({ addChannel }) {
  const [channelName, setChannelName] = useState('');
  const onSubmit = (e) => {
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
