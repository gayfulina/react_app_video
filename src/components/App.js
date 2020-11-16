import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

const KEY = "YOUR_KEY";

class App extends React.Component {
    onTermSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App;
