<template>
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i class="fas fa-id-card mr-3"></i></div>
                            Dashboard Konsulen
                        </h1>
                        <div class="page-header-subtitle mt-2">Selamat datang, {{ user.username }}.</div>
                    </div>
                    <div class="col-12 col-xl-auto user-email">{{ user.email }}</div>
                </div>
            </div>
        </div>
    </header>


    <div class="number-card-container container mt-n10">
        <div class="number-card card">
            <div class="card-header">Jumlah Laporan</div>
            <div class="card-body text-center">
                <p class="n-laporan">
                    {{ laporans.length }}
                </p>
            </div>
        </div>
    </div>

	<div class="container mt-4">

	<!-- TAB NAVBAR -->	
	<nav class="nav nav-borders">
		<a class="nav-link" href="/dashboard-konsulen/laporan-pasien/belum-dievaluasi">Belum Dievaluasi</a>
		<a class="nav-link active ml-0" href="#">Sudah Dievaluasi</a>
	</nav>
	<hr class="nav-underline mt-0 mb-4"/>


	<!-- LAPORAN PASIEN DATATABLE -->
    <div v-if="dataTableReady" class="container mt-5">
		<div class="card mb-4 mt-4">
        <div class="card card-header-actions">
		<div class="card-header">Laporan Pasien (Sudah Dievaluasi)</div>
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
							<th>Dibuat</th>
                            <th>Tanggal Jaga</th>
							<th>Inisial Pasien</th>
							<th>Usia</th>
							<th>No. Rekam Medis</th>
							<th>DPJP</th>
                            <th>Jaga</th>
                            <th>Status</th>
                            <th>Detail</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="laporan in this.laporans" v-bind:key="laporan.id">
							<td>{{ laporan.tanggalPembuatan }}</td>
							<td>{{ laporan.tanggalJaga }}</td>
							<td>{{ laporan.inisialPasien }}</td>
							<td>{{ laporan.usia }}</td>
                            <td>{{ laporan.norekammedis }}</td>
                            <td>{{ laporan.dpjp }}</td>
                            <td>{{ laporan.isJaga }}</td>
                            <td>{{ laporan.status }}</td>
							<td>
								<button @click="redirectToView(laporan.id)" class="btn btn-primary mr-2">Lihat</button>
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
import dataTableLoader from '../../js/datatable';
import authHeader from "@/services/auth-header";
import loadScript from "@/js/scripts.js";

export default {
    data() {
        return {
			user: this.$store.state.auth.user,
            laporans: Array,
			ready: false,
        }
    },
	computed: {
		dataTableReady() {
			return this.ready;
		}
	},

    created() {
        axios
            .get("http://localhost:8000/api/laporan-pasien/sudah-dievaluasi/"+JSON.parse(localStorage.getItem("userData")).konsulen.idKonsulen, { headers: authHeader() })
            .then(success => {
                    this.successful = true;
                    this.laporans = success.data;
                    // this.ready = true;
                    dataTableLoader();
                    this.ready = true;
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
        loadScript();
    },

    updated() {
        loadScript();
    },

    methods: {
		redirectToView(idLaporan) {
            this.$router.push('/laporanpasiendetail/'+idLaporan);
            // TODO: UC04 NOT YET IMPLEMENTED
		}
	}
}
</script>

<style>
.page-header {
    background: rgb(43,77,223) !important;
    background: linear-gradient(90deg, rgba(43,77,223,1) 44%, rgba(25,217,160,1) 100%) !important;
}
.user-email {
    color: rgb(255, 255, 255);
}
.number-card-container {
	display: flex;
	justify-content: center;
}
.number-card {
	min-width: 20rem !important;
}
.n-laporan {
    font-size: 5rem;
    background: -webkit-linear-gradient(rgb(31, 223, 159), rgb(59, 104, 226));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
tr td:last-child {
    width: 1%;
    white-space: nowrap;
}
</style>