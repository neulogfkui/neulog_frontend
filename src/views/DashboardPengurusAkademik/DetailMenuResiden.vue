<template>
<LightHeader
    v-if="isMounted"
    :title= this.title
    icon= "user">
</LightHeader>
<div class="container upper">
    <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
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
                <!-- <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4 text-center">
                        <router-link
                        :to="'/dashboardresiden/' + idResiden"
                      >
                        <button class="btn btn-primary">Lihat Dashboard</button>
                      </router-link>
                    </div>
                </div> -->
                </div>
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
import authHeader from "@/services/auth-header";

export default {
  name: "DetailMenuResiden",
  data() {
    return {
      title: String,
      data: Array,
      idResiden: Number,
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
    MainHeader,
    LightHeader,
  },
  mounted() {
    axios
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/residen/" + this.$route.params.idResiden, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
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
        this.title = "Detail Residen " + this.name
        this.isMounted = true;
      });
  },
};
</script>