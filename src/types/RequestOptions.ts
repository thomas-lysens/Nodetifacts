type RequestOptions = {
    method: string;
    hostname: string;
    path: string;
    headers: {
        "Content-Type": string;
        Accept: string;
        Authorization: string;
    }
};

export default RequestOptions;