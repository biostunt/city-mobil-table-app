import axios from "axios";

export const executeGetRequest = async (url: string, data?: any): Promise<any> => {
    let response = await axios(url, { params: data });
    return response.data;
}