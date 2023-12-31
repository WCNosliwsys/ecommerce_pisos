import { transformarOrden } from "./util"
// const dominio = 'http://localhost:3000'
const dominio = 'https://yesica-chui-chalco.xyz/app4'
export const pedirDatos = (id, type) => {

  if (type === 'getOne') {
    return new Promise(async (resolve, reject) => {

      const response = await fetch(`${dominio}/products/${id}`)
      const data = await response.json()
      const dataWithId = { ...data, id: data.code};
      resolve(dataWithId)

    })
  } else return new Promise(async(resolve, reject) => {
    if(id){
      resolve([])
    }
    else{
      const response = await fetch(`${dominio}/products`)
      const data = await response.json()
      const dataWithId = data.map(item => {
        return { ...item, id: item.code };
      });
      resolve(dataWithId)
    }
      
  })


}

export const createOrder= async (order)=>{

  try {
    // Obtener el token de autorización del almacenamiento local
    const perfil = JSON.parse(localStorage.getItem('auth') || null);

    // Verificar si hay un token de autorización
    if (!perfil || !perfil.accessToken) {
      throw new Error('Token de autorización no disponible');
    }
    const data = transformarOrden(order)
    // Construir la URL para la creación de productos
    const url = `${dominio}/orders`;

    // Realizar la solicitud POST al servidor
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Manejar errores de la solicitud, lanzar una excepción o manejarlos según tu lógica
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Si la solicitud fue exitosa, puedes devolver algún resultado si es necesario
    // Por ejemplo, puedes devolver el producto creado
    const orderCreado = await response.json();
    return orderCreado.code;
  } catch (e) {
    // Manejar errores, lanzar una excepción o manejarlos según tu lógica
    console.log('Ocurrió un error al crear la orden:', e);
    throw e;
  }
}

