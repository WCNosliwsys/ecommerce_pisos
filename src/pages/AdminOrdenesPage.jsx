import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { OrdenesTable } from '../components/Ordenes/OrdenesTable'
import { useAdminStats } from '../hooks/useAdminStats'
import { Banner } from '../components/Banner'

export const AdminOrdenesPage = () => {
  const { data } = useAdminStats("listOrders")
  console.log(data)

  return (
    <>
      <Banner text={"Ordenes"} />
      <OrdenesTable misOrdenes={data} />
    </>

  )
}
