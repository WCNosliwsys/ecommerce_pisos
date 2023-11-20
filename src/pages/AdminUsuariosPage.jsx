import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { UsersViewItem } from '../components/AdminUser/UsersViewItem'

export const AdminUsuariosPage = () => {
  const misUsuarios = [
    {
      "_id": "655a6c647cfae4cc2975147c",
      "code": 1,
      "firstname": "Wilson",
      "lastname": "Callisaya Choquecota",
      "address": "Para Grande Maria Parado de Bellido 386",
      "email": "wilson@gmail.com",
      "rol": "admin",
      "status": true,
      "created_at": "2023-11-19T20:13:24.945Z",
      "updated_at": "2023-11-19T23:15:18.691Z",
      "__v": 0,
      "role": {
        "_id": "65544e296d3d0b5e3d7c5054",
        "name": "Administrador",
        "code": "admin",
        "__v": 0
      },
      "id": "655a6c647cfae4cc2975147c"
    },
    {
      "_id": "655a6c947cfae4cc29751481",
      "code": 2,
      "firstname": "Moises Elvis",
      "lastname": "Rivera",
      "address": "Montes 200",
      "email": "moises@gmail.com",
      "rol": "user",
      "status": true,
      "created_at": "2023-11-19T20:14:12.921Z",
      "updated_at": "2023-11-19T20:14:46.489Z",
      "__v": 0,
      "role": {
        "_id": "65542d5415fd7f5a38a2f3fb",
        "name": "Usuario",
        "code": "user",
        "__v": 0
      },
      "id": "655a6c947cfae4cc29751481"
    }
  ]
  const { productos, borrarProducto, crearProducto, actualizarProducto } = useProductos({ id: "", type: "getAll" })

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
            {misUsuarios.map((user, index) => (
              <UsersViewItem user={user} key={index} />
            ))}

          </tbody>
        </table>
      </div>
    </>

  )
}
