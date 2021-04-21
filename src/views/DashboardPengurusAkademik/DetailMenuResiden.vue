<template>
<MainHeader />
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
                            {{ firstName + " " + lastName }}
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
                            {{ pembimbingFirstName + " " + pembimbingLastName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4 text-center">
                        <router-link
                        :to="'/dashboardresiden/' + idResiden"
                      >
                        <button class="btn btn-primary">Lihat Dashboard</button>
                      </router-link>
                    </div>
                </div>
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

export default {
  name: "DetailMenuResiden",
  data() {
    return {
      data: Array,
      idResiden: Number,
      firstName: String,
      lastName: String,
      npm: String,
      tahunMasuk: String,
      term: String,
      tempatLahir: String,
      tanggalLahir: String,
      alamat: String,
      telepon: String,
      email: String,
      pembimbingFirstName: String,
      pembimbingLastName: String,
      isMounted: false,
    };
  },
  components: {
    MainHeader,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/residen/1") // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        this.idResiden = resp.data.idResiden
        this.firstName = resp.data.penggunaModel.firstName
        this.lastName = resp.data.penggunaModel.lastName
        this.npm = resp.data.npm
        this.tahunMasuk = resp.data.tahunMasuk
        this.term = resp.data.term
        this.tempatLahir = resp.data.penggunaModel.tempatLahir
        this.tanggalLahir = resp.data.penggunaModel.tanggalLahir
        this.alamat = resp.data.alamatRumah
        this.telepon = resp.data.noTelepon
        this.email = resp.data.penggunaModel.email
        this.pembimbingFirstName = resp.data.konsulen.pengguna.firstName
        this.pembimbingLastName = resp.data.konsulen.pengguna.lastName
        this.isMounted = true;
      });
  },
};
</script>