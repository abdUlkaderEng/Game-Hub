import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";


interface fetchResponse<T>{
    count: number,
    results: T[]
}
const useData =<T>(endPoint :string , requestConfig ?:AxiosRequestConfig , debs ?: any[]) => {
    const [isloading , setLoading] = useState(false)
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController()
      setLoading(true)  
      apiClient
        .get<fetchResponse<T>>(endPoint ,{signal : controller.signal , ...requestConfig})
        .then((res) => 
        {
          setData(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)

          });
        return () => controller.abort()
    },
    debs ? [...debs] : []);
    return ({data ,error ,isloading})
}
export default useData