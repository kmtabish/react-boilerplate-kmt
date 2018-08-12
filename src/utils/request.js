import axios from 'axios';
import { getPreset, ApiResponseCode, ApiConfig } from '../config/network';
let _baseHttpRequest = axios.create({
  baseURL: getPreset()
}); 
_baseHttpRequest.defaults.headers.common['Content-Type'] = 'application/json';
_baseHttpRequest.defaults.headers.common['Accept'] = 'application/json';
_baseHttpRequest.defaults.timeout = 100000;

const reportError = (error) => {
  console.log(error);
}

const _defaultOptions = {
  method: 'POST'
}


const _prepareAxiosConfig = (url, options = {}, payload = {}, config = { includeOpaqueData: true}) => {
  const {qs, params, data} = payload;
  const apiConfig = ApiConfig.find(api => api.url == url);
  
  if(data) {
  // add meta-data
  data.metadata= {
    appVersion: "123",
    ...data.metadata
    } 
  }

  const _data = {
    authToken: false? localStorage.getItem('access_token') : null, // add access token to every request.
    ...data
  }
  return {
    url,
    data: _data,
    params,
    ...options,
  };
  };

const businessAcceptedStatusCode = (responseStatus) => ['Status_Verification_Req', 'Status_Activation_Code_Req', 'Status_AccountLinking_Req'].map(key => ApiResponseCode[key].ApiStatusCode).indexOf(responseStatus) > -1;

export const httpRequest = (url, options, payload, config) => {
  const _AxiosConfig = _prepareAxiosConfig(url, options || _defaultOptions, payload, config);
  return new Promise((resolve, reject) => {
    console.log('HTTP request config - ', _AxiosConfig);
    _baseHttpRequest(_AxiosConfig)
      .then(response => {
        console.log('Http response', response);
        if (response.status == 200) {
          response.data.authToken && localStorage.setItem('access_token', response.data.authToken);
          return resolve(response.data);
        }
        else if (response.status == "error") {
          lStorage.delete('access_token');
          window.location.href = '/';
          return reject(response.data);
        }
      }).catch(error => {
          reportError(error);
          return reject(error);
    });
  });
};

export const findApiConfigByName = (apiName) => {
  // const _findApiConfigByName = (apiName) => (config) => config.name == apiName;
  return ApiConfig.find(config => config.name == apiName);
}