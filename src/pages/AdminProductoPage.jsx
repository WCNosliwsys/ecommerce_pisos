import React, { useState } from 'react'
import { MiInputButton } from '../components/ui/MiInputButton'
import { FormModal } from '../components/AdminProducto/FormModal';
import { ProductAdminViewItem } from '../components/AdminProducto/ProductAdminViewItem';
import { useProductos } from '../hooks/useProductos';

export const AdminProductoPage = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const { productos } = useProductos({id:"", type: "getAll" })

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
