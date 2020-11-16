import axios from "axios";

const KEY = 'AIzaSyBWz8ANMpTYCUfilxKDpBmAe22dJM_NX0k';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});