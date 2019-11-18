const ROUTES = {
  USERS: {
    CREATE_USERS: {
      URL: "/create",
      METHOD: "POST"
    },
    LOGIN_USERS: {
      URL: "/users/login",
      METHOD: "GET"
    },
    LOGOUT_USERS: {
      URL: "/users/logout",
      METHOD: "DELETE"
    }
  }
};
module.exports = {
  ROUTES
};
