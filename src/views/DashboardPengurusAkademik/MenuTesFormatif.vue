<template>
  <MainHeader
    title= "Dashboard Tes Formatif"
    icon= "edit">
  </MainHeader>
    <div class="container mt-n10">
        <div class="col-m-4 col-xl-6 mb-4 mt-4" style="margin:auto;">
        <div class="card card-header-actions">
            <div class="card-header">
                Upload File Tes Formatif
                <button id="submitButton" class="btn btn-success btn-sm" data-toggle="modal" data-target="#saveModal" v-on:click="submitFile()">Simpan File</button>
            </div>
            <div class="card-body">
                <p>*file .xls/.xlsx (max: 1MB), dengan nama file tanggal ujian (e.g: 2020-09-17.xls).</p>
                <form class="container container-file" style="padding:0;">
                    <span class="btn btn-primary btn-file">
                        Pilih File (.xls) <input id="fileInput" type="file" name="file" ref="file" v-on:change="handleFileUpload()">
                    </span>
                    <p v-if="file" id="p-filename">{{ file.name }}</p>
                </form>
            </div>
        </div>
    </div>

    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <AreaChart v-if="isChartReady" :labels="this.labels" :datas="this.datas"/>
    </div>
    
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card">
            <div class="card-header">Nilai Tes Formatif</div>
            <div class="card-body">
                <div class="tab-content" id="cardTabContent">
                    <!-- ON GOING -->
                    <div
                        class="tab-pane fade show active"
                        id="ongoing"
                        role="tabpanel"
                        aria-labelledby="ongoing-tab"
                    >
                        <div class="datatable" v-if="isDataTableReady">
                            <table
                                class="table table-bordered table-hover"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                <tr>
                                    <th>Tanggal Input</th>
                                    <th>Tanggal Ujian</th>
                                    <th>Nama</th>
                                    <th>NPM</th>
                                    <th>Nilai</th>
                                    <th>Hapus Data</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="item in tesformatif"
                                    v-bind:key="item.idNilaiTesFormatif"
                                >
                                    <td>{{ item.tanggalUnggah }}</td>
                                    <td>{{ item.tanggalTes }}</td>
                                    <td>{{ item.nama }}</td>
                                    <td>{{ item.npm }}</td>
                                    <td>{{ item.nilai }}</td>
                                    <td><button @click="sendInfo(item)" class="btn btn-danger mr-2" data-toggle="modal" data-target="#deleteConfirmation">Hapus</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

      <!-- Save Confirmation Modal -->
    <div class="modal fade" id="saveModal" tabindex="-1" role="dialog" aria-labelledby="saveModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="saveModalTitle">Pesan Pengunggahan File</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div v-if="isLoading" class="modal-body success-body">
                    <span v-show="isLoading" class="spinner-border spinner-border-sm"></span>
                    File sedang dikirimkan...
                </div>
                <div v-if="successful && !isLoading" class="modal-body success-body">
                    <i class="far fa-check-circle check-success"></i>
                    File tes formatif berhasil ditambahkan ke dalam database.
                </div>
                <div v-if="!successful && !isLoading" class="modal-body fail-body">
                    <i class="far fa-times-circle check-fail"></i>
                    File tes formatif gagal ditambahkan ke database. Periksa kembali ekstensi, format, ukuran, dan nama file.
                </div>
                <!-- <div v-if="!successful && message" class="alert alert-danger mx-3" role="alert">{{message}}</div> -->
                <div class="modal-footer">
                    <button v-if="successful" @click="refreshPage" class="btn btn-light" type="button" data-dismiss="modal">OK</button>
                    <button v-if="!successful" class="btn btn-light" type="button" data-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="modal fade" id="deleteConfirmation" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteConfirmationTitle">Penghapusan Data Tes</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div v-if="isDeleteFail" class="modal-body fail-body">
                    <i class="fas fa-times-circle check-fail"></i>
                    {{ message }}
                </div>
                <div v-if="!deleted && !isDeleteFail" class="modal-body">Apakah anda yakin? Data ini ({{selectedItem.nama}} | {{selectedItem.tanggalTes}}) akan terhapus secara permanen dan tidak dapat dikembalikan lagi.</div>
                <div v-if="deleted && !isDeleteFail" class="modal-body success-body">
                    <i class="far fa-check-circle check-success"></i>
                    Data tes berhasil dihapus.
                </div>
                <div class="modal-footer">
                    <button v-if="!deleted && !isDeleteFail" @click="deleteNTF(selectedItem.idNilaiTesFormatif)" class="btn btn-danger" type="button">Hapus</button>
                    <router-link class="btn btn-light" type="button" data-dismiss="modal" to="/dashboardpengurusakademik/tes-formatif">Tutup</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import AreaChart from "@/components/AreaChartNTF.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";
