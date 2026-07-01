import AxiosInstance from "./AxiosInstance";

export const getImages = async ()=>{
    try {
        const axiosInstance = AxiosInstance();
        const response = await axiosInstance.get('/images');
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching footer data:', error);
        throw error;
    }
}