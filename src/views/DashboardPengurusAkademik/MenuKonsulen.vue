<template>
  <MainHeader
    title= "Dashboard Konsulen"
    :subtitle="this.subtitle"
    icon= "users">
  </MainHeader>
  <div class="container" v-if="isDataTableReady">
    <div class="row upper justify-content-center">
      <BigNumberCard
        title="Rata - Rata Laporan Pasien Per Bulan"
        :count="avgLaporanPasien"
        caption="Pasien / Bulan"
      />
      <BigNumberCard
        title="Rata - Rata Laporan Tugas Per Bulan"
        :count="avgLaporanTugas"
        caption="Tugas / Bulan"
      />
      <!-- Tabel Laporan Pasien -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Konsulen</b>
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
                    <th>Nama</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listKonsulen"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.pengguna.name }}
                    </td>
                    <td>
                      <router-link
                        :to="'konsulen/' + item.idKonsulen"
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
import BigNumberCard from "@/components/BigNumberCard.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";
import loadScript from '@/js/scripts.js';

export default {
  name: "MenuKonsulen",
  data() {
    return {
      avgLaporanPasien: Number,
      avgLaporanTugas: Number,
      listKonsulen: Array,
      isMounted: false,
      ready: false,
      subtitle: String,
    };
  },
  components: {
    MainHeader,
    BigNumberCard,
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
      .get("http://localhost:8000/api/dashboardPengurusAkademik/konsulen/", { headers: authHeader() })
      .then((resp) => {
        this.avgLaporanPasien = resp.data.averageLaporanPasien;
        this.avgLaporanTugas = resp.data.averageLaporanTugas;
        this.listKonsulen = resp.data.listKonsulen;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
    });
    loadScript();
  }
};
</script>