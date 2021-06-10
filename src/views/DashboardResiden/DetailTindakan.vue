<template>
  <LightHeader
    v-if="getReady"
    :title="'Detail ' +  this.data.kategoriTindakan.namaKategoriTindakan"
    :subtitle="this.subtitle"
    icon="file-text"
  />
  <div class="container justify-content-center" v-if="getReady">
  <div class="row container">
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card card-header-actions h-100">
        <div class="card-header">
          <b>Daftar Pasien Dengan Tindakan {{ data.kategoriTindakan.namaKategoriTindakan }}</b>
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
                    <th>Tanggal</th>
                    <th>Inisial Pasien</th>
                    <th>Usia</th>
                    <th>No Rekam Medis</th>
                    <th>Konsulen</th>
                    <th>Jaga</th>
                    <th>Status</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in data.listLaporanPasien"
                    v-bind:key="item.id"
                  >
                    <td>
                      {{ index + 1 }}
                    </td>
                    <td>
                      {{ item.tanggalDibuat }}
                    </td>
                    <td>
                      {{ item.inisialPasien }}
                    </td>
                    <td>
                      {{ item.usiaPasien }}
                    </td>
                    <td>
                      {{ item.noRekamMedis }}
                    </td>
                    <td>
                      {{ item.konsulen.pengguna.name }}
                    </td>
                    <td v-if="item.isFromJaga">Ya</td>
                    <td v-if="!item.isFromJaga">Tidak</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <router-link
                        :to="'/laporanpasiendetail/' + item.idLaporanPasien"
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
import axios from "axios"
import LightHeader from "@/components/LightHeader";
import dataTableLoader from "@/js/datatable.js";

export default {
  name: "DetailTindakan",
  components: { LightHeader },
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
        "http://localhost:8080/api/dashboardResiden/tindakandetail/" +
          this.$route.params.idKategoriTindakan + "/"  +
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