import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return axios.get("/api/login");
    },
    getUser: function (id) {
        return axios.get("/api/login/" + id);
    }, 
    saveUser: function(userData) {
       return axios.post("/api/signup", userData);
   }
};