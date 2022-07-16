import axios from 'axios';

//this will allow to set the url for the ful application
export default axios.create({
    baseURL: 'http://localhost:3500'
});