export const signUp = async (form) => {
  try {
    console.log("wilform", form);

    const response = await fetch(`${dominio}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const body = {email:form.email,password:form.password}

    const auth = await fetch(`${dominio}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!auth.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${auth.statusText}`);
    }

    const { accessToken, refreshToken } = await auth.json();



    const data = await response.json();
    console.log("Datos recibidos:", data);
    const dataWithId = { ...data, id: data.code,accessToken,refreshToken};
    return dataWithId; // Puedes devolver los datos recibidos, ajusta según tu necesidad.
  } catch (e) {
    console.error("Ocurrió un error:", e);
    throw e;
  }
}

export const signIn = async (email, password) => {
  try {
    const body = {email,password}

    const response = await fetch(`${dominio}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const { accessToken, refreshToken } = await response.json();
    const headersWithToken = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    const user = await fetch(`${dominio}/users/${email}`, {
      headers: headersWithToken,
    });

    if (!user.ok) {
      throw new Error(`Error al obtener datos del usuario: ${user.statusText}`);
    }
    const userData = await user.json()

    console.log("Datos recibidos:", userData);
    const dataWithId = { ...userData, id: userData.code, accessToken, refreshToken};
    return dataWithId; // Puedes devolver los datos recibidos, ajusta según tu necesidad.
  } catch (e) {
    console.error("Ocurrió un error:", e);
    throw e;
  }
}

export const signOut = async () => {
  // try {
  //   await auth.signOut()
  // } catch (e) {
  //   console.log("ocurrio un error firebase:", e)
  //   throw e;
  // }
  console.log("se cerro sesion")
}

export const updateUser = async (data, id) => {
  try {
    console.log("wilbody",data)
    const perfil= JSON.parse(localStorage.getItem('auth') || null )
    console.log("wilperfil",perfil)
    if(!perfil) return false
    const response = await fetch(`${dominio}/users/update_perfil`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

   
    return true
  } catch (e) {
    console.log("ocurrio un error  actualizando:", e)
    throw e;
  }
}

export const createProduct = async (data) => {
  try {
    // Obtener el token de autorización del almacenamiento local
    const perfil = JSON.parse(localStorage.getItem('auth') || null);

    // Verificar si hay un token de autorización
    if (!perfil || !perfil.accessToken) {
      throw new Error('Token de autorización no disponible');
    }

    // Construir la URL para la creación de productos
    const url = `${dominio}/products`;

    // Realizar la solicitud POST al servidor
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Manejar errores de la solicitud, lanzar una excepción o manejarlos según tu lógica
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Si la solicitud fue exitosa, puedes devolver algún resultado si es necesario
    // Por ejemplo, puedes devolver el producto creado
    const productoCreado = await response.json();
    return productoCreado;
  } catch (e) {
    // Manejar errores, lanzar una excepción o manejarlos según tu lógica
    console.log('Ocurrió un error al crear el producto:', e);
    throw e;
  }
};
export const updateProduct = async (data,id) => {
  try {
    // Obtener el token de autorización del almacenamiento local
    const perfil = JSON.parse(localStorage.getItem('auth') || null);

    // Verificar si hay un token de autorización
    if (!perfil || !perfil.accessToken) {
      throw new Error('Token de autorización no disponible');
    }

    // Construir la URL para la creación de productos
    const url = `${dominio}/products/${id}`;

    // Realizar la solicitud POST al servidor
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Manejar errores de la solicitud, lanzar una excepción o manejarlos según tu lógica
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Si la solicitud fue exitosa, puedes devolver algún resultado si es necesario
    // Por ejemplo, puedes devolver el producto creado
    const productoActualizado = await response.json();
    return productoActualizado;
  } catch (e) {
    // Manejar errores, lanzar una excepción o manejarlos según tu lógica
    console.log('Ocurrió un error al crear el producto:', e);
    throw e;
  }
}
export const deleteProduct = async (id) => {
  try {
    // Obtener el token de autorización del almacenamiento local
    const perfil = JSON.parse(localStorage.getItem('auth') || null);

    // Verificar si hay un token de autorización
    if (!perfil || !perfil.accessToken) {
      throw new Error('Token de autorización no disponible');
    }

    // Construir la URL del producto con el código proporcionado
    const url = `${dominio}/products/${id}`;

    // Realizar la solicitud DELETE al servidor
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
      },
    });

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Manejar errores de la solicitud, lanzar una excepción o manejarlos según tu lógica
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Si la solicitud fue exitosa, puedes devolver algún resultado si es necesario
    // Por ejemplo, puedes devolver true para indicar éxito
    return true;
  } catch (e) {
    // Manejar errores, lanzar una excepción o manejarlos según tu lógica
    console.log('Ocurrió un error al eliminar el producto:', e);
    throw e;
  }
};


export const flistUsers = async () => {
  try {
    const perfil= JSON.parse(localStorage.getItem('auth') || null )
    if(!perfil) return false
    const response = await fetch(`${dominio}/users`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },

    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
   
    const users = await response.json();
    return users;
  } catch (e) {
    console.log("ocurrio un error  actualizando:", e)
    throw e;
  }
}
export const flistOrders = async () => {
  try {
    const perfil= JSON.parse(localStorage.getItem('auth') || null )
    if(!perfil) return false
    const response = await fetch(`${dominio}/orders`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },

    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
   
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("ocurrio un error  actualizando:", e)
    throw e;
  }
}
export const flistMyOrders = async () => {
  try {
    const perfil= JSON.parse(localStorage.getItem('auth') || null )
    if(!perfil) return false
    const response = await fetch(`${dominio}/orders/mis_ordenes`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },

    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
   
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("ocurrio un error  actualizando:", e)
    throw e;
  }
}
export const flistOrderById = async (id) => {
  try {
    console.log("wilmyid",id)
    console.log("filtrandoooooooo")
    const perfil= JSON.parse(localStorage.getItem('auth') || null )
    if(!perfil) return false
    const response = await fetch(`${dominio}/orders/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${perfil.accessToken}`,
        'Content-Type': 'application/json',
      },

    });

    if (!response.ok) {
      // Manejar errores de la solicitud, puedes lanzar una excepción o manejarlos de otra manera según tu lógica.
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
   
    const data = await response.json();
    console.log("datoraro",data)
    return data;
  } catch (e) {
    console.log("ocurrio un error  actualizando:", e)
    throw e;
  }
}