import React from 'react'
import { OrdenesTable } from '../components/Ordenes/OrdenesTable';
import { useAdminStats } from '../hooks/useAdminStats';
import { Banner } from '../components/Banner'
export const MisOrdenesPage = () => {
  const { data } = useAdminStats("listMyOrders")
  return (
    <>
      <Banner text={"Mis Ordenes"} />
     <OrdenesTable misOrdenes={data} />    
    </>

  )
}