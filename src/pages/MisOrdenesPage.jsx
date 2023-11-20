import React from 'react'
import { useProductos } from '../hooks/useProductos';
import { ProductAdminViewItem } from '../components/AdminProducto/ProductAdminViewItem';
import { OrdenesViewItem } from '../components/Ordenes/OrdenesViewItem';
import { OrdenesTable } from '../components/Ordenes/OrdenesTable';
import { useAdminStats } from '../hooks/useAdminStats';

export const MisOrdenesPage = () => {
  const { data } = useAdminStats("listMyOrders")
  return (
    <>

     <OrdenesTable misOrdenes={data} />    
    </>

  )
}