<template>
  <div class="col-lg-4">
    <!-- Pie chart example-->
    <div class="card h-100 mb-4">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <div class="chart-pie">
          <canvas id="myPieChart" width="100%" height="50"></canvas>
        </div>
        <br />
        <div class="list-group list-group-flush">
          <div
            class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2"
          >
            <div class="mr-3">
              <i class="fas fa-circle fa-sm mr-1 text-blue"></i>
              Total {{ keterangan }}
            </div>
            <div class="font-weight-500 text-dark">
              {{ total }}
            </div>
          </div>

          <!-- <div
            v-if="this.persentase != undefined"
            class="list-group-item d-flex align-items-center justify-content-between small px-0 py-2"
          >
            <div class="mr-3">
              <i class="fas fa-circle fa-sm mr-1 text-blue"></i>
              Persentase
            </div>
            <div class="font-weight-500 text-dark">
              {{ persentase }} %
            </div>
          </div> -->
        </div>
      </div>
      <!-- <div class="card-footer small text-muted">
        Updated yesterday at 11:59 PM
      </div> -->
    </div>
  </div>
</template>

<script>
import Chart from "@/vendors/chart.js/Chart.min.js";

export default {
  name: "PieChart",
  props: {
    label: Array,
    data: Array,
    title: String,
    total: Number,
    keterangan: String,
    persentase: String,
  },
  data() {
    return {
      list1: [],
      list2: [],
    };
  },
  created() {
    var color = [
      "rgba(0, 97, 242, 1)",
      "rgba(0, 172, 105, 1)",
      "rgba(88, 0, 232, 1)",
    ];
    var hover = [
      "rgba(0, 97, 242, 0.9)",
      "rgba(0, 172, 105, 0.9)",
      "rgba(88, 0, 232, 0.9)",
    ];
    var i;
    for (i = 0; i < this.label.length; i++) {
      this.list1.push(color[i % 3]);
      this.list2.push(hover[i % 3]);
    }
    // alert(this.list1);
    // alert(this.list2);
  },
  mounted() {
    // console.log("masssssuuuuuuuukkk");
    // console.warn(this.label);
    // Set new default font family and font color to mimic Bootstrap's default styling
    (Chart.defaults.global.defaultFontFamily = "Metropolis"),
      '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = "#858796";

    // Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: this.label,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.list1,
            hoverBackgroundColor: this.list1,
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
    });
  },
};
</script>