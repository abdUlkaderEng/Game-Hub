import axios, { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
baseURL:'https://api.rawg.io/api',
params:{key : '18b50523b00647afb6d4adb7e46a12b1'}
})
export interface fetchResponse<T>{
    count: number,
    next: string | null;
    results: T[],
}
class APIClient <T>{
    endPoint: string;
    
    constructor(endPoint: string) {
        this.endPoint=endPoint
    }
    
    getAll = (config: AxiosRequestConfig ) => {
        return axiosInstance
            .get<fetchResponse<T>>(this.endPoint, config)
            .then(res => res.data)
        
    }
}
export default APIClient
