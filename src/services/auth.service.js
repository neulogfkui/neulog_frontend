import axios from 'axios';

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
      alamat: residen.alamat,
      role: ["ROLE_RESIDEN"],
      tempatLahir: residen.tempatLahir,
      tanggalLahir: residen.tanggalLahir,
      tahunMasuk: residen.tahunMasuk,
      npm: residen.npm,
      term: residen.term,
      nomorTelepon: residen.nomorTelepon,
      idPembimbing: residen.idPembimbing
    })
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
    })
  }
}

export default new AuthService();
