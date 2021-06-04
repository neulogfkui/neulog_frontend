<template>
<LightHeader
    v-if="isMounted"
    :title= this.title
    icon= "trending-up">
</LightHeader>
<div class="container upper" v-if="isMounted">
    <div class="row mr-2 mb-4 justify-content-end upper">
        <router-link :to="'/kompetensiform/'+ this.idKompetensi">
          <button class="btn btn-warning">Edit</button>
      </router-link>
    </div>
    <div class="row">
        <div class="col-xxl-7 col-xl-7 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Kompetensi</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                    <table cellpadding="5">
                        <tbody>
                            <tr>
                                <td>Nama Kompetensi</td>
                                <td>
                                    <b>{{ namaKompetensi }}</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Target Pencapaian</td>
                                <td>
                                    <b>{{ jumlahMinimal }}</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Kompetensi Lanjut</td>
                                <td><b>
                                    <p class="card-text" v-if="isKompetensiLanjut">
                                        Ya
                                    </p>
                                    <p class="card-text" v-if="!isKompetensiLanjut">
                                        Tidak
                                    </p>
                                </b></td>
                            </tr>
                            <tr>
                                <td>Tanggal Dibuat</td>
                                <td>
                                    <b>{{ tanggalDibuat }}</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Deskripsi</td>
                                <td>
                                    <b>{{ deskripsi }}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "DetailMenuKompetensi",
  data() {
    return {
      idKompetensi: Number,
      title: String,
      detailKompetensi: Array,
      namaKompetensi: String,
      jumlahMinimal: String,
      isKompetensiLanjut: Number,
      tanggalDibuat: String,
      deskripsi: String,
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
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/kompetensi/" + this.$route.params.idKompetensi, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.idKompetensi = resp.data.idKompetensi
        this.namaKompetensi = resp.data.namaKompetensi
        this.jumlahMinimal = resp.data.jumlahMinimal
        this.isKompetensiLanjut = resp.data.kompetensiLanjut
        this.tanggalDibuat = resp.data.tanggalDibuat
        this.deskripsi = resp.data.deskripsi
        this.isMounted = true;
        this.ready = true;
        this.title = "Detail Kompetensi " + this.namaKompetensi
        dataTableLoader();
      });
  }
};
</script>