<template>
  <MainHeader
    title= "Dashboard Modul"
    :subtitle="this.subtitle"
    icon= "briefcase"
    isSmall=true>
  </MainHeader>
  <div class="container">
      <div class="row mt-3">
          <ColorCardNoFooter title="Modul" subtitle="Tambah" color="bg-warning" link="/modulform/0" icon="briefcase"/>
      </div>
      <!-- Tabel Modul -->
      <div class="row mt-0">
      <div class="col-xxl-12 col-xl-12">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Seluruh Modul</b>
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
                    <th>Ketua Modul</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in listModul"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.tanggalDibuat }}
                    </td>
                    <td>
                      {{ item.namaModul }}
                    </td>
                    <td v-if="item.ketuaModul != null">
                      {{ item.ketuaModul.pengguna.name }}
                    </td>
                    <td v-if="item.ketuaModul == null">
                      None
                    </td>
                    <td>
                      <router-link
                        :to="'/dashboardpengurusakademik/modul/' + item.idModul"
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
  name: "MenuModul",
  data() {
    return {
      listModul: Array,
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
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/modul/", { headers: authHeader() })
      .then((resp) => {
        this.listModul = resp.data.listModul;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
    });
    loadScript();
  }
};
</script>