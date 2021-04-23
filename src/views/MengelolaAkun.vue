<template>
<div class="col-xl-8">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap (Sesuai Kartu Mahasiswa)</label>
                        <input v-model="residen.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Enter your fullname"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username (gunakan huruf kecil tanpa spasi)</label>
                            <input v-model="residen.username" class="form-control" id="inputUsername" type="text" placeholder="Enter your username"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input v-model="residen.email" class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputPassword">Password</label>
                            <input v-model="residen.password" class="form-control" id="inputPassword" type="password" placeholder="Enter Password" >
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
                            <input v-model="residen.tempatLahir" class="form-control" id="inputTempatLahir" type="text" placeholder="Enter your tempat lahir"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputBirthday">Tanggal Lahir (yyyy-mm-dd)</label>
                            <input v-model="residen.tanggalLahir" class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputAlamat">Alamat</label>
                            <input v-model="residen.alamat" class="form-control" id="inputAlamat" type="text" placeholder="Enter your Alamat"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNomorTelepon">Nomor Telepon</label>
                            <input v-model="residen.nomorTelepon" class="form-control" id="inputNomorTelepon" type="text" name="NomorTelepon" placeholder="Enter your Nomor Telepon"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTahunMasuk">Tahun Masuk</label>
                            <input v-model="residen.tahunMasuk" class="form-control" id="inputTahunMasuk" type="number" placeholder="Tahun masuk universitas"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTerm">Term Perkuliahan</label>
                            <input v-model="residen.term" class="form-control" id="inputTerm" type="text" name="Term" placeholder="Enter your Term"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNpm">NPM</label>
                            <input v-model="residen.npm" class="form-control" id="inputNpm" type="text" placeholder="NPM"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputIdPembimbing">IdPembimbing Perkuliahan</label>
                            <input v-model="residen.idPembimbing" class="form-control" id="inputIdPembimbing" type="text" name="IdPembimbing" placeholder="Enter your IdPembimbing"/>
                        </div>
                    </div>

                    <!-- Save changes button-->
                    <button @click="handelResidenResgister" class="btn btn-primary" type="button">Save changes</button>
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
import Residen from '../models/residen';

export default {
    name: "MengelolaAkun",
    data() {
        return {
            password: "",
            residen: new Residen(),
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
        handelResidenResgister(){
            this.residen.tahunMasuk = parseInt(this.residen.tahunMasuk);
            console.log(this.residen);
            this.message = '';
            this.submitted = true;
            this.$store.dispatch('auth/registerResiden', this.residen).then(
            success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
                this.residen = new Residen();
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