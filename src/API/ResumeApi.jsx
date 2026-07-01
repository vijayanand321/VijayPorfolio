import AxiosInstance from "./AxiosInstance";

export const GetResumeApi = async () => {
    try {
        const axiosInstance = AxiosInstance();
        const response = await axiosInstance.get('/resume', {
            responseType:'blob'
        });
        console.log(response)
        if(response.status===200){
            // Get the filename from the content disposition header
            const contentDisposition = response.headers['content-disposition'];

                //console.log(contentDisposition);

            if(contentDisposition && contentDisposition.includes('filename=')){
               console.log(contentDisposition);
               const filename = contentDisposition.split('filename=')[1];
               //console.log(filename);

               //create a blob from response
               const blob = new Blob([response.data], {type: 'application/pdf'});
               //console.log(response.data)
               //console.log(blob);

               const link = document.createElement('a');
               link.href = window.URL.createObjectURL(blob);
               link.download = filename; // Remove quotes around filename if present

               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
            }else{
               alert('resume is not available');
            }
       }else{
           alert('failed to download resume');
       }
    } catch (error) {
        console.log('Error fetching resume data:', error);
        alert('Error while downloading resume');
    }
}