import axios from 'axios';

const baseUrl = "http://supply-chain.noondv.com"

export const getDriverData = async (driverCode, setResponseMessage, setError) => {
    try {
        const headers = {
            'X-forwarded-user': driverCode,
        };

        // Simulate the HTTP GET request response
        const response = await axios.get(baseUrl + '/driver', { headers });

        // Set the response data to be displayed on the card
        setResponseMessage(response.data);
        setError(null);
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

export const getDarkstoreOrders = async (darkstoreCode, setItems) => {
    try {
        const response = await axios.get(baseUrl + `/darkstore/${darkstoreCode}/orders`);
        const data = response.data;
        setItems(data.currentOrders); // Update the items state with the fetched data
    } catch (error) {
        console.error('Error fetching items:', error);
        return false
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