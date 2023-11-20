import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { useAdminStats } from '../hooks/useAdminStats'
import { useParams } from 'react-router-dom'

export const DetalleOrdenPage = () => {
  const { id } = useParams()
  const { data } = useAdminStats("listMyOrderByID", id)
  const orden = data
  console.log(data)
  return (
    <>
      {/* Aqui */}
      {
        orden.length != 0
          ? <div className="mx-10 my-5">
            <div className="flex justify-between mb-3 mx-5">

              <div className="flex flex-col ">
                <p className="text-lg font-bold">Código de Cliente: {orden.cliente?.codUser}</p>
                <p className="text-lg font-bold">Código de Orden: {orden.code}</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-lg font-bold">Total: S/.{orden.total?.toFixed(2)}</p>
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
                  {orden.items?.map((item, index) => (
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
                        {item.precio?.toFixed(2)}
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
          : ""
      }


    </>

  )
}
