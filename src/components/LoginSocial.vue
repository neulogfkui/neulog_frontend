<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-11">
                            <!-- Social login form-->
                            <div class="card my-5">
                                <div class="card-body p-4 text-center">
                                    <div class="h3 font-weight-light mb-0">Welcome to <span class="neulog-text">Neulog</span></div>
                                </div>
                                <hr class="my-0" />
                                <div class="card-body p-5">
                                    <!-- Login form-->
                                    <form name="form" @submit.prevent="handleLogin">
                                        <!-- Form Group (email address)-->
                                        <div class="form-group">
                                            <label class="text-gray-600 small" for="username">Username</label>
                                            <input v-model="user.username" class="form-control form-control-solid" type="text" placeholder aria-label="Username" aria-describedby="username" />
                                        </div>
                                        <!-- Form Group (password)-->
                                        <div class="form-group">
                                            <label class="text-gray-600 small" for="password">Password</label>
                                            <input v-model="user.password" class="form-control form-control-solid" type="password" placeholder aria-label="Password" aria-describedby="password" />
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-primary btn-block" :disabled="loading">
                                                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                                <span>Login</span>
                                            </button>
                                        </div>
                                        <div class="form-group">
                                            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                                        </div>
                                    </form>
                                </div>
                                <hr class="my-0" />
                                <div class="card-body px-5 py-4">
                                    <div class="small text-center">
                                        No account? Contact our <strong>admin</strong> to create one.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'LoginSocial',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      error: null,
    };
  },

  methods: {
    handleLogin() {
        if (!(this.user.username && this.user.password)) {
            this.message = "Fill username and password first";
            return
        }

        this.loading = true;
        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
          success => {
            this.loading = false;
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
              this.message = this.message.includes("401")? "Akun atau password tidak valid" : this.message;
              this.$store.commit("auth/loginFailure");
            }
          );
        };
    }
  }
};
</script>

<style>
.neulog-text {
    font-weight: 500;
    background: -webkit-linear-gradient(rgb(31, 223, 159), rgb(59, 104, 226));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
</style>
