const API_ENDPOINT = "http://45.32.21.62:3000/api/v1"
var config = {
    API_ENDPOINT : API_ENDPOINT,
    API_REGISTER : API_ENDPOINT + "/users/registrations",
    API_LOGIN : API_ENDPOINT + "/sign_in",
    API_UPLOAD : API_ENDPOINT+ "/image_uploaders",
    API_PORTFOLIOS : API_ENDPOINT + "/portfolios"
}
module.exports = config;