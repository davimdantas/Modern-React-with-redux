import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, queryDeezer, selectSong } from '../actions'
import deezer from '../api/deezer'



class SearchBar extends Component {

    componentDidMount() {
        this.props.setSearchTerm('Sam Smith')
        this.findMusics('Sam Smith')
    };

    findMusics = async (term) => {
        const response = await deezer.get('/search', {
            params: {
                q: term
            }
        })
        if (response.status === 200) {
            this.props.queryDeezer(response.data.data)
            this.props.selectSong(response.data.data[0])
        }
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        this.findMusics(this.props.searchTerm)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search on Deezer</label>
                        <input
                            type="text"
                            value={this.props.searchTerm}
                            onChange={current_value => this.props.setSearchTerm(current_value.target.value)}
                        />
                    </div>
                </form>
            </div>

        )
    }

};

const mapStateToProps = (state) => {
    // console.log('\n SearchBar state :', state);
    return {
        songs: state.songs,
        searchTerm: state.searchTerm
    }
}


export default connect(mapStateToProps, { setSearchTerm, queryDeezer, selectSong })(SearchBar);