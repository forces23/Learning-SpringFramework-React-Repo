import axios from "axios"

export function retrieveHellowWorldBean(){
    return axios.get('http://localhost:8080/hello-world-bean/')
}

// for future reference above is same as below
// export const retrieveHellowWorldBean 
//     = () => axios.get('http://localhost:8080/hello-world-bean/')
