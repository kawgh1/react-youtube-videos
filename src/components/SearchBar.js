import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState( { term: event.target.value } );

    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // to do: Make sure we call callback from parent component - make new youtube api request
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
        <div className="search-bar ui segment search">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input className="ui input focus" type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
                </div>
                );
    }
}

export default SearchBar