
async function llamada() {
    const llave = "8ebe0e797e7360898c5a4bb947abb782"
    const acceso = await fetch("http://api.mediastack.com/v1/news?access_key="+ llave)
    const respuesta = acceso.json()
    return respuesta
}

async function traerLlamada () {
    const respuestaApi = await llamada();
    console.log(respuestaApi);

 }
 
 traerLlamada()




