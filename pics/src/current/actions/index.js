//Action creator

export const selectSong = (song) => {
    // console.log('song :', song);
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};