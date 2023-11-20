import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { UsersViewItem } from '../components/AdminUser/UsersViewItem'
import { useAdminStats } from '../hooks/useAdminStats'

export const AdminUsuariosPage = () => {
  const { data } = useAdminStats("listUsers")

  return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 text-center">
                Codigo
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Nombre
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Apellido
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                email
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Dirección
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                rol
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Fecha creación
              </th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <UsersViewItem user={user} key={index} />
            ))}

          </tbody>
        </table>
      </div>
    </>

  )
}
