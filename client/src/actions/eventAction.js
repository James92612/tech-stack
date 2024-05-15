import axios from 'axios'

export async function sendEvent(data) {
        try {
            const response = await axios.post('http://localhost:5000/api/events', data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

export async function getEvents() {
    try {
        const response = await axios.get('http://localhost:5000/api/events');
        return response.data
    } catch (error) {
        console.log(error);
    }
}