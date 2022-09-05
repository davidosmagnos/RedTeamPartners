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

    static addUser(username,password,first_name,last_name){
        return axios.post(url,{
            username,
            password,
            first_name,
            last_name
        })
    }
    static deleteUser(id){
        return axios.delete(`${url}${id}`)
    }
}

export default UserService;