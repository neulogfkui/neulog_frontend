<template>
<LightHeader
    v-if="isMounted"
    title= "Detail Tugas Publikasi"
    :subtitle = this.subtitle
    icon= "clipboard">
</LightHeader>
<div class="container upper">
    <div class="row">
        <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Tugas Publikasi</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Tanggal
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tanggal }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Judul
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ judul }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Event
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ event }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Link Tugas
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ linkTugas }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Konsulen
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ konsulenName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Status
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ status }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Update Status</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4" v-for="(item) in updateStatus"
                    v-bind:key="item.id">
                        <p class="card-text">
                            {{ item }}
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Feedback</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
                        <p class="card-text">
                            {{ feedback }}
                        </p>
                    </div>
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
import LightHeader from "@/components/LightHeader.vue";
import authHeader from "@/services/auth-header";
import loadScript from '@/js/scripts.js';

export default {
  name: "DetailMenuTugasPublikasi",
  data() {
    return {
      subtitle: String,
      tanggal: String,
      judul: String,
      event: String,
      linkTugas: String,
      konsulenName: String,
      status: String,
      updateStatus: Array,
      feedback: String,
      isMounted: false,
    };
  },
  components: {
    MainHeader,
    LightHeader,
  },
  mounted() {
    axios
      .get("https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/laporantugas/" + this.$route.params.idLaporanTugas, { headers: authHeader() }) // nanti diganti ini angka 1 nya
      .then((resp) => {
        this.laporanPasien = resp.data.laporanPasien;
        this.tanggal = resp.data.laporanTugas.tanggalDibuat
        this.judul = resp.data.laporanTugas.tugasPublikasiModel.judulPublikasi
        this.event = resp.data.laporanTugas.tugasPublikasiModel.eventPublikasi
        this.linkTugas = resp.data.laporanTugas.linkTugas
        this.konsulenName = resp.data.laporanTugas.konsulenModel.pengguna.name
        this.status = resp.data.laporanTugas.status
        this.updateStatus = resp.data.updateStatus
        this.feedback = resp.data.laporanTugas.feedback
        this.isMounted = true;
        this.subtitle = ""
    });
    loadScript();
  },
};
</script>