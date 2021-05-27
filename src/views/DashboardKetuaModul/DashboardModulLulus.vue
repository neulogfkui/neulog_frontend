<template>
    <MainHeader
        v-if="isDataTableReady"
        title=this.title
        icon="briefcase"
    />
    <!-- TAB NAVBAR -->	
    <nav class="nav nav-borders">
        <a class="nav-link" href="/dashboardmodulongoing/:idModul">Belum Lulus</a>
        <a class="nav-link active ml-0" href="#">Sudah Lulus</a>       
    </nav>
    <hr class="nav-underline mt-0 mb-4"/>
    
    <div class="container" v-if="isDataTableReady">
        <div class="row upper">
            <!-- START DIAGRAM 1 (MASIH ADA 2 CARD, BELUM DISATUIN JADI 1 CARD) -->
            <BigNumberCard
                title="Total Residen Lulus"
                :count="this.listJumlah[0]"
                caption="Lulus Tepat Waktu"
            />
            <BigNumberCard
                title="Total Residen Lulus"
                :count="this.listJumlah[1]"
                caption="Lulus Prolong"
            />
            <!-- END DIAGRAM 1 (MASIH ADA 2 CARD, BELUM DISATUIN JADI 1 CARD) -->
            <PieChart
                :persen="this.persen"
                :total="this.jmlModulSelesai"
                :label="this.listLabel"
                :data="this.listJumlah"
                title="Persentase Lulus Tepat Waktu"
            >
            </PieChart>
            <BigNumberCard
                title="Rata-Rata Durasi Residen di Modul"
                :count="this.strAvgDurasi"
                caption="Hari"
            />
        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Daftar Residen</b>
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
                                <th>NPM</th>
                                <th>Nama</th>
                                <th>Term</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in listResidenLulus"
                                v-bind:key="item.id"
                            >
                                <td>
                                {{ index + 1 }}
                                </td>
                                <td>
                                {{ item.npm }}
                                </td>
                                <td>
                                {{ item.pengguna.name }}
                                </td>
                                <td>
                                {{ item.term }}
                                </td>
                                <td>
                                <router-link
                                    :to="'/detailmodulresiden/' + item.idResiden.idModulResiden"
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
import BigNumberCard from "@/components/BigNumberCard.vue";
import authHeader from "@/services/auth-header";
import dataTableLoader from "@/js/datatable";

export default {
  name: "DashboardModulLulus",
  data() {
    return {
      listResidenLulus: Array,
      persen: Number,
      jmlModulSelesai: Number,
      listLabel: [],
      listJumlah: [],
      strAvgDurasi: String,
      isMounted: false,
      ready: false,
    };
  },
  components: {
    MainHeader,
    PieChart,
    BigNumberCard,
  },
  computed: {
    isDataTableReady() {
      return this.ready;
    },
  },
  mounted() {
    axios
      .get(
        "http://localhost:8000/api/dashboardKetuaModul/modul/" +
          this.$route.params.idModul,
        {
          headers: authHeader(),
        }
      )
      .then((resp) => {
        console.warn(resp);
        this.listResidenLulus = resp.data.listResidenLulus;
        this.persen = resp.data.persen;
        this.jmlModulSelesai = resp.data.jmlModulSelesai;
        this.listLabel = resp.data.listLabel;
        this.listJumlah = resp.data.listJumlah;
        this.strAvgDurasi = resp.data.strAvgDurasi;
        this.isMounted = true;
        dataTableLoader();
        this.ready = true;
      });
  },
  methods: {},
};
</script>