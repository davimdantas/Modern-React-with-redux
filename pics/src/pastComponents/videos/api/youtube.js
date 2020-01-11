import axios from 'axios';

const KEY = 'AIzaSyDUWua_CjilEsQ5jHyDsgl6r0sSt0MrLbo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

