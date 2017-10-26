import config from '../config';
import axios from 'axios'
const STATUS_SUCCESS = 1

export const Network = {
    getDataFromApi(link,params,successCallBack,errorCallBack,method)
    {
        if (typeof successCallBack !== 'function') {
            successCallBack = function () { }
        }
        if (typeof errorCallBack !== 'function') {
            errorCallBack = function () { }
        }
        return axios({
            method : !method?'POST':method,
            url : link,
            data : params
        })
        .then(res => {
            if(res.data.code == STATUS_SUCCESS)
            {
                return successCallBack(res.data);
            } else {
                return errorCallBack(res.data);
            }
        })
        .catch(err => {
            console.log(err.response);
            return errorCallBack(err.response);
        })  
    }
}