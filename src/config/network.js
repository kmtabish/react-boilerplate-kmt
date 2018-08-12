const URLConfig = "";
export const ApiNames = Object.freeze({
    Login: 'Login'
})

export const getPreset = () => {
    let _url = URLConfig
    return _url;
  }
export const ApiConfig = Object.freeze([
    {
      name: ApiNames.Login, // namespace for apis
      url: `${URLConfig}/login`, // url for api
    }
])