import {API_URL} from '../components/config.js';

//Currently returning 200 response, but no articles. 
/**
 * Fetchs the news response object from news.api with a
 * pre-structured api_url fetch request.
 * 
 * NOTE: This should be seperated out into a seperately hosted back-end api service.
 * 
 * @param {*} country 
 * @returns 
 */
export default function FetchNews(country) {
    let url = API_URL + `?q=` + country + '&apiKey=' + process.env.REACT_APP_API_KEY;

    return fetch(url)
        .then((response) => {
            console.log(response);
            console.log(url);
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
};