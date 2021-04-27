<template>
  <div class="container" v-if="isCreated">
    <div class="row">
      <div class="col-xxl-12 col-xl-12 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Laporan Pasien</b>
          </div>
          <div class="card-body">
            <div class="row container">
              <!-- INISIAL PASIEN -->
              <div class="form-group col-md-4">
                <label class="medium mb-1">Inisial Pasien</label>
                <input
                  class="form-control"
                  name="inisialPasien"
                  v-model="posts.inisialPasien"
                  type="text"
                  placeholder="Masukkan inisial pasien"
                  required
                />
              </div>
              <!-- END OF INISIAL PASIEN -->
              <!-- USIA PASIEN -->
              <div class="form-group col-md-4">
                <label class="medium mb-1">Usia Pasien</label>
                <input
                  class="form-control"
                  name="usiaPasien"
                  v-model="posts.usiaPasien"
                  type="text"
                  placeholder="Masukkan usia pasien"
                  required
                />
              </div>
              <!-- END OF USIA PASIEN -->
              <!-- NO REKAM MEDIS -->
              <div class="form-group col-md-4">
                <label class="medium mb-1">No Rekam Medis</label>
                <input
                  class="form-control"
                  name="noRekamMedis"
                  v-model="posts.noRekamMedis"
                  type="text"
                  placeholder="Masukkan no rekam medis"
                  required
                />
              </div>
              <!-- END OF NO REKAM MEDIS -->
            </div>
            <br />
            <div class="row container">
              <!-- DIAGNOSIS -->
              <div class="form-group col-md-12">
                <label class="medium mb-1">Diagnosis</label>
                <textarea
                  class="form-control input-lg"
                  name="diagnosis"
                  v-model="posts.diagnosis"
                  type="text"
                  placeholder="Masukkan diagnosis"
                  required
                />
              </div>
              <!-- END OF DIAGNOSIS -->
            </div>
            <br />
            <div class="row container">
              <div class="form-group col-md-4">
                <label>Konsulen</label>
                <select
                  class="form-control"
                  name="konsulen"
                  v-model="posts.idKonsulen"
                >
                  <option
                    v-for="item in listKonsulen"
                    v-bind:key="item.id"
                    :value="item.idKonsulen"
                  >
                    {{ item.pengguna.name }}
                  </option>
                </select>
              </div>
              <!-- CHECKBOX -->
              <div class="form-group col-md-4">
                <br />
                <div class="row ml-1 justify-content-center">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="checkbox-1"
                      v-model="isJaga"
                      @change="changeShowTanggal"
                    />
                    <label class="custom-control-label" for="checkbox-1"
                      >Sedang jam jaga</label
                    >
                  </div>
                </div>
              </div>
              <!-- END OF HECKBOX -->
              <!-- TANGGAL -->
              <div class="form-group col-md-4">
                <div class="form-group">
                  <label for="example-date-input">Tanggal Jaga</label>
                  <input
                    class="form-control"
                    type="date"
                    name="tanggalJaga"
                    v-model="posts.tanggalJaga"
                    :disabled="!showTanggal"
                  />
                </div>
              </div>
              <!-- END OF TANGGAL -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- KOMPETENSI -->
      <div class="col-xxl-6 col-xl-6 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Kompetensi yang Didapatkan</b>
          </div>
          <div class="card-body container">
            <div
              v-for="kompetensi in listKompetensi"
              v-bind:key="kompetensi.id"
            >
              <div>
                <input
                  type="checkbox"
                  @change="changeTempKompetensi(kompetensi.idKompetensi)"
                />
                <label class="ml-2">{{ kompetensi.namaKompetensi }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END KOMPETENSI -->
      <!-- TINDAKAN -->
      <div class="col-xxl-6 col-xl-6 mb-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Daftar Tindakan yang Didapatkan</b>
          </div>
          <div class="card-body"></div>
        </div>
      </div>
      <!-- END TINDAKAN -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LaporanPasienForm",
  data() {
    return {
      posts: {
        inisialPasien: null,
        usiaPasien: null,
        noRekamMedis: null,
        diagnosis: null,
        isJaga: false,
        tanggalJaga: null,
        idKonsulen: null,
        strKompetensi: null,
        strTindakan: null,
        strTindakanLain: null,
      },
      tempKompetensi:[],
      tempTindakan: [],
      tempTindakanLain: [],
      tindakanLainChoice: [],
      showTanggal: false,
      listKonsulen: [],
      listKompetensi: [],
      listKategoriTindakan: [],
      isCreated: false,
    };
  },
  methods: {
    changeShowTanggal() {
      this.showTanggal = !this.showTanggal;
    },
    changeTempKompetensi(idKompetensi) {
        if(!this.tempKompetensi.includes(idKompetensi)){
            this.tempKompetensi.push(idKompetensi);
        }else{
            this.tempKompetensi.pop(idKompetensi);
        }
      console.warn(this.tempKompetensi);
    },
    changeTempTindakan(idKategoriTindakan){
        if(!this.tempTindakan.includes(idKategoriTindakan)){
            this.tempTindakan.push(idKategoriTindakan);
        }else{
            this.tempTindakan.pop(idKategoriTindakan);
        }
    },
    changeTempTindakanLain(namaTindakan){
        if(!this.tempTindakanLain.includes(namaTindakan)){
            this.tempTindakanLain.push(namaTindakan);
        }else{
            this.tempTindakanLain.pop(namaTindakan);
        }
    },
    addTindakanLainChoice(namaTindakan){
        if(!this.tindakanLainChoice.includes(namaTindakan)){
            this.tempTindakanLain.push(namaTindakan);
        }
    }
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/laporan-pasien/getformattribute")
      .then((resp) => {
        this.listKonsulen = resp.data.listKonsulen;
        this.listKompetensi = resp.data.listKompetensi;
        this.listKategoriTindakan = resp.data.listKategoriTindakan;
        this.isCreated = true;
        console.warn(this.listKompetensi);
      });
  },
};
</script>


