import AxiosInstance from "./AxiosInstance";

export const getFooterData= async ()=>{
    try {
      const axiosInstance = AxiosInstance();
        const response= await axiosInstance.get('/footer');
        return response.data;
    } catch (error) {
        console.error('Error fetching footer data:', error);
        throw error;
    }
};

export const updateFooterData = async (updatedFooter) => {
    try {
      const axiosInstance =  AxiosInstance();
      const response = await axiosInstance.put('/footer', updatedFooter);
      return response.data;
    } catch (error) {
      console.error('Error updating footer data:', error);
      throw error;
    }
  };