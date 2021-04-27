<template>
<MainHeader />
<div class="container upper">
    <div class="row">
        <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
            <div class="card card-header-actions h-100">
                <div class="card-header">
                    <b>Data Konsulen</b>
                </div>
            <div class="card-body">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Nama Lengkap
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ firstName + " " + lastName }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            TTL
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ tempatLahir + ", " + tanggalLahir }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Email
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            {{ email }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p class="card-text">
                            Role
                        </p>
                    </div>
                    <div class="col-xxl-6 col-xl-6 mb-4 mt-4">
                        <p v-for="(item) in role" v-bind:key="item.id" class="card-text" >
                            {{ item }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4 text-center">
                        <router-link
                        :to="'/dashboardkonsulen/' + idKonsulen"
                      >
                        <button class="btn btn-primary">Lihat Dashboard</button>
                      </router-link>
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

export default {
  name: "DetailMenuKonsulen",
  data() {
    return {
      data: Array,
      idKonsulen: Number,
      firstName: String,
      lastName: String,
      tempatLahir: String,
      tanggalLahir: String,
      alamat: String,
      telepon: String,
      email: String,
      role: [],
      isMounted: false,
    };
  },
  components: {
    MainHeader,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/dashboardPengurusAkademik/konsulen/1") // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        this.idResiden = resp.data.idKonsulen
        this.firstName = resp.data.pengguna.firstName
        this.lastName = resp.data.pengguna.lastName
        this.tempatLahir = resp.data.pengguna.tempatLahir
        this.tanggalLahir = resp.data.pengguna.tanggalLahir
        this.email = resp.data.pengguna.email
        this.role = resp.data.pengguna.roles
        this.isMounted = true;
      });
  },
};
</script>