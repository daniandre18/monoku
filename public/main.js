
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
