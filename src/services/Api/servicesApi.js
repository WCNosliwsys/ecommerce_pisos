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