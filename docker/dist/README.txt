En este directorio se deben copiar manualmente los archivos y directorios a copiar en la imagen de docker.

Siempre se debe incluir los siguientes archivos y directorios:
- mock-server.js - Ejecutable javascript principal donde se levantan de 1 a N servidores mock. Siempre se debe mantener actualizado 
  para que docker ejecute la última versión con todos los servidores mock objetivo. En windows y en la distribución docker se 
  recomienda modificar el valor de la constante "mforPort" a un valor superior o igual a 15000 en este archivo.
- snapshots - Directorio de referencia de los ficheros JSON con el modelo a partir del cual se levanta el servidor mock.

Por cada App de Backend a simular se debe generar siempre 2 apps nodejs. En el ejemplo actual existen los siguientes directorios:
- mfor-db-faker - Generador de fichero JSON con el modelo a partir del cual se levanta el servidor mock. El fichero generado
  se guarda en el directorio snapshots.
- mfor-server - Generador y starter del servidor mock de MFOR a partir del fichero JSON generado por App mfor-db-faker y guardado
  en el directorio snapshots.
- Incluir el nuevo servidor mock en la función "main()" del archivo "mock-server.js".

Para ejecutar la distribución docker:
- Posicionarse en el directorio mfor-mock-app/docker donde reside el fichero Dockerfile.
- Ejecutar el comando: "docker build --force-rm -t mock.server:1.0.0 .", para crear la imagen mock.server:1.0.0
- Ejecutar el comando: "docker run -p 1000:15000 --interactive --user mock_user --tty mock.server:1.0.0", para levantar el contenedor
  a partir de la imagen anterior.
- Una vez dentro del contenedor, ejecutar el comando: node mock-server.js
- En la instalación de mi PC Local este contenedor se levanta en la IP 192.168.99.100. Si se indica en un navegador la URL
  "http://192.168.99.100:15000" se debe mostrar un resumen del servidor mock que se está ejecutando desde Docker.

Se proporciona el fichero "mfor-mock-app-postman.json" con las colecciones que consultan los servicios del servidor mock, tanto en local
como en Docker.


