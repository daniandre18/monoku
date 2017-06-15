 
 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/*var excel2json = require("excel-to-json");
  excel2json({
    input: "C:/Users/dania/Documents/direcion.xlsx",  // input directory  
    output: "direcion.json" // output directory  
   }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });

*/

/*xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "assets/direccion.xlsx", 
    output: "assets/direccion.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
  
*/


/*var excel2Json = require('excel2json');
 
excel2Json('assets/direcion.xlsx', function(err, output) {

	console.log("err",err )
	console.log("output", output);

 
});*/


app.get("/leerExcel",function(req,res){
	fs.readFile('./direcion.json', 'utf8', onFileRead);
	function onFileRead(err, data) {  
	  if (err) throw err;
	  var currentPackage = JSON.parse(data);
	  res.json(currentPackage);
	}
});

app.post("/filtrarExcel",function(req,res){
	var dir = req.query;
	console.log("parametros", req.query);
});


function filtrar(parametros){
	var data ={};
	return data;

}


app.use(express.static(__dirname + '/public')); 

app.listen(8081);