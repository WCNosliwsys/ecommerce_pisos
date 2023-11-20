import React from 'react'

export const UsersViewItem = ({ user }) => {
  const fecha = new Date(user.created_at);
  const fechaFormateada = fecha.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const hora = new Date(user.created_at);
  const horaFormateada = hora.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td scope="row" className="px-2 py-4 text-center ">
        {user.code}
      </td>

      <td className="px-2 py-4 text-center">
        {user.firstname}
      </td>
      <td className="px-2 py-4 text-center">
        {user.lastname}
      </td>
      <td className="px-2 py-4 text-center">
        {user.email}
      </td>
      <td className="px-2 py-4 text-center">
        {user.address}
      </td>
      <td className="px-2 py-4 text-center">
        {user.rol}
      </td>
      <td className="px-2 py-4 text-center">
        {fechaFormateada}
        <br />
        {horaFormateada}
      </td>
    </tr>
  )
}
