<template>
<div class="container mt-10 align-items-center justify-content-center">
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

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputPassword">Password (min: 8 karakter)</label>
                            <input v-model="residen.password" class="form-control" id="inputPassword" type="password" placeholder="Masukkan Password" >
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
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir</label>
                            <input v-model="residen.tanggalLahir" class="form-control" id="inputBirthday" type="date" name="birthday"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputAlamat">Alamat</label>
                            <input v-model="residen.alamatRumah" class="form-control" id="inputAlamat" type="text" placeholder="Cth: Jl.Astiri, no.24 RT01/02 Koja, DKI Jakarta"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNomorTelepon">Nomor Telepon</label>
                            <input v-model="residen.noTelepon" class="form-control" id="inputNomorTelepon" type="number" name="NomorTelepon" placeholder="Cth: 08123123XXX"/>
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
                    <button @click="handleResidenResgister" class="btn btn-primary" type="button" data-toggle="modal" data-target="#saveModal">Buat Residen</button>
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
                <div v-if="isLoading" class="modal-body success-body">
                    <span v-show="isLoading" class="spinner-border spinner-border-sm"></span>
                    File sedang dikirimkan...
                </div>
                <div v-if="successful && !isLoading" class="modal-body success-body">
                    <i class="far fa-check-circle check-success"></i>
                    Akun {{ residen.name }} ({{residen.username}}) berhasil ditambahkan.
                </div>
                <div v-if="!successful && !isLoading" class="modal-body fail-body">
                    <i class="far fa-times-circle check-fail"></i>
                    Akun {{ residen.name }} ({{residen.username}}) gagal ditambahkan. Mohon periksa kembali data yang dimasukkan.
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

export default {
    name: "ResidenRegister",
    data() {
        return {
            isLoading: false,
            rePassword: "",
            residen: new Residen(),
            submitted: false,
            successful: false,
            message: '',
            konsulens: Array
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    },
    created() {
        this.$store.dispatch('user/getAllPenggunaKonsulen', this.$route.params.username).then(
            success => {
                this.konsulens = success;
                console.log(this.konsulens);
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
    },
    methods: {
        redirectToHome() {
            this.$router.push('/mengelola-akun/residen');
        },
        handleResidenResgister(){
            this.isLoading = true;
            if (!(this.residen.name && this.residen.username && this.residen.password && this.residen.alamatRumah
                    && this.residen.email && this.residen.tempatLahir && this.residen.tanggalLahir && this.residen.noTelepon
                    && this.residen.tahunMasuk && this.residen.term && this.residen.npm && this.residen.idPembimbing)) {
                this.message = "Mohon lengkapi semua field pada formulir.";
                return
            }
            console.log(this.$store.state.auth.user);
            if (this.rePassword != this.residen.password) {
                this.message = "Masukan pada 'Re-Enter Password' tidak sama dengan password baru";
                return
            }

            console.log(this.residen);
            this.message = '';
            this.submitted = true;
            this.$store.dispatch('auth/registerResiden', this.residen).then(
            success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
                this.isLoading = false;
            },
            error => {
                this.message = "Error pada Server, cek kembali data yang dimasukkan. Jika error berlanjut, laporkan pada admin/programmer"
                    // (error.response && error.response.data && error.response.data.message) ||
                    // error.message ||
                    // error.toString();
                this.successful = false;
                this.isLoading = false;
                }
            );
        }
    }
}
</script>

<style scoped>
#residen-style {
    margin: auto;
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