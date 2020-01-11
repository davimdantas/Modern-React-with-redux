import React from 'react';

class SearchBar extends React.Component {
    state = { search_term: 'Ramem' }

    onInputChange = (event) => {
        this.setState({ search_term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.search_term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form "
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label > Video Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.search_term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;