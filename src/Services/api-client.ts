import axios from "axios";
export interface fetchResponse<T>{
    count: number,
    results: T[]
}
export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{key : '18b50523b00647afb6d4adb7e46a12b1'}
})