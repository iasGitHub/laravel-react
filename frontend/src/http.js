import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:8000/apiBackend",
    headers:{
        "Content-type":"application/json"
    }
})