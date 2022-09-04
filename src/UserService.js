import axios from "axios";

const url = 'http://localhost:5000/api/users/';
class UserService{
    static async getAllUsers(){
        const data = (await axios.get(url)).data

        return data
    }
    static async getUser(username){
        const data = (await axios.get(`${url}${username}`)).data

        return data
    }
}

export default UserService;