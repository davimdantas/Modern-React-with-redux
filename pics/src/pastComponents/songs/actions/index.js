//Action creator

export const queryDeezer = (songs) => {
    return {
        type: 'QUERY_DEEZER',
        payload: songs
    }
}

export const selectSong = (song) => {
    // console.log('song :', song);
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const setSearchTerm = (term) => {
    // console.log('action setSearchTerm :', term);
    return {
        type: 'SEARCH_TERM',
        payload: term
    }
}