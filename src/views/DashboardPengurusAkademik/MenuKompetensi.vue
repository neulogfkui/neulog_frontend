<template>
  <MainHeader
    title= "Dashboard Kompetensi"
    :subtitle="this.subtitle"
    icon= "trending-up"
    isSmall=true>
  </MainHeader>
  <div class="container">
      <div class="row mt-3">
          <ColorCardNoFooter title="Kompetensi" subtitle="Tambah" color="bg-warning" link="/kompetensiform/0" icon="trending-up"/>
      </div>
      <a  class="btn btn-outline-primary mb-4" href="https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/download/allkompetensi">Export Kompetensi</a>
      <!-- Tabel Kompetensi -->
      <div class="row mt-0">
      <div class="col-xxl-12 col-xl-12">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Kompetensi</b>
          </div>
          <div class="card-body">
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
                    <th>Nama</th>
                    <th>Target Pencapaian</th>
                    <th>Kompetensi Lanjut</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listKompetensi"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.tanggalDibuat }}
                    </td>
                    <td>
                      {{ item.namaKompetensi }}
                    </td>
                    <td>
                      {{ item.jumlahMinimal }}
                    </td>
                    <td v-if="item.kompetensiLanjut">
                        Ya
                    </td>
                    <td v-if="!item.kompetensiLanjut">
                        Tidak
                    </td>
                    <td>
                      <router-link
                        :to="'/dashboardpengurusakademik/kompetensi/' + item.idKompetensi"
                      >
                        <button class="btn btn-secondary">Lihat</button>
                      </router-link>
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
import ColorCardNoFooter from "@/components/ColorCardNoFooter.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";
import loadScript from '@/js/scripts.js';

export default {
  name: "MenuKompetensi",
  data() {
    return {
      listKompetensi: Array,
      isMounted: false,
      ready: false,
      subtitle: String,
    };
  },
  components: {
    MainHeader,
    ColorCardNoFooter,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    },
    getNamaPA(){
      return JSON.parse(localStorage.getItem("userData")).pengurusAkademik.pengguna.name;
    }
  },
  mounted() {
    this.subtitle = this.getNamaPA;
    axios
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/kompetensi/", { headers: authHeader() })
      .then((resp) => {
        this.listKompetensi = resp.data.listKompetensi;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
    });
    loadScript();
  }
};
</script>