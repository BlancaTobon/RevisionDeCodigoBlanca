// Tenemos una lista de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaDeProductos = document.getElementById("lista-de-productos");
const input = document.querySelector('.input');

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    const div = document.createElement("div");
    div.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productos[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(titulo);
    div.appendChild(imagen);

    listaDeProductos.appendChild(div);
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const div = document.createElement("div");
    div.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    div.appendChild(titulo);
    div.appendChild(imagen);

li.appendChild(div);
  }
};

function filtrado(productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}