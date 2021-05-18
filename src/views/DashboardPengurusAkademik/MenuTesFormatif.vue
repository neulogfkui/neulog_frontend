<template>
  <MainHeader
    title= "Dashboard Tes Formatif"
    icon= "edit">
  </MainHeader>
    <div class="container">
        <div class="col-m-4 col-xl-6 mb-4 mt-4" style="margin:auto;">
        <div class="card card-header-actions">
            <div class="card-header">
                Upload File Tes Formatif
                <button id="submitButton" class="btn btn-success btn-sm" v-on:click="submitFile()">Simpan File</button>
            </div>
            <div class="card-body">
                <p>*file .xls (max: 1MB)</p>
                <form class="container container-file" style="padding:0;">
                    <span class="btn btn-primary btn-file">
                        Pilih File (.xls) <input id="fileInput" type="file" name="file" ref="file" v-on:change="handleFileUpload()">
                    </span>
                    <p v-if="file" id="p-filename">{{ file.name }}</p>
                </form>
            </div>
        </div>
    </div>

    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <AreaChart v-if="isChartReady" :labels="this.labels" :datas="this.datas"/>
    </div>
    
    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
      <div class="card">
        <div class="card-header">Nilai Tes Formatif</div>
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
                        <th>Tanggal Input</th>
                        <th>Tanggal Ujian</th>
                        <th>Nama</th>
                        <th>NPM</th>
                        <th>Nilai</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in tesformatif"
                        v-bind:key="item.idNilaiTesFormatif"
                    >
                        <td>{{ item.tanggalUnggah }}</td>
                        <td>{{ item.tanggalTes }}</td>
                        <td>{{ item.nama }}</td>
                        <td>{{ item.npm }}</td>
                        <td>{{ item.nilai }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
import AreaChart from "@/components/AreaChartNTF.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "MenuResiden",
  data() {
    return {
        file: "",
        message: "",
        tesformatif: null,
        isMounted: false,
        ready: false,
        chartReady: false,
        labels: null,
        datas: null
    };
  },
  components: {
    MainHeader,
    AreaChart,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    },
    isChartReady(){
        return this.chartReady
    }
  },
  mounted() {
    axios
        .get("http://localhost:8000/api/tes-formatif", { headers: authHeader() })
        .then(success => {
                this.tesformatif = success.data;
                this.isMounted = true;
                this.ready = true;
                console.log(this.tesformatif);
                dataTableLoader();
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                error.toString();
                this.successful = false
				dataTableLoader();
            }
        );
    axios
        .get("http://localhost:8000/api/tes-formatif/summary", { headers: authHeader() })
        .then(success => {
                this.labels = Object.keys(success.data).map((label) => label.substring(0,10));
                this.datas = Object.values(success.data);
                this.chartReady = true;
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                error.toString();
            }
        );
    },

  methods: {
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
        console.log(this.file)
    },

    submitFile(){
        let formData = new FormData();
        formData.append("file", this.file);
        let header = authHeader()
        header['Content-Type'] = 'multipart/form-data'

        axios
            .post('http://localhost:8000/api/tes-formatif/upload', formData, { headers: header})
            .then(success => {
                    this.successful = true;
                    this.message = success.message || success.response || success.toString();

                    // TODO: ALERT SUCCESS/FAIL

                },
                error => {
                    this.message = "Error pada Server, cek kembali file yang akan diunggah."
                    this.successful = false
                    console.log(error);
                }
        )
    }
  }
};
</script>

<style>
#submitButton {
    background-color: rgb(40, 155, 74);
}
#p-filename {
    margin: 1rem 0 0 0 !important;
    color: green;
    align-self: center;
}
.btn-file {
    position: relative;
    overflow: hidden;
    width: 100%;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;   
    cursor: inherit;
    display: block;
}
.container-file {
    display: flex;
    flex-direction: column;
}
</style>