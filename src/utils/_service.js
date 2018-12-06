import axios from '@axios';

class Service {

    // post 请求
    _post = (url, params) => {
        return new Promise ((resolve, reject) => {
            axios.post(url, params)
            .then( res => {
                resolve(res)
            })
            .catch( err => {
                console.log(err);
            })
        })
    }

    // get 请求
    _get = (url, params) => {
        return new Promise ((resolve, reject) => {
            axios.get(url, { params: params } )
            .then( res => {
                resolve(res)
            })
            .catch( err => {
                console.log(err);
            })
        })
    }
}

export default new Service();