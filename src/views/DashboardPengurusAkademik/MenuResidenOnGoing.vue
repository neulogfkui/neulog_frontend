<template>
  <MainHeader
    title= "Dashboard Residen"
    :subtitle="this.subtitle"
    icon= "user">
  </MainHeader>
  <div class="container">
    <div class="row upper justify-content-center">
      <PieChart
        v-if="isMounted"
        keterangan="Residen"
        :persentase="this.persentase"
        :total="this.totalResiden"
        :label="this.labelPie"
        :data="this.dataPie"
        title="Sebaran Status Residen"
      >
      </PieChart>
    </div>

    <div class="container mt-5">
	  <nav class="nav nav-borders">
		<a class="nav-link active ml-0" href="#">On Going</a>
		<a class="nav-link" href="/dashboardpengurusakademik/residen/lulus">Lulus</a>
	  </nav>
	  <hr class="nav-underline mt-0 mb-4"/>
    </div>

    <div v-if="isDataTableReady" class="container">
		<div class="card mb-4 mt-4">
        <div class="card card-header-actions">
			<div class="card-body">
				<div class="datatable">
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
                        <th>NPM</th>
                        <th>Tahun/Term</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in listOnGoing"
                        v-bind:key="item.id"
                    >
                        <td>
                        {{ index + 1 }}
                        </td>
                        <td>
                        {{ item.pengguna.name }}
                        </td>
                        <td>
                        {{ item.npm }}
                        </td>
                        <td>
                        {{ item.tahunMasuk + " / " + item.term }}
                        </td>
                        <td>
                        <router-link
                            :to="'/dashboardpengurusakademik/residen/' + item.idResiden"
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
import PieChart from "@/components/PieChart.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "MenuResiden",
  data() {
    return {
      labelPie: [],
      dataPie: [],
      totalResiden: Number,
      persentase: Number,
      listOnGoing: Array,
      listLulus: Array,
      isMounted: false,
      ready: false,
      subtitle: String,
    };
  },
  components: {
    MainHeader,
    PieChart,
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
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/residen/", { headers: authHeader() })
      .then((resp) => {
        console.warn(resp.data);
        this.labelPie = resp.data.labelStatus;
        this.dataPie = resp.data.listJumlahResidenPerStatus;
        this.totalResiden = resp.data.totalResiden;
        this.persentase = resp.data.persentaseLulus;
        this.listOnGoing = resp.data.listResidenOnGoing;
        this.listLulus = resp.data.listResidenLulus;
        this.isMounted = true;
        this.ready = true;
        dataTableLoader();
    });
  }
};
</script>