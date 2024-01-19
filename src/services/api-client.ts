import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'af261fe850a044c49a94592acaa72fbd'
    }
})