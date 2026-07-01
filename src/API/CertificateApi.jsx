import AxiosInstance from "./AxiosInstance";

export const getCertificates= async ()=>{

    try {

        const axiosInstance = AxiosInstance();
        const response =await axiosInstance.get('/certificates');
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('error fetching certificates');
        throw error;
    }
    
}