export const pedirDatos = (id, type) => {

  if (type === 'getOne') {
    return new Promise(async (resolve, reject) => {

      const response = await fetch(`http://localhost:3000/products/${id}`)
      const data = await response.json()
      const dataWithId = { ...data, id: data.code};
      resolve(dataWithId)

    })
  } else return new Promise(async(resolve, reject) => {
    if(id){
      resolve([])
    }
    else{
      const response = await fetch(`http://localhost:3000/products`)
      const data = await response.json()
      const dataWithId = data.map(item => {
        return { ...item, id: item.code };
      });
      resolve(dataWithId)
    }
      
  })


}

export const createOrder=(order)=>{
  return new Promise(async(resolve,reject)=>{
    setTimeout(() => {
      console.log(order)
      resolve(Math.floor( Math.random() * 10000))
    }, 500)
  })
}

export const signUp = async (form) => {
  try {
    console.log("wilform", form);

    const response = await fetch('http://localhost:3000/auth/signup', {
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

    const auth = await fetch('http://localhost:3000/auth/signin', {
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
    const dataWithId = { ...data, id: data.email,accessToken,refreshToken};
    return dataWithId; // Puedes devolver los datos recibidos, ajusta según tu necesidad.
  } catch (e) {
    console.error("Ocurrió un error:", e);
    throw e;
  }
}

export const signIn = async (email, password) => {
  try {
    const body = {email,password}

    const response = await fetch('http://localhost:3000/auth/signin', {
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

    const user = await fetch(`http://localhost:3000/users/${email}`, {
      headers: headersWithToken,
    });

    if (!user.ok) {
      throw new Error(`Error al obtener datos del usuario: ${user.statusText}`);
    }
    const userData = await user.json()

    console.log("Datos recibidos:", userData);
    const dataWithId = { ...userData, id: userData.email, accessToken, refreshToken};
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
    const response = await fetch(`http://localhost:3000/users/${id}`, {
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
  return
}
export const updateProduct = async (data,id) => {
  return
}
export const deleteProduct = async (id) => {
  return
}