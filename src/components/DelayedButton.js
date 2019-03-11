import React from 'react';

class DelayedButton extends React.Component {

    getDelay = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        // setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return (
            <button onClick={this.getDelay}>Delayed Log</button>
        )
    }
}
export default DelayedButton;