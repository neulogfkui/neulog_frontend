<template>
<LightHeader
    :title="titleHeader"
    icon="user"
></LightHeader>
<div class="container mt-10 align-items-center justify-content-center">
    <div class="card mb-4">
        <div class="card-header">Data Kelulusan Residen</div>
        <div class="card-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">Nama</p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">{{ residen.name }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">NPM</p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">{{ residen.npm }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">Tahun / Term</p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">{{ residen.tahunMasuk + " / " + residen.term }}</p>
                    </div>
                </div>
            </div>
            <form @submit="postData" method="POST">
                <div class="container" v-if="getReady">
                    <!-- Form Row -->
                    <div class="form-row" id="role-checkbox">
                        <div class="form-group">
                            <input class="custom-control" type="radio" id="lulus" value="Lulus" v-model="status">
                            <label for="lulus">Lulus</label>
                        </div>
                        <div class="form-group">
                            <input class="custom-control" type="radio" id="tidak_lulus" value="Tidak Lulus" v-model="status">
                            <label for="tidak_lulus">Tidak Lulus</label>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label class="small mb-1" for="inputFeedback">Feedback</label>
                            <input v-model="feedback" class="form-control" id="inputFeedback" type="text" placeholder="Masukkan feedback Anda untuk residen mengenai modul ini"/>
                        </div>
                    </div>

                    <!-- Save changes button-->
                    <button @click="handleKelulusan" class="btn btn-primary" type="button" data-toggle="modal" data-target="#saveModal">Simpan</button>
                    <div class="form-group">
                        <div v-if="successful && message" class="alert alert-success mt-3" role="alert">{{message}}</div>
                        <div v-if="!successful && message" class="alert alert-danger mt-3" role="alert">{{message}}</div>
                    </div>
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
                <h5 class="modal-title" id="saveModalTitle">Status berhasil diubah!</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div v-if="successful" class="modal-body success-body">
                <i class="far fa-check-circle check-success"></i>
                Status kelulusan {{ residen.name }} pada modul {{ modul.namaModul }} berhasil diubah.
            </div>
            <div v-if="!successful" class="modal-body fail-body">
                <i class="far fa-times-circle check-fail"></i>
                Status kelulusan {{ residen.name }} pada modul {{ modul.namaModul }} gagal diubah. Silakan coba lagi.
            </div>
            <div class="modal-footer">
                <button v-if="successful" @click="redirectToView" class="btn btn-light" type="button" data-dismiss="modal">OK</button>
                <button v-if="!successful" class="btn btn-light" type="button" data-dismiss="modal">OK</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
export default {
    name: "FeedbackKelulusanForm",
    components: { LightHeader, },
    data() {
        return {
            title: String,
            status: [],
            submitted: false,
            successful: false,
            message: ''
        }
    },

    methods: {
        redirectToView() {
            this.$router.push('/mengelola-akun/view-staff/'+this.staff.username);
        },

        handleKelulusan(){
            this.staff.role = this.roles;
            console.log(this.staff);
            this.message = '';
            this.submitted = true;
            this.$store.dispatch('auth/registerStaff', this.staff).then(
            success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
            },
            error => {
                this.message = "Error pada Server, cek kembali data yang dimasukkan. Jika error berlanjut, laporkan pada admin/programmer"
                this.successful = false
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