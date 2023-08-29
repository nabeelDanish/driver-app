import axios from 'axios';
import { productImages } from '../assets/images'


const baseUrl = "http://supply-chain.noondv.com"

export const getDriverData = async (driverCode, setResponseMessage, setError, setDriverLocation) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.get(baseUrl + '/driver', { headers });
        const data = response.data

        // Add Product Images
        data.currentOrders = data.currentOrders.map((order, index) => {
            order.image = index % productImages.length
            return order
        })

        // Set the response data to be displayed on the card
        setResponseMessage(data);
        setError(null);
        setDriverLocation({ latitude: data?.driver?.location?.latitude, longitude: data?.driver?.location?.longitude, })
    } catch (error) {
        console.error('Error fetching driver info:', error);
        setError('Error occurred while fetching driver info.');
        setResponseMessage(null);
    }
}

export const updateDriverLocation = async (driverCode, location) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.post(baseUrl + '/driver/location', { location }, { headers });

        return response.status == 200
    } catch (error) {
        console.error('Error batch picking:', error);
        return false
    }
}

export const getDarkstoreOrders = async (darkstoreCode) => {
    try {
        const response = await axios.get(baseUrl + `/darkstore/${darkstoreCode}/orders`);
        const data = response.data;
        return data.currentOrders.map((order, index) => {
            order.image = index % productImages.length
            return order
        })
    } catch (error) {
        console.error('Error fetching items:', error);
        return null
    }
}

export const getDarkstoreData = async (darkstoreCode) => {
    try {
        const response = await axios.get(baseUrl + `/darkstore/${darkstoreCode}`);
        const data = response.data;
        return data?.darkstore
    } catch (error) {
        console.error('Error fetching darkstore:', error);
        return null
    }
}

export const getDarkstoreLoadFactor = async (darkstoreCode) => {
    try {
        const response = await axios.get(baseUrl + `/darkstore/${darkstoreCode}/load-factor`);
        const data = response.data;
        return data?.loadFactor
    } catch (error) {
        console.error('Error fetching darkstore:', error);
        return 0
    }
}

export const pickOrders = async (driverCode, orderCodes) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.post(baseUrl + '/batch/pick', { orderCodes }, { headers });

        return response.status == 200
    } catch (error) {
        console.error('Error batch picking:', error);
        return false
    }
}

export const deliverOrder = async (driverCode, orderCode) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.post(baseUrl + '/order/deliver', { orderCode }, { headers });

        return response.status == 200
    } catch (error) {
        console.error('Error batch picking:', error);
        return false
    }
}

export const changeDriverStatus = async (driverCode, status) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.post(baseUrl + '/driver/status', { status }, { headers });

        return response.status == 200
    } catch (error) {
        console.error('Error batch picking:', error);
        return false
    }
}