const API_ENDPOINT = "https://kiwiserver.herokuapp.com/api/v1"
var config = {
    API_ENDPOINT : API_ENDPOINT,
    API_REGISTER : API_ENDPOINT + "/users/registrations",
    API_LOGIN : API_ENDPOINT + "/sign_in"
}
module.exports = config;