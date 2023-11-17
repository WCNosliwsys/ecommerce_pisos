import React from 'react'

export const ProductAdminViewItem = ({ producto,editarProducto,borrarProducto }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td scope="row" className="px-2 py-4 text-center">
        {producto.code}
      </td>
      <td className="px-2 py-4 ">
        <img width={50} src="https://picsum.photos/id/5/200/200" alt="" />
      </td>
      <td className="px-2 py-4">
        {producto.nombre}
      </td>
      <td className="px-2 py-4">
        {producto.precio}
      </td>
      <td className="px-2 py-4">
        {producto.stock}
      </td>
      <td className="px-2 py-4 w-[30%]">
        {producto.descripcion}
      </td>
      <td className="px-2 py-4 text-center ">
        {producto.categorias.tipo}, {producto.categorias.estilo}, {producto.categorias.acabado}, {producto.categorias.grosor}, {producto.categorias.instalacion}
      </td>
      <td className="px-2 py-4 text-center  w-[100px]">
        <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => editarProducto(producto.code)}>✏´Editar</button>
        <br />
        <br />
        <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => borrarProducto(producto.code)}>🗑Borrar</button>
      </td>
    </tr>
  )
}
