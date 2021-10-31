<template>
  <MainHeader
    title="Dashboard Ketua Modul"
    :subtitle="this.subtitle"
    isSmall="true"
    icon="home"
    v-if="isReady"
  >
  </MainHeader>

  <div class="container upper" v-if="isReady">
    <div class="container row justify-content-center">
      <BigNumberCard
        title="Total Residen Lulus"
        :count="this.data.listResidenLulus.length"
        caption="Residen"
        class="mb-4"
      />

      <BigNumberCard
        title="Total Residen Ongoing"
        :count="this.data.listResidenOngoing.length"
        caption="Residen"
        class="mb-4"
      />
    </div>

    <div class="container">

            	<!-- TAB NAVBAR -->	
	<nav class="nav nav-borders">
		<router-link class="nav-link active ml-0" to="/dashboard-ketua-modul/belum-lulus">Belum Lulus</router-link>
		<router-link class="nav-link" to="/dashboard-ketua-modul/sudah-lulus">Sudah Lulus</router-link>
	</nav>
	<hr class="nav-underline mt-0 mb-4"/>

    <!-- Tabel Laporan Pasien -->
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card card-header-actions h-100">
        <div class="card-header">
          <b>List Residen</b>
        </div>
        <div class="card-body">
          <div class="datatable" v-if="isReady">
            <table
              class="table table-bordered table-hover"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>NPM</th>
                  <th>Nama</th>
                  <th>Tahun / Term</th>
                  <th>Tanggal Mulai</th>
                  <th>Tanggal Selesai</th>
                  <th>Durasi</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in this.data.listResidenOngoing"
                  v-bind:key="item.idModulResiden"
                >
                  <td>
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{ item.residen.npm }}
                  </td>
                  <td>
                    {{ item.residen.pengguna.name }}
                  </td>
                  <td>
                    {{ item.residen.tahunMasuk }} / {{ item.residen.term }}
                  </td>
                                    <td>
                    {{ item.tanggalMulai }}
                  </td>
                                    <td>
                    {{ item.tanggalSelesai}}
                  </td>
                                    <td>
                      {{ item.durasi }} hari ( {{ (item.durasi / 30).toFixed(3)  }} bulan)
                  </td>
                  
                  <td>
                    <router-link
                      :to="'/modulresidendetail/' + item.idModulResiden"
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
import dataTableLoader from "@/js/datatable.js";
import MainHeader from "@/components/MainHeader.vue";
import BigNumberCard from "@/components/BigNumberCard.vue";
import axios from "axios";

export default {
  name: "DashboardModulSudahLulus",
  components: {
    MainHeader,
    BigNumberCard,
  },
  data() {
    return {
      data: null,
      ready: false,
      subtitle: null,
    };
  },
  computed: {
    isReady() {
      return this.ready;
    },
    isKetuaModul() {
      return JSON.parse(localStorage.getItem("user")).roles.includes(
        "ROLE_KETUAMODUL"
      );
    },
    getIdKetuaModul() {
      return JSON.parse(localStorage.getItem("userData")).ketuaModul
        .idKetuaModul;
    },
  },
  mounted() {
    console.log(this.getIdKetuaModul);
    axios
      .get(
        "https://neulogfkui.herokuapp.com/api/dashboardKetuaModul/modul/" +
          this.getIdKetuaModul
      )
      .then((resp) => {
        console.warn(resp);
        this.data = resp.data;
        this.subtitle = resp.data.modul.namaModul;
        this.ready = true;
        dataTableLoader();
      });
  },
};
</script>