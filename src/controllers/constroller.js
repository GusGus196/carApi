import { inventario } from "../carros.js";
import { Carro } from "../carros.js";

export const listCarros = async(req, res) => {
    console.log(inventario.carros);
    res.json(inventario.carros);
};

export const agregarCarro = async(req, res) => {
    const data = req.body;
    if(!data.placa){
        return res.status(500).json({message: "Falta información"});
    }
    const carro = new Carro(data.placa, data.marca, data.modelo);
    console.log(data);
    inventario.agregar(carro);
    res.status(201).json({
        success: true,
        message: "Carro agregado",
        data
    }); 
};

export const carro = async(req, res) => {
    const { id } = req.params;
    const carro = inventario.buscar(id);
    res.json(carro);
};

export const delCarro = async(req, res) => {
    const { id } = req.params;
    inventario.eliminar(id);
    return res.status(201).json(inventario.carros);
};
