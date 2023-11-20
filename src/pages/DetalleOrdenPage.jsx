import React from 'react'
import { useProductos } from '../hooks/useProductos'

export const DetalleOrdenPage = () => {
  const orden = {
    "cliente": {
      "codUser": 1
    },
    "_id": "655b960bec5aa80f97393995",
    "code": 13,
    "items": [
      {
        "code": 2,
        "nombre": "Piso vinílico gris",
        "cantidad": 1,
        "precio": 49.99
      },
      {
        "code": 7,
        "nombre": "Piso vinílico blanco",
        "cantidad": 1,
        "precio": 79.99
      }
    ],
    "total": 129.98,
    "fecha": "2023-11-20T17:23:23.194Z",
    "created_at": "2023-11-20T17:23:23.209Z",
    "updated_at": "2023-11-20T17:23:23.209Z",
    "__v": 0
  }
  const { actualizarProducto } = useProductos({ id: "", type: "getAll" })

  return (
    <>
      {/* Aqui */}
      <div className="mx-10 my-5">
        <div className="flex justify-between mb-3 mx-5">

          <div className="flex flex-col ">
            <p className="text-lg font-bold">Código de Cliente: {orden.cliente.codUser}</p>
            <p className="text-lg font-bold">Código de Orden: {orden.code}</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-lg font-bold">Total: S/.{orden.total.toFixed(2)}</p>
            <p className="text-lg font-bold">Fecha: {new Date(orden.fecha).toLocaleString()}</p>
          </div>

        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3 text-center">
                  CodProducto
                </th>
                <th scope="col" className="px-2 py-3 text-center">
                  Nombre
                </th>
                <th scope="col" className="px-2 py-3 text-center">
                  Cantidad
                </th>
                <th scope="col" className="px-2 py-3 text-center">
                  Precio
                </th>
                <th scope="col" className="px-2 py-3 text-center">
                  subTotal
                </th>

              </tr>
            </thead>
            <tbody>
              {orden.items.map((item, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td scope="row" className="px-2 py-4 text-center ">
                    {item.code}
                  </td>

                  <td className="px-2 py-4 text-center">
                    {item.nombre}
                  </td>
                  <td className="px-2 py-4 text-center">
                    {item.cantidad}
                  </td>
                  <td className="px-2 py-4 text-center">
                    {item.precio.toFixed(2)}
                  </td>
                  <td className="px-2 py-4 text-center">
                    {(item.cantidad * item.precio).toFixed(2)}
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

    </>

  )
}
