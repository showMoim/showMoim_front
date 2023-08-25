export const errorLoggingService = (error : any) => {
    const configData = error.config
        console.log(
            "[ Error ] Request Start >>>>>  \n"
            + "url : "  + configData.baseURL + configData.url +"\n"
            + "method : " + configData.method + "\n"
            + "headers : " + configData.headers + "\n"
            + "data : " + configData.data + "\n" 
            + "          \n" 
            + "[ Error ] Response Start >>>>>> \n"
            + "error code : " + error.response.status +"\n"
            + "error message :"  + error.response.data.message
        );
    return error
}


export const responseLoggingService = (response : any) => {
    const configData = response.config;
            console.log(
                "Request Start >>>>>  \n"
                + "url : "  + configData.baseURL + configData.url +"\n"
                + "method : " + configData.method + "\n"
                + "headers : " + configData.headers + "\n"
                + "data : " + configData.data + "\n" 
                + "          \n" 
                + "Response Start >>>>>> \n"
                + "status : " + response.data.status +"\n"
                + "message : " + response.data.message + "\n"
                + "data : " + response.data.data
            )

}