import loadScript from "@/js/scripts.js";

export default {
  name: "MenuResiden",
  data() {
    return {
        file: "",
        message: "",
        successful: null,
        tesformatif: null,
        isMounted: false,
        ready: false,
        chartReady: false,
        labels: null,
        datas: null,
        deleted: false,
        isDeleteFail: false,
        isLoading: false,
        selectedItem: {nama: "dummy", tanggalTes: "dummy"}
    };
  },
  components: {
    MainHeader,
    AreaChart,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    },
    isChartReady(){
        return this.chartReady
    }
  },
  mounted() {
    axios
        .get("https://neulogfkui.herokuapp.com/api/tes-formatif", { headers: authHeader() })
        .then(success => {
                this.tesformatif = success.data;
                this.isMounted = true;
                this.ready = true;
                console.log(this.tesformatif);
                dataTableLoader();
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                error.toString();
                this.successful = false
				dataTableLoader();
            }
        );
    axios
        .get("https://neulogfkui.herokuapp.com/api/tes-formatif/summary", { headers: authHeader() })
        .then(success => {
                this.labels = Object.keys(success.data).map((label) => new Date(label).toUTCString().substring(0,16));
                this.datas = Object.values(success.data);
                this.chartReady = true;
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
            }
        );
    loadScript();
    },

    methods: {
        sendInfo(item) {
            this.selectedItem = item;
        },

        refreshPage(){
            this.$router.push("/dashboardpengurusakademik/tes-formatif");
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },

        submitFile(){
            let formData = new FormData();
            formData.append("file", this.file);
            let header = authHeader()
            header['Content-Type'] = 'multipart/form-data'
            this.isLoading = true

            axios
                .post('https://neulogfkui.herokuapp.com/api/tes-formatif/upload', formData, { headers: header})
                .then(success => {
                        this.successful = true;
                        this.message = success.message || success.response || success.toString();
                        this.isLoading = false;
                        this.successful = true;
                    },
                    error => {
                        this.message =                     
                            (error.response && error.response.data && error.response.data.message) ||
                            error.message || error.toString();
                        this.successful = false;
                        this.isLoading = false;
                    }
            )
        },
        deleteNTF(id) {
            this.isLoading = true;
            axios.delete('https://neulogfkui.herokuapp.com/api/tes-formatif/' + id, {headers: authHeader()}).then(
                success => {
                    this.deleted = true;
                    this.isLoading = false;
                },
                error => {
                    this.message = "Data ini tidak dapat dihapus karena masih terhubung dengan entitas lain."
                        // (error.response && error.response.data && error.response.data.message) ||
                        // error.message ||
                        // error.toString();
                    this.isDeleteFail = true;
                    this.isLoading = false;
                }
            );
        }
    }
};
</script>

<style>
#submitButton {
    background-color: rgb(40, 155, 74);
}
#p-filename {
    margin: 1rem 0 0 0 !important;
    color: green;
    align-self: center;
}
.btn-file {
    position: relative;
    overflow: hidden;
    width: 100%;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;   
    cursor: inherit;
    display: block;
}
.container-file {
    display: flex;
    flex-direction: column;
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