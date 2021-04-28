<template>
    <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
        <div class="container">
            <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto mt-4">
                        <h1 class="page-header-title">
                            <div class="page-header-icon"><i class="fas fa-id-card mr-3"></i></div>
                            Dashboard Pengelolaan Akun
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
            <div class="card-header">Jumlah Akun Residen</div>
            <div class="card-body text-center">
                <p class="n-residen">
                    {{ staffs.length }}
                </p>
                <button @click="redirectToStaffRegister" class="btn btn-teal">Buat Akun Staff</button>
            </div>
        </div>
    </div>

	<div class="container mt-4">

	<!-- TAB NAVBAR -->	
	<nav class="nav nav-borders">
		<a class="nav-link" href="/mengelola-akun/residen">Akun Residen</a>
		<a class="nav-link  active ml-0" href="#">Akun Staff</a>
	</nav>
	<hr class="nav-underline mt-0 mb-4"/>


	<!-- RESIDEN DATATABLE -->
    <div v-if="dataTableReady" class="container mt-5">
		<div class="card mb-4 mt-4">
        <div class="card card-header-actions">
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
							<th>E-mail</th>
							<th>Roles</th>
							<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="staff in this.staffs" v-bind:key="staff.idstaff">
							<td>{{ staff.name }}</td>
							<td>{{ staff.username }}</td>
							<td>{{ staff.email }}</td>
							<td>
								<div v-for="role in staff.roles" :key="role.id">
									<span v-if="role.name=='ROLE_KONSULEN'" class="badge badge-warning role-tag">Konsulen</span>
									<span v-if="role.name=='ROLE_ADMIN'" class="badge badge-danger role-tag">Admin</span>
									<span v-if="role.name=='ROLE_PENGURUSAKADEMIK'" class="badge badge-success role-tag">P. Akademik</span>
									<span v-if="role.name=='ROLE_KETUAMODUL'" class="badge badge-secondary role-tag">K. Modul</span>
								</div>
							</td>
							<td><button @click="redirectToView(staff.username)" class="btn btn-primary">Lihat Detail</button></td>
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
import dataTableLoader from '../../js/datatable';

export default {
    data() {
        return {
			user: this.$store.state.auth.user,
            staffs: Array,
			ready: false,
        }
    },

	computed: {
		dataTableReady() {
			return this.ready;
		}
	},

    created() {
		this.$store.dispatch('user/getAllPenggunaStaff').then(
			success => {
                this.successful = true;
                this.message = success.message || success.response || success.toString();
				this.staffs = success
				dataTableLoader();
				this.ready = true;
            },
            error => {
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.successful = false
				// this.loadDataTable();
				dataTableLoader();
            }
		);
    },

    methods: {
        redirectToStaffRegister() {
            this.$router.push('/mengelola-akun/staff-register');
		},

		redirectToView(username) {
            this.$router.push('/mengelola-akun/view-staff/'+username);
		}
	}
}
</script>

<style>
.page-header {
    background: rgb(43,77,223);
    background: linear-gradient(90deg, rgba(43,77,223,1) 44%, rgba(25,217,160,1) 100%);
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
.n-residen {
    font-size: 5rem;
    background: -webkit-linear-gradient(rgb(31, 223, 159), rgb(59, 104, 226));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
.role-icon {
	color: green;
	margin-right: 5px;
	font-size: .75rem;
}
.role-tag {
	font-size: .7rem;
}
</style>