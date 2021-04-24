<template>
<div class="container mt-10 align-items-center justify-content-center">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Data Staff</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap</label>
                        <input disabled v-model="user.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Enter your fullname"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username</label>
                            <input disabled v-model="user.username" class="form-control" id="inputUsername" type="text" placeholder="Enter your username"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input disabled v-model="user.email" class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTempatLahir">Tempat Lahir</label>
                            <input disabled v-model="user.tempatLahir" class="form-control" id="inputTempatLahir" type="text" placeholder="Enter your tempat lahir"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir (yyyy-mm-dd)</label>
                            <input disabled v-model="user.tanggalLahir" class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday"/>
                        </div>
                    </div>

                    <!-- Form Row -->
                    <div class="form-row col mb-3">
                        <label id="label-roles" class="small m-0" for="roles">Roles:</label>
                        <ul v-for="role in roles" v-bind:key="role.id" id="roles" class="">
                            <li v-if="role.name == 'ROLE_KONSULEN'" class="role-name">
                                <i class="fas fa-check-circle"></i>
                                <p>Konsulen</p>
                            </li>
                            <li class="role-name" v-if="role.name == 'ROLE_ADMIN'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Admin</p>
                            </li>
                            <li class="role-name" v-if="role.name == 'ROLE_KETUAMODUL'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Ketua Modul</p>
                            </li>
                            <li class="role-name" v-if="role.name == 'ROLE_PENGURUSAKADEMIK'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Pengurus Akademik</p>
                            </li>
                        </ul>
                    </div>

                    <!-- Save changes button-->
                    <button @click="handleGetResidenDatas" class="btn btn-primary" type="button">Save changes</button>
                    <div class="form-group">
                        <div v-if="successful && message" class="alert alert-success mt-3" role="alert">{{message}}</div>
                        <div v-if="!successful && message" class="alert alert-danger mt-3" role="alert">{{message}}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import User from  '../../models/user';

export default {
    name: "ViewResiden",
    data() {
        return {
            user: new User(),
            roles: [],
            submitted: false,
            successful: false,
            message: ''
        }
    },
    mounted() {
        this.$store.dispatch('user/getPenggunaByUsername', this.$route.params.username).then(
        success => {
            this.user = success;
            this.roles = this.user.roles;
            console.log(this.user);
        },
        error => {
            this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            // this.$router.push('/404');
            }
        );
    },

    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    }

}
</script>

<style>
.role-name {
    display: flex;
}
.role-name > p {
    font-size: 14px;
    margin: 5px;
}
ul {
    margin-bottom: 0 !important;
}
i, #label-roles{
    display: flex;
    justify-self: center;
    align-self: center;
}
i {
    color: rgba(54, 138, 54, 0.781);
}
</style>