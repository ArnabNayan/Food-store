import axios from "axios";

const axiosPublic=axios.create({
    //  baseURL:'https://food-store-server-g3gt.onrender.com'
     baseURL:'http://localhost:5000/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;