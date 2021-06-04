<template>
<div class="container mt-10 align-items-center justify-content-center">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Data Staff</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap</label>
                        <input v-model="staff.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Cth: Ardiaf Rizky"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username</label>
                            <input disabled v-model="staff.username" class="form-control" id="inputUsername" type="text" placeholder="Cth: ardiafrizky"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputEmailAddress">Email</label>
                            <input v-model="staff.email" class="form-control" id="inputEmailAddress" type="email" placeholder="Cth: ardiaf@gmail.com"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="small mb-1" for="inputOldPassword">Password Lama</label>
                        <input v-model="oldPassword" class="form-control" id="inputOldPassword" type="password" placeholder="Masukkan Password Lama" >
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputPassword">Password Baru (min: 8 karakter)</label>
                            <input v-model="staff.password" class="form-control" id="inputPassword" type="password" placeholder="Masukkan Password Baru" >
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputRePassword">Re-Enter Password</label>
                            <input v-model="rePassword" class="form-control" id="inputRePassword" type="password" placeholder="Masukkan Lagi Password" >
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTempatLahir">Tempat Lahir</label>
                            <input v-model="staff.tempatLahir" class="form-control" id="inputTempatLahir" type="text" placeholder="Cth: Cilincing, DKI Jakarta"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir</label>
                            <input v-model="staff.tanggalLahir" class="form-control" id="inputBirthday" type="date" name="birthday"/>
                        </div>
                    </div>

                    <!-- Form Row -->
                    <label id="label-roles" class="small m-0" for="roles">Roles Saat Ini:</label>
                    <div class="form-row col mb-3">
                        
                        <ul v-for="role in currentRoles" v-bind:key="role.id" id="roles" class="">
                            <li v-if="role.name == 'ROLE_KONSULEN'" class="role-name border-bottom">
                                <i class="fas fa-check-circle"></i>
                                <p>Konsulen</p>
                            </li>
                            <li class="role-name border-bottom" v-if="role.name == 'ROLE_ADMIN'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Admin</p>
                            </li>
                            <li class="role-name border-bottom" v-if="role.name == 'ROLE_KETUAMODUL'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Ketua Modul</p>
                            </li>
                            <li class="role-name border-bottom" v-if="role.name == 'ROLE_PENGURUSAKADEMIK'" >
                                <i class="fas fa-check-circle"></i>
                                <p>Pengurus Akademik</p>
                            </li>
                        </ul>
                    </div>

                    <!-- Form Row -->
                    <label class="small mb-1" for="role-checkbox">Roles Baru:</label>
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
                    <button @click="handleUpdateStaff" class="btn btn-primary" type="button" data-toggle="modal" data-target="#saveModal">Simpan Perubahan</button>
                    <div class="form-group">
                        <div v-if="successful && message" class="alert alert-success mt-3" role="alert">{{message}}</div>
                        <div v-if="!successful && message" class="alert alert-danger mt-3" role="alert">{{message}}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Confirmation Modal -->
    <div class="modal fade" id="saveModal" tabindex="-1" role="dialog" aria-labelledby="saveModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="saveModalTitle">Pesan Perubahan Data</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div v-if="successful" class="modal-body success-body">
                    <i class="far fa-check-circle check-success"></i>
                    Akun {{ staff.name }} ({{staff.username}}) berhasil diperbaharui.
                </div>
                <div v-if="!successful" class="modal-body fail-body">
                    <i class="far fa-times-circle check-fail"></i>
                    Akun {{ staff.name }} ({{staff.username}}) gagal diperbaharui. Mohon periksa kembali data yang dimasukkan.
                </div>
                <div class="modal-footer">
                    <button v-if="successful" @click="redirectToView" class="btn btn-light" type="button" data-dismiss="modal">Tutup</button>
                    <button v-if="!successful" class="btn btn-light" type="button" data-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Staff from '../../models/staff';

export default {
    name: "UpdateStaff",
        data() {
        return {
            currentRoles: "",
            oldPassword: "",
            rePassword: "",
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

    created() {
        this.fetchDatas();
    },

    methods: {
        redirectToView() {
            this.$router.push('/mengelola-akun/view-staff/'+this.staff.username);
        },

        handleUpdateStaff(){
            if (!(this.staff.name && this.staff.username && this.staff.password
                    && this.roles.length!=0 && this.staff.email && this.staff.tempatLahir
                    && this.staff.tanggalLahir && this.oldPassword)) {
                this.message = "Mohon lengkapi semua field pada formulir.";
                return
            }
            if (this.rePassword != this.staff.password) {
                this.message = "Masukan pada 'Re-Enter Password' tidak sama dengan password baru";
                return
            }
            if (this.roles.length == 0) {
                this.message = "Harap masukkan minimal satu role.";
                return
            }

            this.message = '';
            this.submitted = true;
            this.staff.role = this.roles;
            this.staff.oldPassword = this.oldPassword;
            console.log(this.staff);
            this.$store.dispatch('auth/updateStaff', this.staff).then(
            success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
            },
            error => {
                this.message = "Error pada Server, cek kembali data yang dimasukkan. Jika error berlanjut, laporkan pada admin/programmer"
                    // (error.response && error.response.data && error.response.data.message) ||
                    // error.message ||
                    // error.toString();
                this.successful = false
                console.log(error);
                }
            );
            this.fetchDatas();
        },

        fetchDatas() {
            this.$store.dispatch('user/getPenggunaByUsername', this.$route.params.username).then(
            success => {
                this.staff = success;
                this.staff.password = "";
                this.currentRoles = this.staff.roles;
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.successful = false;
                this.$router.push('/404');
                }
            );
        }
    }
}
</script>

<style scoped>
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
.btn-light {
    background-color: rgb(211, 211, 211);
}
.modal-title {
    color: rgb(14, 91, 207);
}
.success-body, .fail-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.check-success {
    margin: 2rem;
    font-size: 3rem;
    color: rgba(54, 138, 54, 0.781);
}
.check-fail {
    margin: 2rem;
    font-size: 3rem;
    color: rgb(202, 39, 39);
}
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
.btn {
    margin: 2rem .75rem 0 0;
}
.btn-light {
    background-color: rgb(211, 211, 211);
}
.modal-title {
    color: rgb(14, 91, 207);
}
.success-body {
    display: flex;
    justify-content: center;
    align-items: center;
}
.check-success {
    margin: 2rem;
    font-size: 3rem;
}
</style>