export interface Product{
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;

}
export const products = [
  { "id" : 1,
      "nombre" : "Bimota KB4",
      "precio" : 8800,
      "descripcion" : "Una de las cosas que más destaca en la nueva Bimota KB4 es su diseño neo-retro a medio camino entre las italianas clásicas y las 'concept bikes' japonesas de manga.",
      "imagen" : "assets/moto1.jpg",
      "exclusivo" : true
    },
    {
      "id" : 2,
      "nombre" : "BMW K 1600 Grand America",
      "precio" : 11000,
      "descripcion" : "Se convierte en la quinta versión de la saga gran turismo de la casa alemana.  Partiendo de su modelo bagger, la K1600B, añaden un baúl trasero así como más equipamiento de serie.",
      "imagen" : "assets/moto2.jpg",
      "exclusivo" : true
    },
    {
      "id" : 3,
      "nombre" : "Yamaha MT-03 / YZF-R3",
      "precio" : 6600,
      "descripcion" : "Yamaha renueva para este mismo año, la pequeña cilindrada de dos de sus bestias más conocidas. Asequibles y fáciles de llevar en cualquier situación son aptas para todo tipo de usuarios",
      "imagen" : "assets/moto3.jpeg",
      "exclusivo" : true
    },
    {
      "id" : 4,
      "nombre" : "BMW G 310 R",
      "precio" :9500,
      "descripcion" : "La BMW G 310 R es la naked más pequeña dentro del catálogo de la marca alemana, una moto enfocada a los usuarios del A2 que buscan una moto atractiva visualmente",
      "imagen" : "assets/moto4.jpg",
      "exclusivo" : false

    },
    {
      "id" : 5,
      "nombre" : "Honda CB125R",
      "precio" : 10000,
      "descripcion" : "La Honda CB125R es una pequeña naked de aspecto neo-retro que destaca por su potente motor y notable parte ciclo."
      + "Nacida en 2018, en 2021 se actualiza con un nuevo motor Euro5 y con una nueva horquilla Showa SFF-BP. ",
      "imagen" : "assets/moto5.jpg",
      "exclusivo" : false

    },
    {
      "id" : 6,
      "nombre" : "Honda CMX 500 Rebel",
      "precio" : 9000,
      "descripcion" : "El desarrollo de la Honda Rebel CMX500 comenzó en Norte América, con un enfoque dirigido a desatar la imaginación de una joven generación de motoristas,"
      +" con un estilo diferente al de las motocicletas cruiser tradicionales",
      "imagen" : "assets/moto6.jpg",
      "exclusivo" : false

    }
]
