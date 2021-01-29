import React from 'react';
import Header from '../Header/Header';
import './App.css';

import name from './../../lib/nameGenerator';
import SearchBox from '../SearchBox/SearchBox';

class App extends React.Component {
    state = {
        expandedHeader: true,
        searchText: '',
    };

    componentDidMount() {
        console.log(name('Hello!'));
    }

    handleSearch = (searchText) => {
        if (!searchText) {
            console.log('Expanding!', searchText);
            this.setState({ expandedHeader: true, searchText });
        } else {
            console.log('Contracting', searchText);
            this.setState({
                expandedHeader: false,
                searchText,
            });
        }
    };

    render() {
        return (
            <div className="app-container">
                <Header expandedHeader={this.state.expandedHeader} />
                <SearchBox onInputChange={this.handleSearch} />
            </div>
        );
    }
}

export default App;
