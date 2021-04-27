<template>
  <MainHeader
    title= "Dashboard Modul"
    icon= "briefcase">
  </MainHeader>
  <div class="container">
      <!-- Tabel Modul -->
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
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
                    <td>
                      {{ item.ketuaModul.pengguna.name }}
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
</template>

<script>
import axios from "axios";
import MainHeader from "@/components/MainHeader.vue";
import dataTableLoader from "@/js/datatable";

export default {
  name: "MenuModul",
  data() {
    return {
      listModul: Array,
      isMounted: false,
      ready: false
    };
  },
  components: {
    MainHeader,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    }
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/modul/")
      .then((resp) => {
        console.warn(resp.data);
        this.listModul = resp.data.listModul;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
      });
  }
};
</script>