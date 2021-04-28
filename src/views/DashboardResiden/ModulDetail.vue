<template>
<LightHeader
    v-if="isMounted"
    :title= this.title
    icon= "briefcase">
</LightHeader>
<div class="container upper">
    <div class="row">
        <div class="col-xxl-7 col-xl-7 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Residen</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Nama Modul
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ modul }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Ketua Modul
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ ketuaModulName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Residen
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ residenName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Tanggal Mulai
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tanggalMulai }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Tanggal Selesai
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tanggalSelesai }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Durasi
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ durasi }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Status
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ status }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Feedback</b>
                </div>
                <div class="card-body">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                            <p class="card-text">
                                {{ feedback }}
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
            <div class="card-body">
                <div class="tab-content" id="cardTabContent">
                    <!-- KASUS -->
                <div
                    class="tab-pane fade show active"
                    id="kasus"
                    role="tabpanel"
                    aria-labelledby="kasus-tab"
                ><div class="datatable" v-if="isDataTableReady">
                    <table
                        class="table table-bordered table-hover"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                    >
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Judul</th>
                            <th>Konsulen</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in listKasus"
                            v-bind:key="item.id"
                        >
                            <td>
                            {{ index + 1 }}
                            </td>
                            <td>
                            {{ item.tanggalDibuat }}
                            </td>
                            <td>
                            {{ item.tugasPresentasiModel.judulMakalah }}
                            </td>
                            <td>
                            {{ item.konsulenModel.pengguna.name }}
                            </td>
                            <td>
                            {{ item.status }}
                            </td>
                            <td>
                            <router-link
                                :to="'/laporanpasiendetail/' + item.idLaporanPasien"
                            >
                                <button class="btn btn-secondary">Lihat</button>
                            </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <!-- END KASUS -->
                <!-- REFERAT -->
                <div
                    class="tab-pane fade"
                    id="referat"
                    role="tabpanel"
                    aria-labelledby="referat-tab"
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
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Judul</th>
                            <th>Konsulen</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in listKasus"
                            v-bind:key="item.id"
                        >
                            <td>
                            {{ index + 1 }}
                            </td>
                            <td>
                            {{ item.tanggalDibuat }}
                            </td>
                            <td>
                            {{ item.tugasPresentasiModel.judulMakalah }}
                            </td>
                            <td>
                            {{ item.konsulenModel.pengguna.firstName + " " + item.konsulenModel.pengguna.lastName }}
                            </td>
                            <td>
                            {{ item.status }}
                            </td>
                            <td>
                            <router-link
                                :to="'/laporanpasiendetail/' + item.idLaporanPasien"
                            >
                                <button class="btn btn-secondary">Lihat</button>
                            </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <!-- END REFERAT -->
                <!-- BOOK READING -->
                <div
                    class="tab-pane fade"
                    id="book"
                    role="tabpanel"
                    aria-labelledby="book-tab"
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
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Judul</th>
                            <th>Konsulen</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in listKasus"
                            v-bind:key="item.id"
                        >
                            <td>
                            {{ index + 1 }}
                            </td>
                            <td>
                            {{ item.tanggalDibuat }}
                            </td>
                            <td>
                            {{ item.tugasPresentasiModel.judulMakalah }}
                            </td>
                            <td>
                            {{ item.konsulenModel.pengguna.firstName + " " + item.konsulenModel.pengguna.lastName }}
                            </td>
                            <td>
                            {{ item.status }}
                            </td>
                            <td>
                            <router-link
                                :to="'/laporanpasiendetail/' + item.idLaporanPasien"
                            >
                                <button class="btn btn-secondary">Lihat</button>
                            </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <!-- END BOOK READING -->
                <!-- JOURNAL READING -->
                <div
                    class="tab-pane fade"
                    id="journal"
                    role="tabpanel"
                    aria-labelledby="journal-tab"
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
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Judul</th>
                            <th>Konsulen</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in listKasus"
                            v-bind:key="item.id"
                        >
                            <td>
                            {{ index + 1 }}
                            </td>
                            <td>
                            {{ item.tanggalDibuat }}
                            </td>
                            <td>
                            {{ item.tugasPresentasiModel.judulMakalah }}
                            </td>
                            <td>
                            {{ item.konsulenModel.pengguna.firstName + " " + item.konsulenModel.pengguna.lastName }}
                            </td>
                            <td>
                            {{ item.status }}
                            </td>
                            <td>
                            <router-link
                                :to="'/laporanpasiendetail/' + item.idLaporanPasien"
                            >
                                <button class="btn btn-secondary">Lihat</button>
                            </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <!-- END JOURNAL READING -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import LightHeader from "@/components/LightHeader.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "ModulDetail",
  data() {
    return {
      title: String,
      modul: String,
      ketuaModulName: String,
      residenName: String,
      tanggalMulai: String,
      tanggalSelesai: String,
      durasi: Number,
      status: String,
      feedback: feedback,
      listReferat: [],
      listJournal:[],
      listKasus: [],
      listBook: [],
      isMounted: false,
      ready: false
    };
  },
  components: {
    MainHeader,
    LightHeader,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    }
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardResiden/modulDetail/" + this.$route.params.idModulResiden, { headers: authHeader() })
      .then((resp) => {
        console.warn(resp.data);
        this.title = "Detail Modul " + this.namaModul;
        this.modul = resp.data.target.modul.namaModul;
        this.ketuaModulName = resp.data.target.modul.ketuaModulModel.pengguna.name;
        this.residenName = resp.data.target.residen.pengguna.name;
        this.tanggalMulai = resp.data.target.tanggalMulai;
        this.tanggalSelesai = resp.data.target.tanggalSelesai;
        this.durasi = resp.data.target.durasi;
        this.status = resp.data.target.status;
        this.feedback = resp.data.target.feedback;
        this.listReferat = resp.data.target.listReferat;
        this.listJournal = resp.data.target.listJournal;
        this.listReferat = resp.data.target.listReferat;
        this.listJournal = resp.data.target.listJournal;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
      });
  }
};
</script>