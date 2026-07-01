import AxiosInstance from "./AxiosInstance";

export const getProjectsData = async ()=>{
    try {
        const axiosInstance = AxiosInstance();
       const projectResponse= await axiosInstance.get('/projects');
        if(projectResponse.status===200){
            //console.log(projectResponse.data);
            return projectResponse.data;
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}