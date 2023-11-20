import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { OrdenesTable } from '../components/Ordenes/OrdenesTable'
import { useAdminStats } from '../hooks/useAdminStats'

export const AdminOrdenesPage = () => {
  const { data } = useAdminStats("listOrders")
  console.log(data)

  return (
    <>

     <OrdenesTable misOrdenes={data} />    
    </>

  )
}
