import axios from "axios";

class API {
  axios;

  constructor() {
    this.axios = axios.create();
  }

  /**
   * @param {String} name
   * @param {String} value
   */
  setHeader(name, value) {
    if (value) this.axios.defaults.headers.common[name] = value;
    else delete this.axios.defaults.headers.common[name];
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  register(userData) {
    return this.axios.post("/auth/register", userData);
  }

  /**
   * @param {object} userData
   * @param {String} userData.email
   * @param {String} userData.password
   *
   * @returns {Promise}
   */
  login(userData) {
    return this.axios.post("/auth/login", userData);
  }

  authenticated() {
    return this.axios.post("/auth/authenticated");
  }

  loadUsers() {
      return this.axios.get("/api/user");
  }

  getallUsers() {
    return this.axios.get("/api/user/all");
  }

  getClassmate(id) {
    return this.axios.get("/api/user/classmate/" + id)
  }
}

export default new API();
