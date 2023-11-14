import React from 'react';
import RainbowFrame from './RainbowFrame.jsx'


class App extends React.Component {

    render() {
        let colors = ['deeppink', 'lime', 'yellow', 'orangered', '#00BFFF', 'blue', 'red'];
        return (
            <RainbowFrame colors={colors}>
                Hello!
            </RainbowFrame>
        );
    }
}

export default App;