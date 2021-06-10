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
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card">
        <div class="card-header border-bottom">
            <ul class="nav nav-tabs card-header-tabs" id="cardTab" role="tablist">
            <li class="nav-item">
                <a
                class="nav-link active"
                id="ongoing-tab"
                href="#ongoing"
                data-toggle="tab"
                role="tab"
                aria-controls="overview"
                aria-selected="true"
                @click=changeData(1)
                >On Going</a
                >
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                id="lulus-tab"
                href="#lulus"
                data-toggle="tab"
                role="tab"
                aria-controls="example"
                aria-selected="false"
                @click=changeData(2)
                >Lulus</a
                >
            </li>
            </ul>
        </div>
        <div class="card-body">
          <div class="tab-content" id="cardTabContent">
                <!-- ON GOING -->
            <div
                class="tab-pane fade show active"
                id="ongoing"
                role="tabpanel"
                aria-labelledby="ongoing-tab"
            >
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
                        <th>NPM</th>
                        <th>Tahun/Term</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item, index) in getMainList"
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
                            :to="'residen/' + item.idResiden"
                        >
                            <button class="btn btn-secondary">Lihat</button>
                        </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!-- END ON GOING -->

            <!-- Data table nya blm kebaca -->
            <!-- LULUS -->
            <div
                class="tab-pane fade"
                role="tabpanel"
            >
            </div>
            <!-- END LULUS -->

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
import loadScript from '@/js/scripts.js';

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
      mainList: null,
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
    getMainList(){
      return this.mainList
    },
    getNamaPA(){
      return JSON.parse(localStorage.getItem("userData")).pengurusAkademik.pengguna.name;
    }
  },
  mounted() {
    this.subtitle = this.getNamaPA;
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/residen/", { headers: authHeader() })
      .then((resp) => {
        this.labelPie = resp.data.labelStatus;
        this.dataPie = resp.data.listJumlahResidenPerStatus;
        this.totalResiden = resp.data.totalResiden;
        this.persentase = resp.data.persentaseLulus;
        this.listOnGoing = resp.data.listResidenOnGoing;
        this.listLulus = resp.data.listResidenLulus;
        this.isMounted = true;
        this.ready = true;
        this.mainList = this.listOnGoing;
        dataTableLoader();
    });
    loadScript();
  },
  methods:{
    changeData(num){
      if(num == 1){
        this.mainList = this.listOnGoing;
      }else{
        this.mainList = this.listLulus;
      }
    }
  }
};
</script>