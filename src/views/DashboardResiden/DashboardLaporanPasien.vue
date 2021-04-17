<template>
  <h4>{{createdLaporanPasien}}</h4>
  <h4>{{persentase}}</h4>
  <h4 v-for="a in label" v-bind:key="a.id">{{a}}</h4>
  <h4 v-for="a in jumlah" v-bind:key="a.id">{{a}}</h4>
  <table style="width:100%">
    <tr>
      <th>Diagnosis</th>
      <th>No. Rekam Medis</th>
      <th>Status</th>
    </tr>
    <tr v-for="a in listLaporanPasien" v-bind:key="a.id">
      <td>{{a.diagnosis}}</td>
      <td>{{a.noRekamMedis}}</td>
      <td>{{a.status}}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
    name: "DashboardLaporanPasien",
    data() {
        return {
            createdLaporanPasien: Number,
            label: Array,
            jumlah: Array,
            listLaporanPasien: Array,
            persentase: Number
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/dashboardResiden/laporanPasien")
            .then((resp) => {
            console.warn(resp.data);
            this.createdLaporanPasien = resp.data.createdLaporanPasien;
            this.label = resp.data.label;
            this.jumlah = resp.data.jumlah;
            this.listLaporanPasien = resp.data.listLaporanPasien;
            this.persentase = resp.data.persentase;
        });
    }
}
</script>