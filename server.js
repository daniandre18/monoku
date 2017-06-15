 
 
var express = require('express');
var app = express();
var fs = require('fs');  


app.get("/leerExcel",function(req,res){
	fs.readFile('./direcion.json', 'utf8', onFileRead);
	function onFileRead(err, data) {  
	  if (err) throw err;
	  var currentPackage = JSON.parse(data);
	  res.json(currentPackage);
	}
});

app.post("/filtrarExcel",function(req,res){
	var dir = req.body;
	response = filtrar(req.body);
	res.json(response);
});

function filtrar(parametros){
	var data = {};
	console.log("parametros", parametros);
	return data;
}

app.use(express.static(__dirname + '/public')); 

app.listen(8081);