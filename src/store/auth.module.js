import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      AuthService.login(user).then(
        user => {
          return UserService.getPenggunaRolesByUsername(user.username)
          .then(userData => {
            localStorage.setItem("userData", JSON.stringify(userData));
            commit('loginSuccess', user);
            return Promise.resolve(user);
          })
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    registerResiden({ commit }, residen) {
      return AuthService.registerResiden(residen).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    registerStaff({ commit }, staff) {
      return AuthService.registerStaff(staff).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    updateResiden({ commit }, residen) {
      return AuthService.updateResiden(residen).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    updateStaff({ commit }, staff) {
      return AuthService.updateStaff(staff).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    deletePengguna({ commit }, username) {
      return AuthService.deletePengguna(username).then(
        response => {
          return Promise.resolve(response.data);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.user = user;
      state.status.loggedIn = true;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  }
};
