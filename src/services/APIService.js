const BASE_URL = 'http://localhost:8080/api';
class APIService {
    async request(endpoint, method, body = null) {
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : null,
        }
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);
            // if (!response.ok) {
            //     throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
            // }
            
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            return error;
        }


        return response.json();
    }

    get(endpoint) {
        return this.request(endpoint, 'GET')
    }

    post(endpoint, body) {
        return this.request(endpoint, 'POST', body);
    }

    put(endpoint, body) {
        return this.request(endpoint, 'PUT', body);
    }

    delete(endpoint) {
        return this.request(endpoint, 'DELETE');
    }
}

export default APIService;
