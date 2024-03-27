const http = require("http");

function requestController() {
  // lógica de nuestra función
  console.log("hola nuevo mundo");
}

// configuración del servidor
const server = http.createServer(requestController);

server.listen(4000);
