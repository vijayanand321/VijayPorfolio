import AxiosInstance from "./AxiosInstance";

export const getVijay = async ()=>{
    try {
        const axiosInstance = AxiosInstance();
        const response=await axiosInstance.get('/vijay');
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching vijay data:', error);
        throw error;
    }
}