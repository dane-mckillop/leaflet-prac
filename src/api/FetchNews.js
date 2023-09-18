import API_URL from '../components/config.js';

//CHANGE THE BELOW SUCH THAT IT IMPORTS NEWS ON SEARCH
//Add country codes in JSON.
export default function fetchNews(country) {
    let url = API_URL + `?country=` + ``;

    return fetch(url)
        .then(response => {
            return response.json()})
        .then(news => { return news});
}