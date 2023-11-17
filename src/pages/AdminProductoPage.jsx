import React, { useState } from 'react'
import { MiInputButton } from '../components/ui/MiInputButton'
import { FormModal } from '../components/AdminProducto/FormModal';
import { ProductAdminViewItem } from '../components/AdminProducto/ProductAdminViewItem';

export const AdminProductoPage = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const productos =[
    {
      "categorias": {
        "tipo": "laminado",
        "estilo": "madera",
        "acabado": "mate",
        "grosor": "estándar",
        "instalacion": "clic"
      },
      "_id": "65545dec6a840473ce5e2b1b",
      "code": 1,
      "nombre": "Piso laminado roble",
      "imagen": "https://picsum.photos/id/1/300/200",
      "precio": 99.99,
      "stock": 10,
      "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati cumque amet quae molestiae fugit dolorem quia harum voluptatibus, at eligendi, consequuntur, praesentium quam ex ea magni placeat eos ipsam.",
      "status": true,
      "created_at": "2023-11-15T05:58:04.175Z",
      "updated_at": "2023-11-15T05:58:04.175Z",
      "__v": 0
    },
    {
      "categorias": {
        "tipo": "vinílico",
        "estilo": "moderno",
        "acabado": "brillante",
        "grosor": "delgado",
        "instalacion": "pegado"
      },
      "_id": "65545e066a840473ce5e2b1e",
      "code": 2,
      "nombre": "Piso vinílico gris",
      "imagen": "https://picsum.photos/id/2/300/200",
      "precio": 49.99,
      "stock": 10,
      "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati cumque amet quae molestiae fugit dolorem quia harum voluptatibus, at eligendi, consequuntur, praesentium quam ex ea magni placeat eos ipsam.",
      "status": true,
      "created_at": "2023-11-15T05:58:30.753Z",
      "updated_at": "2023-11-15T05:58:30.753Z",
      "__v": 0
    },
    {
      "categorias": {
        "tipo": "madera",
        "estilo": "tradicional",
        "acabado": "aceite",
        "grosor": "premium",
        "instalacion": "clavado"
      },
      "_id": "65545e986a840473ce5e2b21",
      "code": 3,
      "nombre": "Piso de madera natural",
      "imagen": "https://picsum.photos/id/3/300/200",
      "precio": 149.99,
      "stock": 10,
      "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati cumque amet quae molestiae fugit dolorem quia harum voluptatibus, at eligendi, consequuntur, praesentium quam ex ea magni placeat eos ipsam.",
      "status": true,
      "created_at": "2023-11-15T06:00:56.876Z",
      "updated_at": "2023-11-15T06:00:56.876Z",
      "__v": 0
    },
    {
      "categorias": {
        "tipo": "vinílico",
        "estilo": "moderno",
        "acabado": "mate",
        "grosor": "delgado",
        "instalacion": "pegado"
      },
      "_id": "65545ea96a840473ce5e2b23",
      "code": 4,
      "nombre": "Piso vinílico beige",
      "imagen": "https://picsum.photos/id/4/300/200",
      "precio": 54.99,
      "stock": 10,
      "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi obcaecati cumque amet quae molestiae fugit dolorem quia harum voluptatibus, at eligendi, consequuntur, praesentium quam ex ea magni placeat eos ipsam.",
      "status": true,
      "created_at": "2023-11-15T06:01:13.367Z",
      "updated_at": "2023-11-15T06:01:13.367Z",
      "__v": 0
    }
  ]
  function newProducto() {
    // Aquí puedes realizar acciones al hacer clic en "Nuevo Producto"
    return;
  }

  // Función para mostrar el modal
  function openModal() {
    setModalVisibility(true);
  }

  // Función para cerrar el modal
  function closeModal() {
    setModalVisibility(false);
  }
  return (
    <>
      <MiInputButton type={'button'} onClick={openModal} value={"Nuevo Producto"} myStyles={'w-40 my-3 mx-10'} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 text-center">
                Code
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Imagen
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Nombre
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Precio S/.
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Stock
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Descripción
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Categorias
              </th>

              <th scope="col" className="px-2 py-3 text-center">
                Acciones

              </th>
            </tr>
          </thead>
          <tbody>
          {productos.map((producto, index) => (
            <ProductAdminViewItem producto={producto} key={index}  borrarProducto={()=>{}} editarProducto={()=>{}}/>
          ))}

          </tbody>
        </table>
      </div>



      {isModalVisible && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeModal}></div>}


      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${isModalVisible ? 'fixed' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
        <FormModal closeModal={closeModal} />
      </div>



    </>


  )
}
