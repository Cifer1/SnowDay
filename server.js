var http = require("http");

const DarkSky = require('dark-sky');
const forecast = new DarkSky('fd97c8e21faaa8f691a24a38b1332da9');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDK3WC1s6rrJtTeXOJWCVs6I0GUlePrp88'
});
// http.createServer(function(request, response){
//   //send http header
//   //http status: 200:OK
//   //Content Type: text/plain
//   response.writeHead(200, {'Content-Type': 'text/plain'});
  
//   // Send response body as "Hello World"
//   response.end('Hello World\n');
// }).listen(process.env.PORT, process.env.IP);

// console.log('Server running at whatev c9 thing');


//

var express = require('express')
// console.log(express);
var app = express(); //keep the () (important)
var server = http.createServer(app);
var io = require('socket.io').listen(server);
app.use(express.static("./client")); //in index.html, '/' is equivalent to './client'
app.get('/', function(req, res){
  res.sendfile(__dirname+"/index.html"); //move index.html to . directory
});
io.on('connection', function(socket){
  socket.on('requestPrediction', function(msg){ //runs whenever the server recieves a '' signal (could be like requestSnow or something)
  //'' is a placeholder -- fill in with an informative message
  // for this part of the code, what actions do I add? oh ok how does it send data back 
  //would calculate prediction based on msg (msg probably represents location) // sick thx for teaching me this stuff I feel dumb
  // like?
  //io.emit('predictionComplete', data) //orsomething like that lol there's some stuff client side you need to have too
  //that should be template/boilerplate most stuff
  googleMapsClient.geocode({address: msg}, function(err, res){
      if(!err){
        var coords = [res.json.results.geometry.location.lat, res.json.results.geometry.location.lng];
        
      }
    })
  });
  
})

console.log(process.env.PORT);

// server.listen(
 /* app.listen(process.env.PORT, function() {
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log('Listening at http://%s:%s', host, port);
}
// )
);
server.listen(app.get('port'));*/
server.listen(process.env.PORT, process.env.IP);