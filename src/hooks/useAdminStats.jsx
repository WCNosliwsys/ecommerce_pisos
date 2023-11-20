import { useEffect, useState } from "react"
import { pedirDatos,deleteProduct, createProduct, updateProduct, flistUsers, flistOrders } from "../services/servicesProvider"

export const useAdminStats = (type,id) => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      switch (type) {
        case "listUsers":
          const userList = await flistUsers();
          setData(userList);
          break;
        case "listOrders":
          const orderList = await flistOrders();
          setData(orderList);
          break;
        // case "getOrder":
        //   const orderData = await pedirDatos(id, type);
        //   setData(orderData);
        //   break;
        // Agrega más casos según las acciones que necesites
        default:
          break;
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, id]);

  return {data }
}