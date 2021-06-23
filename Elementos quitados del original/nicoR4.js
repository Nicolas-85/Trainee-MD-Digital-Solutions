// const apiKey = "3466cc507eb9902b5566c5389d5e2c4d";

// async function llamadaRandom() {              
//     const llamadaApi = await fetch(`http://api.mediastack.com/v1/news?access_key=apiKey`);
//     const resultado = await llamadaApi.json();
//     console.log(resultado);
//     return resultado;
// }

async function llamadaApi() {
    // const llaveApi = "8ebe0e797e7360898c5a4bb947abb782"
    const llaveApi = "68e8d8d250df4d94f9051f514bcbeb32"
    let query = "London"
    // const envio = await fetch("http://api.mediastack.com/v1/news?access_key="+ llaveApi)
    const envio = await fetch("http://api.weatherstack.com/current?access_key=" + llaveApi & query)
    const resultado = envio.json()
    return resultado
}

async function respuestaApi () {
    const respuesta = await llamadaApi();
    console.log(respuesta)
    // const asdT = document.getElementById("asdT")
    //  for(let i = 0; i < response.data.length; i++ ){
    //      const element = response.data[i]
        //  const td = document.createElement("tr")
        //  td.setAttribute("id", i );
        //  asdT.appendChild(td)
        //  asdfr(i)
        // console.log(element);
     }
    //  console.log(element);
    // }
 
respuestaApi()

//  asd(
// function asdfr (id){
//     const  thead = document.getElementsByClassName("thead")
//     console.log(thead)
//     const asdT = document.getElementById(id)    
//     for (let index = 0; index < thead.length; index++) {
//         const element = document.createElement("td")
//         asdT.append

//     }
// }
//     async function ejecutaLlamada(apiKey) {
//         const respuesta = await llamadaRandom(apiKey);
//         const nuevaFila = document.getElementById("tablaDiniamica");
//         for (let index = 0; index < respuesta.data.length; index++) {
//             const element = respuesta.data[index];
//             console.log(element);
//             const nuevoRegistro = document.createElement("tr");
//             nuevaFila.appendChild(nuevoRegistro); 
//             const td = crearDatos();
//             nuevoRegistro.appendChild(td);
//         }
//        }   // console.log(respuesta);


// function crearDatos() {
//     const casilleros = document.getElementById("trUno");
//     let td = [];
//     for(let i = 0 ; i < casilleros.length; i++){
//         td[i] = document.createElement("td");
//     }
//     return td;
// }

// ejecutaLlamada(apiKey);


// A PARTIR DE ACÁ ESTÁ EL CÓDIGO QUE HABÍAMOS HECHO EN EL JS ANTERIOR PARA PODER ARMAR LA TABLA.

// function asdfr (id){
//     const  thead = document.getElementsByClassName("thead")
//     const asdT = document.getElementById(id)    
//     for (let index = 0; index < thead.length; index++) {
//         const element = document.createElement("td")
//         if(index=== 0){
//             element.setAttribute("class", "author");
//         }
//         if(index=== 1){
//             element.setAttribute("class", "category");
//         }
//         if(index=== 2){
//             element.setAttribute("class", "country");
//         }
//         if(index=== 3){
//             element.setAttribute("class", "image");
//         }
//         if(index=== 4){
//             element.setAttribute("class", "language");
//         }
//         if(index=== 5){
//             element.setAttribute("class", "published_at");
//         }
//         asdT.appendChild(element)
//     }
//  }

 
// async function rellenar () {
//     const response = await llamada();
//     console.log(response);
//     const ad = document.getElementsByClassName("author")
//     const adc = document.getElementsByClassName("category")
//     const add = document.getElementsByClassName("country")
//     const addg = document.getElementsByClassName("image")
//     const addh = document.getElementsByClassName("language")
//     const addj = document.getElementsByClassName("published_at")
//     let contador = 0
//     for(let i = 0; i< ad.length; i++){
//         if(i === contador){
//           ad[i].innerHTML = response.data[i].author
//           adc[i].innerHTML = response.data[i].category
//           add[i].innerHTML = response.data[i].country
//           addg[i].innerHTML = response.data[i].image
//           addh[i].innerHTML = response.data[i].language
//           addj[i].innerHTML = response.data[i].published_at
//         }
//         contador++
//     }
// }



// rellenar()