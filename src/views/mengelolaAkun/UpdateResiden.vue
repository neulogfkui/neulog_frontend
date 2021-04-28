<template>
<div v-if="isReady" class="container mt-10 align-items-center justify-content-center">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap (Sesuai Kartu Mahasiswa)</label>
                        <input v-model="residen.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Cth: Ardiaf Rizky"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username (huruf kecil tanpa spasi, min: 3 huruf)</label>
                            <input v-model="residen.username" class="form-control" id="inputUsername" type="text" placeholder="Cth: ardiafrizky"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input v-model="residen.email" class="form-control" id="inputEmailAddress" type="email" placeholder="Cth: ardiaf@gmail.com"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="small mb-1" for="inputOldPassword">Old Password</label>
                        <input v-model="oldPassword" class="form-control" id="inputOldPassword" type="password" placeholder="Masukkan Password Lama" >
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputPassword">New Password</label>
                            <input v-model="residen.password" class="form-control" id="inputPassword" type="password" placeholder="Masukkan Password Baru" >
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
                            <input v-model="residen.tempatLahir" class="form-control" id="inputTempatLahir" type="text" placeholder="Cth: Cilincing, DKI Jakarta"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir (yyyy-mm-dd)</label>
                            <input v-model="residen.tanggalLahir" class="form-control" id="inputBirthday" type="date" name="birthday"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputAlamat">Alamat</label>
                            <input v-model="residen.alamatRumah" class="form-control" id="inputAlamat" type="text" placeholder="ECth: Jl.Astiri, no.24 RT01/02 Koja, DKI Jakarta"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNomorTelepon">Nomor Telepon</label>
                            <input v-model="residen.noTelepon" class="form-control" id="inputNomorTelepon" type="text" name="NomorTelepon" placeholder="Cth: 08123123XXX"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTahunMasuk">Tahun Masuk</label>
                            <input v-model="residen.tahunMasuk" class="form-control" id="inputTahunMasuk" type="number" placeholder="Cth: 2018"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTerm">Term Perkuliahan</label>
                            <input v-model="residen.term" class="form-control" id="inputTerm" type="number" name="Term" placeholder="Cth: 3"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNpm">NPM</label>
                            <input v-model="residen.npm" class="form-control" id="inputNpm" type="number" placeholder="Cth: 180619XXXX"/>
                        </div>
                        <!-- <div class="form-group col">
                            <label class="small mb-1" for="inputIdPembimbing">IdPembimbing Perkuliahan</label>
                            <input v-model="residen.idPembimbing" class="form-control" id="inputIdPembimbing" type="text" name="IdPembimbing" placeholder="Enter your IdPembimbing"/>
                        </div> -->
                        <div class="form-group col">
                            <label class="small mb-1" for="inputIdPembimbing">Konsulen Pembimbing</label>
                            <select class="form-control" id="inputIdPembimbing" v-model="residen.idPembimbing">
                                <option v-for="konsulen in konsulens" :key="konsulen.idKonsulen" v-bind:value="konsulen.idKonsulen">{{ konsulen.name }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Save changes button-->
                    <button @click="handleUpdateResiden" class="btn btn-primary" type="button" data-toggle="modal" data-target="#updateSuccess">Save changes</button>
                    <div class="form-group">
                        <div v-if="successful && message" class="alert alert-success mt-3" role="alert">{{message}}</div>
                        <div v-if="!successful && message" class="alert alert-danger mt-3" role="alert">{{message}}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Confirmation Modal -->
    <div class="modal fade" id="updateSuccess" tabindex="-1" role="dialog" aria-labelledby="updateSuccessTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="updateSuccessTitle">Pesan Perubahan Data</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div v-if="successful" class="modal-body success-body">
                    <i class="far fa-check-circle check-success"></i>
                    Akun {{ residen.name }} ({{residen.username}}) berhasil diperbaharui.
                </div>
                <div v-if="!successful" class="modal-body fail-body">
                    <i class="far fa-times-circle check-fail"></i>
                    Akun {{ residen.name }} ({{residen.username}}) gagal diperbaharui. Mohon periksa kembali data yang dimasukkan.
                </div>
                <div class="modal-footer">
                    <button v-if="successful" @click="redirectToHome" class="btn btn-light" type="button" data-dismiss="modal">Tutup</button>
                    <button v-if="!successful" class="btn btn-light" type="button" data-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Residen from '../../models/residen';
import User from '../../models/user';

export default {
    name: "UpdateResiden",
    data() {
        return {
            oldPassword: "",
            rePassword: "",
            residen: new Residen(),
            submitted: false,
            successful: false,
            message: '',
            namaKonsulen: "",
            konsulens: Array,
            ready: false
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        },
        isReady() {
            return this.ready;
        }
    },

    created() {
        this.fetchDatas();
        this.ready = true;
        console.log(this.residen);
    },

    methods: {
        redirectToHome() {
            this.$router.push('/mengelola-akun/residen');
        },

        handleUpdateResiden(){
             if (!(this.residen.name && this.residen.username && this.residen.password && this.residen.alamatRumah
                    && this.residen.email && this.residen.tempatLahir && this.residen.tanggalLahir && this.residen.noTelepon
                    && this.residen.tahunMasuk && this.residen.term && this.residen.npm && this.residen.idPembimbing && this.oldPassword)) {
                this.message = "Mohon lengkapi semua field pada formulir.";
                return
            }

            if (this.rePassword != this.residen.password) {
                this.message = "Masukan pada 'Re-Enter Password' tidak sama dengan password baru";
                return
            }

            this.message = '';
            this.submitted = true;
            this.residen.oldPassword = this.oldPassword;
            this.$store.dispatch('auth/updateResiden', this.residen).then(
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
                }
            );
        },

        fetchDatas() {
            this.$store.dispatch('user/getResidenById', this.$route.params.idResiden).then(
            success => {
                this.residen = success;
                this.residen.idPembimbing = success.konsulen.idKonsulen;
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.$router.push('/404');
                }
            );
            
            this.$store.dispatch('user/getPenggunaByResidenId', this.$route.params.idResiden).then(
            success => {
                this.residen.username = success.username;
                this.residen.name = success.name;
                this.residen.email = success.email;
                this.residen.tanggalLahir = success.tanggalLahir;
                this.residen.tempatLahir = success.tempatLahir;
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
            this.$store.dispatch('user/getAllPenggunaKonsulen', this.$route.params.username).then(
            success => {
                this.konsulens = success;
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
</style>