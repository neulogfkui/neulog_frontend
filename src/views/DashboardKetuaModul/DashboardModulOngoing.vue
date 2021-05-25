<template>
    <MainHeader
        v-if="isDataTableReady"
        title=this.title
        :subtitle="this.subtitle"
        icon="briefcase"
    />
    <!-- TAB NAVBAR -->	
    <nav class="nav nav-borders">
        <a class="nav-link active ml-0" href="#">Belum Lulus</a>
        <a class="nav-link" href="/dashboardmodullulus/:idModul">Sudah Lulus</a>        
    </nav>
    <hr class="nav-underline mt-0 mb-4"/>
    
    <!-- TABEL RESIDEN -->
    <div class="container upper">
        <div class="row">
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
                                v-for="(item, index) in listResidenOngoing"
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
import authHeader from "@/services/auth-header";
import dataTableLoader from "@/js/datatable";

export default {
  name: "DashboardLaporanPasien",
  data() {
    return {
      listResidenOngoing: Array,
      isMounted: false,
      ready: false,
      subtitle: null,
    };
  },
  components: {
    MainHeader,
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
        this.listResidenOngoing = resp.data.listResidenOngoing;
        this.subtitle = this.residen.pengguna.name + " - " + this.residen.npm;
        this.isMounted = true;
        dataTableLoader();
        this.ready = true;
      });
  },
  methods: {},
};
</script>