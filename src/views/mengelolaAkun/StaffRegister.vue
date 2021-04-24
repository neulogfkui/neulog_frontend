<template>
<div class="container mt-10 align-items-center justify-content-center">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap</label>
                        <input v-model="staff.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Enter your fullname"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username (gunakan huruf kecil tanpa spasi)</label>
                            <input v-model="staff.username" class="form-control" id="inputUsername" type="text" placeholder="Enter your username"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input v-model="staff.email" class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputPassword">Password</label>
                            <input v-model="staff.password" class="form-control" id="inputPassword" type="password" placeholder="Enter Password" >
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputRePassword">Re-Enter Password</label>
                            <input v-model="password" class="form-control" id="inputRePassword" type="password" placeholder="Enter Password" >
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTempatLahir">Tempat Lahir</label>
                            <input v-model="staff.tempatLahir" class="form-control" id="inputTempatLahir" type="text" placeholder="Enter your tempat lahir"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir (yyyy-mm-dd)</label>
                            <input v-model="staff.tanggalLahir" class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday"/>
                        </div>
                    </div>

                    <!-- Form Row -->
                    <div class="form-row" id="role-checkbox">
                        <div class="form-group">
                            <input class="custom-control custom-checkbox" type="checkbox" id="konsulen" value="ROLE_KONSULEN" v-model="roles">
                            <label for="konsulen">Konsulen</label>
                        </div>
                        <div class="form-group">
                            <input class="custom-control custom-checkbox" type="checkbox" id="admin" value="ROLE_ADMIN" v-model="roles">
                            <label for="admin">Admin</label>
                        </div>
                        <div class="form-group">
                            <input class="custom-control custom-checkbox" type="checkbox" id="pengurusAkademik" value="ROLE_PENGURUSAKADEMIK" v-model="roles">
                            <label for="pengurusAkademik">Pengurus Akademik</label>
                        </div>
                        <div class="form-group">
                            <input class="custom-control custom-checkbox" type="checkbox" id="ketuaModul" value="ROLE_KETUAMODUL" v-model="roles">
                            <label for="ketuaModul">Ketua Modul</label>
                        </div>
                    </div>

                    <!-- Save changes button-->
                    <button @click="handleStaffResgister" class="btn btn-primary" type="button">Create New User</button>
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
import Staff from '../../models/staff';

export default {
    name: "StaffRegister",
    data() {
        return {
            password: "",
            staff: new Staff(),
            roles: [],
            submitted: false,
            successful: false,
            message: ''
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    },
    methods: {
        handleStaffResgister(){
            this.staff.role = this.roles;
            console.log(this.staff);
            this.message = '';
            this.submitted = true;
            this.$store.dispatch('auth/registerStaff', this.staff).then(
            success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
                this.staff = new Staff();
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.successful = false
                }
            );
        }
    }
}
</script>

<style>
#role-checkbox {
    display: flex;
}
#role-checkbox > .form-group {
    display: flex;
    margin: 1rem;
}
#role-checkbox > .form-group > label {
    margin-left: .3rem;
}
</style>