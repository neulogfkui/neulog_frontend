<template>
<LightHeader
    v-if="isMounted"
    :title= this.title
    icon= "briefcase">
</LightHeader>
<div class="container upper" v-if="isMounted">
    <div class="row mr-2 mb-4 justify-content-end upper">
        <router-link :to="'/modulform/'+ this.idModul">
          <button class="btn btn-warning">Edit</button>
      </router-link>
    </div>
    <div class="row">
        <div class="col-xxl-7 col-xl-7 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Modul</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <table cellpadding="5">
                    <tbody>
                        <tr>
                            <td>Nama Modul</td>
                            <td>
                                <b>{{ namaModul }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Ketua Modul</td>
                            <td>
                                <b>{{ ketuaModulName }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Jumlah Residen</td>
                            <td>
                                <b>{{ jumlahResiden }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Tanggal Dibuat</td>
                            <td>
                                <b>{{ tanggalDibuat }}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Deskripsi</td>
                            <td>
                                <b>{{ deskripsi }}</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        <div class="col mb-4 mt-4">
            <BigNumberCardModul
                title="Waktu Pemenuhan Pencapaian"
                :count1="avgDurasi"
                caption1="Hari"
                :count2="minDurasi"
                caption2="Hari"
                :count3="maxDurasi"
                caption3="Hari"
            />
        </div>
    </div>
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
                                <th>Nama Residen</th>
                                <th>Tanggal Mulai</th>
                                <th>Tanggal Selesai</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in listModulResiden"
                                v-bind:key="item.id"
                            >
                                <td>
                                {{ index + 1 }}
                                </td>
                                <td>
                                {{ item.residen.pengguna.name }}
                                </td>
                                <td>
                                {{ item.tanggalMulai }}
                                </td>
                                <td>
                                {{ item.tanggalSelesai }}
                                </td>
                                <td>
                                {{ item.status }}
                                </td>
                                <td>
                                {{ item.feedback }}
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
import LightHeader from "@/components/LightHeader.vue";
import BigNumberCardModul from "@/components/BigNumberCardModul.vue";
import dataTableLoader from "@/js/datatable";
import authHeader from "@/services/auth-header";

export default {
  name: "DetailMenuModul",
  data() {
    return {
      idModul: Number,
      title: String,
      detailModul: Array,
      namaModul: String,
      ketuaModulName: String,
      jumlahResiden: Number,
      tanggalDibuat: String,
      deskripsi: String,
      avgDurasi: Number,
      minDurasi: Number,
      maxDurasi: Number,
      listModulResiden: Array,
      isMounted: false,
      ready: false
    };
  },
  components: {
    MainHeader,
    LightHeader,
    BigNumberCardModul,
  },
  computed:{
    isDataTableReady(){
      return this.ready
    }
  },
  mounted() {
    axios
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/modul/" + this.$route.params.idModul, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.idModul = resp.data.detailModul.idModul
        this.namaModul = resp.data.detailModul.namaModul
        if(resp.data.detailModul.ketuaModul != null){
            this.ketuaModulName = resp.data.detailModul.ketuaModul.pengguna.name
        }
        else{
            this.ketuaModulName = "None"
        }
        this.jumlahResiden = resp.data.jumlahResiden
        this.tanggalDibuat = resp.data.detailModul.tanggalDibuat
        this.deskripsi = resp.data.detailModul.deskripsi
        this.avgDurasi = resp.data.averageDurasi
        this.minDurasi = resp.data.minDurasi
        this.maxDurasi = resp.data.maxDurasi
        this.listModulResiden = resp.data.listModulResiden
        this.isMounted = true;
        this.ready = true;
        this.title = "Detail Modul " + this.namaModul
        dataTableLoader();
      });
  }
};
</script>