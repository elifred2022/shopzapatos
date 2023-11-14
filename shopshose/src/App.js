import { Header } from "./components/Header";
import { ProductoItem } from "./components/Productos/ProductoItem";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Cobra",
      descripcion: "Zapatilla deportiva especial para carrera larga",
      price: 150000,
      category: "pistas",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/b0d0540c761a4fc8a203828061308201_9366/Zapatillas_de_Running_Switch_FWD_Azul_IF2399_01_standard.jpg",

      cantidad: 10,
      sku: "NOV2023A",
    },
    {
      id: 2,
      nombre: "Raptor",
      descripcion: "Zapatilla especial para escalar montañas",
      price: 120000,
      category: "montaña",
      image:
        "https://d368r8jqz0fwvm.cloudfront.net/46512-product_lg/zapatillas-de-hombre-seilas-gtx.jpg",

      cantidad: 15,
      sku: "NOV2023B",
    },
    {
      id: 3,
      nombre: "Hunter",
      descripcion: "Botas especiales para caza y pesca",
      price: 220000,
      category: "montaña",
      image:
        "https://d368r8jqz0fwvm.cloudfront.net/46535-product_lg/botas-de-hombre-vector.jpg",

      cantidad: 15,
      sku: "NOV2023B",
    },
  ];

  return (
    <div className="App">
      <Header />
      {/*<ProductoItem data={data} /> */}
      {productos.map((producto) => (
        <ProductoItem
          img={producto.image}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          price={producto.price}
          category={producto.category}
          cantidad={producto.cantidad}
          sku={producto.sku}
        />
      ))}
    </div>
  );
}

export default App;

/*image: require("./imagenes/tequeBlack.PNG"), */

/*    Nombre
● Descripción
● Precio
● SKU
● Cantidad disponible */
