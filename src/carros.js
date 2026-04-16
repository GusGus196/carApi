export class Carro{
    constructor(placa, marca, modelo){
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Inventario{
    constructor(){
        this.carros = [];
    }

    agregar(carro){
        if(this.carros.length == 0){
            this.carros[0] = carro;
        } else{
            this.carros[this.carros.length] = carro;
        }
    }

    buscar(id){
        for(let i = 0; i <= this.carros.length; i++){
            if(this.carros[i].placa == id){
                return this.carros[i];
            }
        }
    }

    eliminar(id){
        let posicion = -1;
        for(let i = 0; i < this.carros.length; i++){
            if(this.carros[i].placa == id){
               posicion = i;
               break;
            }
        }
        if(posicion !== -1){
            this.carros.splice(posicion, 1);
        }
        return this.carros;
    }
}

export const inventario = new Inventario();
let carro = new Carro("FVQ2345A", "Nissan", "Versa");
inventario.agregar(carro);
carro = new Carro("FVQ2345B", "Tesla", "a");
inventario.agregar(carro);
carro = new Carro("FVQ2345C", "Honda", "si");
inventario.agregar(carro);
