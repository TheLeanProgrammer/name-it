import React from 'react';
import Header from '../Header/Header';
import './App.css';

import name from './../../lib/nameGenerator';
import SearchBox from '../SearchBox/SearchBox';

class App extends React.Component {
    state = {
        focusedHeader: true,
    };

    componentDidMount() {
        console.log(name('Hello!'));
    }

    render() {
        return (
            <div className="app-container">
                <Header focusedHeader={this.state.focusedHeader} />
                <SearchBox />
            </div>
        );
    }
}

export default App;
