import React from "react";




export const ProductoItem = ({ img, id, nombre, descripcion, price, category, cantidad, sku }) => {

return (
    <div className="producto">
      <div className="producto__footer">
        <div className="producto_img">
        <img height={350} src={img}  />
        </div>

      <div className="producto__footer">
      <h1>Modelo: {nombre}</h1>
        <p>Descripcion: {descripcion}</p>
        <p>Categoria: {category} </p>
        <p>Cantidad existente: {cantidad} </p>
        <p className="price">Precio $ {price}</p>
        <p>SKU: {sku} </p>
      </div>

        
      </div>
    </div>
  );
};

/*
    nombre: "Cobra",
    descripcion: "Zapatilla deportiva especial para carrera larga",
    price: 500,
    category: "congelados",
    img1: 

    */


