const dotenv = require("dotenv");
dotenv.config();

const http = require("http");

function requestController() {
  // lógica de nuestra función
  console.log("hola nuevo mundo");
}

// configuración del servidor
const server = http.createServer(requestController);

const PORT = process.env.PORT;
server.listen(PORT, function () {
  console.log("Aplicaciíon corriendo en puerto: " + PORT);
});
