import axios from "axios";


const BASE_URL = "https://api.github.com/users";

const fetchUserData = async(username) => {
    
    try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data
    } catch {
        if (error.response && error.response.status === 404) {
            throw new Error('user not found')
        }
        throw new Error("Failed to fetch user data");
        }
    }

export default fetchUserData;