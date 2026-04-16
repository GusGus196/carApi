const btnListar = document.getElementById("btnListar");
let list = "";

const API_URL = "/vehiculos"

btnListar.addEventListener("click", () =>{
    const divList = document.getElementById("divList");
    list = "";
    fetch(API_URL)
        .then(response => response.json())
        .then(carros => {
            carros.forEach(carro => {
                list += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${carro.marca}</h5>
                        <p class="card-text">${carro.modelo}</p>
                        <p class="card-text">${carro.placa}</p>
                        <button id="btnEliminar" onclick="delCarro('${carro.placa}')" type="button">Eliminar</button>
                    </div>
                </div>
                <br>
                `;
            });
            divList.innerHTML = list;
        })
    .catch(error => console.error('Error', error));
})

const btnAgregar = document.getElementById("bntAgregar");
btnAgregar.addEventListener("click", () =>{
    const placa = document.getElementById("placa").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    fetch(API_URL, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },    
        body: JSON.stringify({
            placa: placa,
            marca: marca,
            modelo: modelo
        })
    }) 
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok'); // Handling HTTP errors manually
    }
    return response.json(); // Parsing the JSON response
    })
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", ()=>{
    const placa = document.getElementById("placa").value;
    const divList = document.getElementById("divList");
    list = "";
    fetch(`${API_URL}/${placa}`)
        .then(response => response.json())
        .then(carro =>{
            list += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${carro.marca}</h5>
                        <p class="card-text">${carro.modelo}</p>
                        <p class="card-text">${carro.placa}</p>
                    </div>
                </div>
                <br>
            `;
            divList.innerHTML = list;
        })
})


function delCarro(id){
    fetch(`${API_URL}/${id}`, {
        method: 'delete'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handling HTTP errors manually
        }
        return response.json(); // Parsing the JSON response
    })
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

    
}