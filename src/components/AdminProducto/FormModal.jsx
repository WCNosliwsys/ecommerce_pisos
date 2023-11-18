import React, { useState } from 'react'
import { MiInputButton } from '../ui/MiInputButton'

export const FormModal = ({closeModal,crearProducto}) => {

  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
    precio: '',
    stock: '',
    tipo: '',
    estilo: '',
    acabado: '',
    grosor: '',
    instalacion: '',
    descripcion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNuevoProducto = () => {
        // Crear el objeto de categorías
        const categorias = {
          tipo: formData.tipo,
          estilo: formData.estilo,
          acabado: formData.acabado,
          grosor: formData.grosor,
          instalacion: formData.instalacion,
        };
    
        // Crear el objeto final del producto con categorías
        const nuevoProducto = {
          nombre: formData.nombre,
          imagen: formData.imagen,
          precio: formData.precio,
          stock: formData.stock,
          descripcion: formData.descripcion,
          categorias: categorias,
        };
    // Llamada a la función crearProducto con los datos del formulario
    crearProducto(nuevoProducto);

    // Limpiar el estado del formulario
    setFormData({
      nombre: '',
      imagen: '',
      precio: '',
      stock: '',
      tipo: '',
      estilo: '',
      acabado: '',
      grosor: '',
      instalacion: '',
      descripcion: '',
    });

    // Mostrar una alerta indicando que el producto se ha creado con éxito
    alert('Producto creado con éxito');

    // Cerrar el modal
    closeModal();
  };

  return (
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">

          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Nuevo Producto
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
                ❌
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <input type="text" name="nombre" id="name" value={formData.nombre} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre del Producto" required="" />
                </div>
                <div>
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link de Imagen</label>
                  <input type="text" name="imagen" id="brand"  value={formData.imagen}  onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="URL de la Imagen" required="" />
                </div>
                <div>
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                  <input type="number" name="precio" id="price" value={formData.precio}  onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="9999" required="" />
                </div>
                <div>
                  <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                  <input type="number" name="stock" id="stock" value={formData.stock} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="99999" required="" />
                </div>
                <div>
                  <label htmlFor="tipo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                  <select id="tipo"   name="tipo"   value={formData.tipo} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="" disabled>Seleccione el Tipo</option>
                    <option value="laminado">Laminado</option>
                    <option value="vinílico">Vinílico</option>
                    <option value="madera">Madera</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="estilo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estilo</label>
                  <select id="estilo" name="estilo"   value={formData.estilo} onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="" disabled>Seleccione Estilo</option>
                    <option value="madera">Madera</option>
                    <option value="moderno">Moderno</option>
                    <option value="tradicional">Tradicional</option>
                    <option value="contemporáneo">Contemporáneo</option>
                    <option value="rústico">Rústico</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="acabado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acabado</label>
                  <select id="acabado" name="acabado"   value={formData.acabado} onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="" disabled>Seleccione Acabado</option>
                    <option value="mate">Mate</option>
                    <option value="brillante">Brillante</option>
                    <option value="aceite">Aceite</option>
                    <option value="barnizado">Barnizado</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="grosor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grosor</label>
                  <select id="grosor" name="grosor"   value={formData.grosor} onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="" disabled>Seleccione Grosor</option>
                    <option value="delgado">Delgado</option>
                    <option value="estándar">Estándar</option>
                    <option value="grueso">Grueso</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="instalacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instalación</label>
                  <select id="instalacion" name="instalacion"   value={formData.instalacion} onChange={handleInputChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="" disabled>Seleccione Instalación</option>
                    <option value="clic">Clic</option>
                    <option value="pegado">Pegado</option>
                    <option value="clavado">Clavado</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="4"  name="descripcion"   value={formData.descripcion} onChange={handleInputChange}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escribe la descripción del producto aqui"></textarea>
                </div>
              </div>
              <div className='flex justify-center'>

              <MiInputButton  type={'button'} onClick={handleNuevoProducto} value={"➕ Nuevo Producto"} myStyles={'w-40 my-3'} />
              </div>
            </form>
          </div>
        </div>
  )
}
