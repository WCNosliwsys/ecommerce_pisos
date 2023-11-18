import { useEffect, useState } from "react"
import { pedirDatos,deleteProduct } from "../services/servicesProvider"

export const useProductos = ({ id, type }) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    pedirDatos(id, type)
      .then((res) => {
        setProductos(res)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const actualizarProductos = () => {
    pedirDatos(id, type)
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarProducto = async (productId) => {
    try {
      // Lógica para eliminar un producto (usando tu servicio API)
      await deleteProduct(productId);

      // Después de borrar, actualiza la lista de productos
      actualizarProductos();
    } catch (error) {
      // Manejo de errores, puedes mostrar mensajes de error al usuario si es necesario
      console.error("Error al borrar el producto:", error);
    }
  };

  return { productos,borrarProducto }
}