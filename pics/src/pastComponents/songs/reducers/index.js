import { combineReducers } from 'redux';


const songReducer = (songs = [], action) => {
    if (action.type === 'QUERY_DEEZER')
        return action.payload
    return songs;
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;

    return selectedSong;
};

const searchTerm = (term = '', action) => {
    if (action.type === 'SEARCH_TERM') {
        return action.payload
    }
    return term
}

export default combineReducers({
    songs: songReducer,
    selectedSongReducer: selectedSongReducer,
    searchTerm: searchTerm
})