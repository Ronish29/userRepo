const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    SIGNUP_API: BASE_URL + "/signup",
    LOGIN_API: BASE_URL + "/login"
}

export const settingsEndPoints = {
    UPDATE_PROFILE_API : BASE_URL + "/updateProfile"
}

export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/getUserDetails"
}