import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userData');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  registerResiden(residen) {
    return axios.post(API_URL + 'signup/residen', {
      username: residen.username,
      name: residen.name,
      password: residen.password,
      email: residen.email,
      alamatRumah: residen.alamatRumah,
      role: ["ROLE_RESIDEN"],
      tempatLahir: residen.tempatLahir,
      tanggalLahir: residen.tanggalLahir,
      tahunMasuk: residen.tahunMasuk,
      npm: residen.npm,
      term: residen.term,
      noTelepon: residen.noTelepon,
      idPembimbing: residen.idPembimbing
    }, { headers: authHeader() })
  }

  registerStaff(staff) {
    return axios.post(API_URL + 'signup/staff', {
      username: staff.username,
      name: staff.name,
      password: staff.password,
      email: staff.email,
      role: staff.role,
      tempatLahir: staff.tempatLahir,
      tanggalLahir: staff.tanggalLahir
    }, { headers: authHeader() })
  }

  updateResiden(residen) {
    return axios.post(API_URL + 'update/residen', {
      username: residen.username,
      name: residen.name,
      password: residen.password,
      email: residen.email,
      alamatRumah: residen.alamatRumah,
      role: ["ROLE_RESIDEN"],
      tempatLahir: residen.tempatLahir,
      tanggalLahir: residen.tanggalLahir,
      tahunMasuk: residen.tahunMasuk,
      npm: residen.npm,
      term: residen.term,
      noTelepon: residen.noTelepon,
      idPembimbing: residen.idPembimbing,
      oldPassword: residen.oldPassword
    }, { headers: authHeader() })
  }

  updateStaff(staff) {
    return axios.post(API_URL + 'update/staff', {
      username: staff.username,
      name: staff.name,
      password: staff.password,
      email: staff.email,
      role: staff.role,
      tempatLahir: staff.tempatLahir,
      tanggalLahir: staff.tanggalLahir,
      oldPassword: staff.oldPassword
    }, { headers: authHeader() })
  }

  deletePengguna(username) {
    return axios.delete(API_URL + 'delete/' + username, { headers: authHeader() });
  }
}

export default new AuthService();
