import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://react-shoppingcart-af.firebaseio.com/"
});

export default axiosInstance;