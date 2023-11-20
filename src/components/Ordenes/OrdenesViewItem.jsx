import React from 'react'

export const OrdenesViewItem = ({ orden }) => {
  const fecha = new Date(orden.fecha);
  const fechaFormateada = fecha.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const hora = new Date(orden.fecha);
  const horaFormateada = hora.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td scope="row" className="px-2 py-4 text-center ">
        {orden.code}
      </td>

      <td className="px-2 py-4 text-center">
        {fechaFormateada}
      </td>
      <td className="px-2 py-4 text-center">
        {horaFormateada}
      </td>
      <td className="px-2 py-4 text-center">
        {orden.total.toFixed(2)}
      </td>
      <td className="px-2 py-4 text-center ">
        <button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {}}>👁 Ver Detalle</button>
        <br />
      </td>
    </tr>
  )
}