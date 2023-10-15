import API_URL from '../components/config.js';

//CHANGE THE BELOW SUCH THAT IT IMPORTS NEWS ON SEARCH
//Add country codes in JSON.
//Referenced in: 
/**
 * Fetchs the news response object from news.api with a
 * pre-structured api_url fetch request.
 * 
 * @param {*} country 
 * @returns 
 */
export default function FetchNews(country) {
    let url = API_URL + `?country=` + country.code;

    return fetch(url)
        .then(response => {
            return response.json()})
        .then(news => { return news});
}