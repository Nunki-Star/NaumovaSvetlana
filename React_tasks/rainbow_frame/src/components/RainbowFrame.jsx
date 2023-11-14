import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array,
    };

    render() {
        const framesToReduce = (accum, col) => {
            return (
                <div style={{ border: "solid 3px " + col, padding: "7px" }}>
                    {accum}
                </div>
            )
        }

        const rainbowFrame = this.props.colors.reduce(framesToReduce, this.props.children);
        return (
            <div style={{ width: "300px" }}>
                {rainbowFrame}
            </div>
        );
    }
}

export default RainbowFrame;