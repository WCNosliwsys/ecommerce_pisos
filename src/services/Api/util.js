export const transformarOrden = (order) => {
  // Transformar cliente
  const clienteTransformado = {
    codUser: order.cliente.codUser,
  };

  // Transformar items
  const itemsTransformados = order.items.map((item) => ({
    code: item.code,
    cantidad: item.cantidad,
  }));

  // Crear la orden transformada
  const ordenTransformada = {
    cliente: clienteTransformado,
    items: itemsTransformados,
  };

  return ordenTransformada;
};