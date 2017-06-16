

$(document).ready(function(){
    
    $("form").submit(function() {
        var data = $('#filtro').serialize();
        console.log("data", data);

    $.ajax({
        url: document.URL+"filtrarExcel",
        type: "POST",
        dataType: "text/html",
        data: data,
        success: function (responseJson) {
            console.log("responseJson", responseJson);
        },
        error: function (xhr, status) {
            console.log("error filter");
        },
           
    })

    });
});


function leerExcel(start, end) {
    var startData = (start) ? start : 0 ;
    var endData = (end)? end : 10 ;

    $.ajax({
        url: document.URL+"leerExcel",
        type: "GET",
        dataType: "json",
        success: function (responseJson) {
            console.log("responseJson", responseJson);
            var tbl_body = "<table class='table table-striped'>";
            var impar = false;
            $.each(responseJson.Direccion_Nacional_de_Planeacio.slice(startData,endData), function(k , v) {
                var tbl_row = "";

                $.each(this, function(k , v) {
                    tbl_body += "<td>"+k+"</td>";
                    tbl_row += "<td>"+v+"</td>";
                })
                tbl_body += "<tr class=\""+( impar ? "odd" : "even")+"\">"+tbl_row+"</tr>";
                impar = !impar;               
            })

            tbl_body += "</table>";
            $("#table").html(tbl_body);
            //return responseJson[0].data;
        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}



function leerExcel() {
    $.ajax({
        url: document.URL+"leerExcel",
        type: "GET",
        dataType: "json",
        success: function (responseJson) {

           console.log("responseJson", responseJson);
           var tbl_body = "";
            var odd_even = false;
            $.each(responseJson.Direccion_Nacional_de_Planeacio, function() {
                var tbl_row = "";
                $.each(this, function(k , v) {
                    tbl_row += "<td>"+v+"</td>";
                })
                tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
                odd_even = !odd_even;               
            })

            console.log("tbl_body", tbl_body);
            $("#table").html(tbl_body);
            //return responseJson[0].data;

        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}
