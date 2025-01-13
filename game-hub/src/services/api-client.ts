import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a5190ce1e18942c584c3920b6b538cf2'
    }
})