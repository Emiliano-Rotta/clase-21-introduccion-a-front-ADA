
//Asincronico Excepcion a la regla de la sincrinicidad de Javascript
// fetch("https://rickandmortyapi.com/api/character") // fetch significa traeme tal cosa
// .then(res =>res.json()) //.then es despues, despues de lo de arriba hace esto..
// .then((data)=>{    

//     for (let i = 0; i < 20; i++) {
//         console.log(data.results[i].name)
//     }
// })



fetch("https://rickandmortyapi.com/api/character") 
.then(res =>res.json())
.then((data)=>{    
    console.log(data)
    let element = document.getElementById('fetch')
    let html = ""
    for (let i = 0; i < 20; i++) {

        html = html + 
        `
        <div class="card">
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image} alt="">
        <p>${data.results[i].status}</p>
        <p>${data.results[i].species}</p>
        </div>
        `

    }
    // console.log(html)
    element.innerHTML = html
})

//Que son las comillas invertidas? --> es para interpolar != concatenar.
// var alumna = "Marisel"
// console.log("Las alumna que escribio en el chat es: " + alumna) //-->Concateno string
// console.log(`Las alumna que escribio en el chat es: ${alumna}`) //-->interpolar string

// `<h2>${alumna}</h2>`

//Que son los signos $ mas llaves


//no actualizar el dom