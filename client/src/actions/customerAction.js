import axios from 'axios'

export async function createCustomer(form) {
    try {
        const res = await axios.post('http://localhost:5000/api/home', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export async function createPromotion(form) {
    try {
        const res = await axios.post('http://localhost:5000/api/promotion', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCustomers() {
    try {
        const res = await axios.get('http://localhost:5000/api/customer')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}