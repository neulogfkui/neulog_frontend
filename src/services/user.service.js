import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/';

class UserService {

  getResidenById(id) {
    return axios
    .get(API_URL + 'residen/' + id, { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getAllPenggunaResiden() {
    return axios
    .get(API_URL + 'pengguna/residen/all', { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getAllPenggunaKonsulen() {
    return axios
    .get(API_URL + 'pengguna/konsulen/all', { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getAllPenggunaStaff() {
    return axios
    .get(API_URL + 'pengguna/staff/all', { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getAllPengguna() {
    return axios
    .get(API_URL + 'pengguna/all', { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getPenggunaByResidenId(id) {
    return axios
    .get(API_URL + 'pengguna/byResiden/' + id, { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getPenggunaByUsername(username) {
    return axios
    .get(API_URL + 'pengguna/' + username, { headers: authHeader() })
    .then(response => { return response.data;});
  }

  getPenggunaRolesByUsername(username) {
    return axios
    .get(API_URL + 'pengguna/roles/' + username, { headers: authHeader() })
    .then(response => { return response.data;});
  }

  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  // getUserBoard() {
  //   return axios.get(API_URL + 'user', { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();
