import axios from 'axios'

export default(url="http://localhost:8000/") =>{
    return axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json'
          }
    })
}