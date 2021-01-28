import React from 'react';
import Header from '../Header/Header';
import './App.css';

import name from './../../lib/nameGenerator';

class App extends React.Component {
    componentDidMount() {
        console.log(name('Hello!'));
    }

    render() {
        return (
            <div className="app-container">
                <Header />
            </div>
        );
    }
}

export default App;
