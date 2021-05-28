<template>
    <LightHeader 
        v-if="isMounted"
        :title=this.title
        icon="user">
    </LightHeader>
    <div class="container upper">
        <div class="col-xxl-8 col-xl-8 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Residen</b>
                </div>
                <div class="card-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Nama Lengkap
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ name }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    NPM
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ npm }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Tahun Masuk/Term
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ tahunMasuk + " / " + term }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Tempat dan Tanggal Lahir
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ tempatLahir + ", " + tanggalLahir }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Alamat Rumah
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ alamat }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Telepon
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ telepon }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Email
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ email }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Pembimbing
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ pembimbingName }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    Modul
                                </p>
                            </div>
                            <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                                <p class="card-text">
                                    {{ namaModul }}
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
                        <div class="row">
                            <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                                <div v-if="this.status == 'Belum Lulus'">
                                    <router-link :to="'/feedbackkelulusanform/'+this.idModulResiden">
                                        <button class="btn btn-primary">Beri Kelulusan</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="col-xxl-4 col-xl-4 mb-4 mt-4">
            <div class="row">
                <CardTimeline
                    title="Update Status"
                    :status="this.status"
                    v-if="isMounted">
                </CardTimeline>
            </div>
            <div class="row">
                <CardTimelineEnter
                    title="Feedback Ketua Modul" v-if="this.feedback != null"
                    :status="this.feedback">
                </CardTimelineEnter>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";

export default {
  name: "DetailModulResiden",
  data() {
    return {
      title: String,
      data: Array,
      idModulResiden: Number,
      name: String,
      npm: String,
      tahunMasuk: String,
      term: String,
      tempatLahir: String,
      tanggalLahir: String,
      alamat: String,
      telepon: String,
      email: String,
      pembimbingName: String,
      namaModul: String,
      tanggalMulai: String,
      tanggalSelesai: String,
      durasi: Number,
      feedback: String,
      status: String,
      updateStatus: null,
      isMounted: false,
    };
  },
  components: {
    LightHeader,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardKetuaModul/detail/" + this.$route.params.idModulResiden, { headers: authHeader() })
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        this.idModulResiden = resp.data.idModulResiden;
        this.name = resp.data.residen.pengguna.name;
        this.npm = resp.data.residen.npm;
        this.tahunMasuk = resp.data.residen.tahunMasuk;
        this.term = resp.data.residen.term;
        this.tempatLahir = resp.data.residen.pengguna.tempatLahir;
        this.tanggalLahir = resp.data.residen.pengguna.tanggalLahir;
        this.alamat = resp.data.residen.alamatRumah;
        this.telepon = resp.data.residen.noTelepon;
        this.email = resp.data.residen.pengguna.email;
        this.pembimbingName = resp.data.residen.konsulen.pengguna.name;
        this.namaModul = resp.data.modul.namaModul;
        this.tanggalMulai = resp.data.tanggalMulai;
        this.tanggalSelesai = resp.data.tanggalSelesai;
        this.durasi = resp.data.durasi;
        this.feedback = resp.data.feedback;
        this.status = resp.data.status;
        this.updateStatus = resp.data.updateStatus;
        this.title = "Detail Residen " + this.name + " di Modul " + this.namaModul;
        this.isMounted = true;
      });
  },
};
</script>