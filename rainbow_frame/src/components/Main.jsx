import React from 'react';
import RainbowFrame from './RainbowFrame.jsx'


class App extends React.Component {

    render() {
        let colors = ['yellow', 'lime', 'orange', 'orangered', "lightblue", 'red'];
        return (
            <RainbowFrame colors={colors}>
                Hello!
            </RainbowFrame>
        );
    }
}

export default App;