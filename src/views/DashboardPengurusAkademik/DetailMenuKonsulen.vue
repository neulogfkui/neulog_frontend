<template>
  <LightHeader v-if="isMounted" :title="this.title" icon="users"> </LightHeader>
  <div class="container upper">
    <div class="row">
      <div class="col-xxl-12 col-xl-12 mb-4 mt-4">
        <div class="card card-header-actions h-100">
          <div class="card-header">
            <b>Data Konsulen</b>
          </div>
          <div class="card-body">
            <div class="container-fluid">
              <table cellpadding="5">
                <tbody>
                  <tr>
                    <td>Nama Lengkap</td>
                    <td>
                      <b>{{ name }}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>TTL</td>
                    <td>
                      <b>{{ tempatLahir + ", " + tanggalLahir }}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>Email</td>
                    <td>
                      <b>{{ email }}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>Role</td>
                    <td>
                      <b>
                        <p
                          v-for="item in role"
                          v-bind:key="item.id"
                          class="card-text"
                        >
                          {{ item.name }}
                        </p></b
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div class="row">
                    <div class="col-xxl-12 col-xl-12 mb-4 mt-4 text-center">
                        <router-link
                        :to="'/dashboardkonsulen/' + idKonsulen"
                      >
                        <button class="btn btn-primary">Lihat Dashboard</button>
                      </router-link>
                    </div>
                </div> -->
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

export default {
  name: "DetailMenuKonsulen",
  data() {
    return {
      title: String,
      data: Array,
      idKonsulen: Number,
      name: String,
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
    LightHeader,
  },
  mounted() {
    axios
      .get(
        " https://neulogfkui.herokuapp.com/api/dashboardPengurusAkademik/konsulen/" +
          this.$route.params.idKonsulen,
        { headers: authHeader() }
      ) // nanti diganti ini angka 1 nya
      .then((resp) => {
        console.warn(resp.data);
        this.data = resp.data;
        this.idKonsulen = resp.data.idKonsulen;
        this.name = resp.data.pengguna.name;
        this.tempatLahir = resp.data.pengguna.tempatLahir;
        this.tanggalLahir = resp.data.pengguna.tanggalLahir;
        this.email = resp.data.pengguna.email;
        this.role = resp.data.pengguna.roles;
        this.title = "Detail Konsulen " + this.name;
        this.isMounted = true;
      });
  },
};
</script>