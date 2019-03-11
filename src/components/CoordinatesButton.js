import React from 'react';

class CoordinatesButton extends React.Component {

    // constructor (props) {
    //     super(props)
    // }

    getEvent = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return (
            <div>
                <button onClick={this.getEvent}>Log Mouse Coords</button>
            </div>
        )
    }
}
export default CoordinatesButton;