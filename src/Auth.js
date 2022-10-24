const Auth = {
  isAuthenticated: false,
  token: '',

  authenticate(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', email);
    this.token = token;
    this.isAuthenticated = true;
  },

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    
    this.isAuthenticated = false;
  },

  getAuth() {
    return this.isAuthenticated;
  },

  getToken() {
    return this.token;
  }
};
export default Auth;
