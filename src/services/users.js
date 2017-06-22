import request from '../utils/request'

const host="http://10.1.32.227:8080/contract-web/";
export function fetch(option){
    return request(host+option.url,option)
}