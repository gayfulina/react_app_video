import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

const KEY = "YOUR_KEY";

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        )
    }
}

export default App;
