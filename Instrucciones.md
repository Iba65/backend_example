# Primeros pasos

En la carpeta principal del proyecto creamos un archivo de entrada a nuestra aplicación con el nombre **_index.js_**

### Codigo de index.js

```js
const http = require("http");

function requestController() {
  // lógica de nuestra función
  console.log("hola nuevo mundo");
}

// configuración del servidor
const server = http.createServer(requestController);

server.listen(4000);
```
