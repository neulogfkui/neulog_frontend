<template>
  <MainHeader
  v-if="getReady"
    title="Dashboard Tindakan"
    :subtitle="this.subtitle"
    icon="file-text"
    :withLogo="false"
    isSmall="true"
  />
  <div class="container justify-content-center">
  <div class="row container">
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card card-header-actions h-100">
        <div class="card-header">
          <b>List Laporan Pasien</b>
        </div>
        <div class="card-body">
          <div class="datatable" v-if="getReady">
            <table
              class="table table-bordered table-hover"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Tindakan</th>
                  <th>Frekuensi</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in data.listKT"
                  v-bind:key="item.id"
                >
                  <td>
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{ item.namaKategoriTindakan }}
                  </td>
                  <td>
                    {{ data.listFreq[index] }}
                  </td>
                  <td>
                    <router-link
                      :to="'/detailtindakan/' + item.idKategoriTindakan 
                      +'/'+ this.residen.idResiden"
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
import dataTableLoader from "@/js/datatable.js";
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "DashboardTindakan",
  components: { MainHeader },
  data() {
    return {
      data: null,
      ready: false,
      subtitle: null,
      residen: null,
    };
  },
  computed: {
    getReady() {
      return this.ready;
    },
  },
  mounted() {
    axios
      .get(
        "https://neulogfkui.herokuapp.com/api/dashboardResiden/tindakan/" +
          this.$route.params.idResiden
      )
      .then((resp) => {
        console.log(resp.data);
        this.data = resp.data;
        this.residen = resp.data.residen;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.ready = true;
        dataTableLoader();
      });
  },
};
</script>