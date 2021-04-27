<template>
  <div class="container mt-5">
    <div class="card mb-4">
      <div class="card-header">Extended DataTables</div>
      <div class="card-body">
        <div class="datatable">
          <table
            class="table table-bordered table-hover"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Nama Lengkap</th>
                <th>Username</th>
                <!-- <th>NPM</th>
                <th>E-mail</th>
                <th>Tahun-Masuk/Term</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="residen in this.residens" v-bind:key="residen.id">
                <td>{{ residen.name }}</td>
                <td>{{ residen.username }}</td>
                <!-- <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import "../vendors/jquery/jquery.min.js"
import "../vendors/bootstrap/js/bootstrap.bundle.min.js"
import "../vendors/datatables/jquery.dataTables.min.js"
import "../vendors/datatables-bs4/js/dataTables.bootstrap4.min.js"
import "../assets/demo/datatables-demo.js"

export default {
  name: "TestTable",
  data(){
    return {

    }
  },
  props: {
    residens: []
      // id: Number,
      // name: String,
      // username: String
  }
};
</script>