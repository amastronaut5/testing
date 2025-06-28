import axios from 'axios';
const url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}api/`;

export const signup = async(postData)=>{
    try {
        const response = await axios.post(url, postData, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}
export const login = async(postData)=>{
    try {
        const response = await axios.post(url, postData, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}