// Call the dataTables jQuery plugin
import $ from 'jquery';

$(document).ready(function() {
    $('#dataTable').DataTable();
});

$(document).ready(function() {
    $('#dataTableActivity').DataTable({
        "order": [[ 0, 'desc' ]]
    });
});
