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
                <table cellpadding="5">
                    <tbody>
                        <tr>
                            <td>
                                Nama Lengkap
                            </td>
                            <td>
                                <b>{{ name }}</b>
                            </td>
                        </tr>
                                                <tr>
                            <td>
                                NPM
                            </td>
                            <td>
                                <b>{{ npm }}</b>
                            </td>
                        </tr>

                                                <tr>
                            <td>
                                Tahun Masuk / Term
                            </td>
                            <td>
                                <b>{{ tahunMasuk + " / " + term }}</b>
                            </td>
                        </tr>


                                                                        <tr>
                            <td>
                                TTL
                            </td>
                            <td>
                                <b>{{ tempatLahir + ", " + tanggalLahir }}</b>
                            </td>
                        </tr>

                                                                        <tr>
                            <td>
                                Alamat Rumah
                            </td>
                            <td>
                                <b>{{ alamat }}</b>
                            </td>
                        </tr>

                                                                        <tr>
                            <td>
                                Telepon
                            </td>
                            <td>
                                <b>{{ telepon }}</b>
                            </td>
                        </tr>

                                                                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <b>{{ email }}</b>
                            </td>
                        </tr>

                                                                        <tr>
                            <td>
                                Pembimbing
                            </td>
                            <td>
                                <b>{{ pembimbingName }}</b>
                            </td>
                        </tr>
                    </tbody>
                </table>

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