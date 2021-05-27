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
                                    TTL
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
                                    {{ pembimbingName }}
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
                                    {{ pembimbingName }}
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
                                    {{ pembimbingName }}
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
                                    {{ pembimbingName }}
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
                                    {{ pembimbingName }}
                                </p>
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
                    :updateStatus="this.posts.updateStatus"
                    v-if="isMounted">
                </CardTimeline>
            </div>
            <div class="row">
                <CardTimelineEnter
                    title="Feedback Ketua Modul" v-if="this.posts.feedback != null"
                    :updateStatus="this.posts.feedback">
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
        this.title = "Detail Residen " + this.name + " di Modul " + this.modul
        this.idResiden = resp.data.idResiden
        this.name = resp.data.pengguna.name
        this.npm = resp.data.npm
        this.tahunMasuk = resp.data.tahunMasuk
        this.term = resp.data.term
        this.tempatLahir = resp.data.pengguna.tempatLahir
        this.tanggalLahir = resp.data.pengguna.tanggalLahir
        this.alamat = resp.data.alamatRumah
        this.telepon = resp.data.noTelepon
        this.email = resp.data.pengguna.email
        this.pembimbingName = resp.data.konsulen.pengguna.name
        this.isMounted = true;
      });
  },
};
</script>