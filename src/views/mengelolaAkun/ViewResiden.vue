<template>
<div class="container mt-10 align-items-center justify-content-center">
        <!-- Account details card-->
        <div class="card mb-4">
            <div class="card-header">Data Residen</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label class="small mb-1" for="inputNamaLengkap">Nama Lengkap (Sesuai Kartu Mahasiswa)</label>
                        <input disabled v-model="user.name" class="form-control" id="inputNamaLengkap" type="text" placeholder="Enter your fullname"/>
                    </div>

                    <!-- Form Group (username)-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputUsername">Username (gunakan huruf kecil tanpa spasi)</label>
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

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputAlamat">Alamat</label>
                            <input disabled v-model="residen.alamatRumah" class="form-control" id="inputAlamat" type="text" placeholder="Enter your Alamat"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNomorTelepon">Nomor Telepon</label>
                            <input disabled v-model="residen.noTelepon" class="form-control" id="inputNomorTelepon" type="text" name="NomorTelepon" placeholder="Enter your Nomor Telepon"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTahunMasuk">Tahun Masuk</label>
                            <input disabled v-model="residen.tahunMasuk" class="form-control" id="inputTahunMasuk" type="number" placeholder="Tahun masuk universitas"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputTerm">Term Perkuliahan</label>
                            <input disabled v-model="residen.term" class="form-control" id="inputTerm" type="text" name="Term" placeholder="Enter your Term"/>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="form-row">
                        <div class="form-group col">
                            <label class="small mb-1" for="inputNpm">NPM</label>
                            <input disabled v-model="residen.npm" class="form-control" id="inputNpm" type="text" placeholder="NPM"/>
                        </div>
                        <div class="form-group col">
                            <label class="small mb-1" for="inputIdPembimbing">IdPembimbing Perkuliahan</label>
                            <input disabled v-model="namaKonsulen" class="form-control" id="inputIdPembimbing" type="text" name="IdPembimbing" placeholder="Enter your IdPembimbing"/>
                        </div>
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
import Residen from '../../models/residen';
import User from  '../../models/user';

export default {
    name: "ViewResiden",
    data() {
        return {
            password: "",
            residen: new Residen(),
            user: new User(),
            namaKonsulen: "",
            submitted: false,
            successful: false,
            message: ''
        }
    },
    mounted() {
        this.$store.dispatch('user/getResidenById', this.$route.params.idResiden).then(
        success => {
            console.log(success);
            this.residen = success;
            this.namaKonsulen = success.konsulen.pengguna.name;
            console.log(this.residen);
        },
        error => {
            this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false
            this.$router.push('/404');
            }
        );
        
        this.$store.dispatch('user/getPenggunaByResidenId', this.$route.params.idResiden).then(
        success => {
            this.user = success;
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

    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    }

}
</script>

<style>
#residen-style {
    margin: auto;
}
</style>