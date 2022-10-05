const Auth = {
  isAuthenticated: false,
  token: '',
  refreshToken: '',

  authenticate(token, refresh, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('username', email);
    this.token = token;
    this.refreshToken = refresh;
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
