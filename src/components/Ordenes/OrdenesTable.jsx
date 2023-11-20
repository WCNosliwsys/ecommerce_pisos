import React from 'react'
import { OrdenesViewItem } from './OrdenesViewItem'

export const OrdenesTable = ({misOrdenes}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-2 py-3 text-center">
            Codigo de Orden
          </th>
          <th scope="col" className="px-2 py-3 text-center">
            Fecha
          </th>
          <th scope="col" className="px-2 py-3 text-center">
            Hora
          </th>
          <th scope="col" className="px-2 py-3 text-center">
            Total S/.
          </th>
         

          <th scope="col" className="px-2 py-3 text-center">
            Acciones

          </th>
        </tr>
      </thead>
      <tbody>
        {misOrdenes.map((orden, index) => (
          <OrdenesViewItem orden={orden} key={index} />
        ))}

      </tbody>
    </table>
  </div>  
  )
}
