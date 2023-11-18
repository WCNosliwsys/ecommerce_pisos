import * as FirebaseProvider  from './Firebase/servicesFirebase'
import * as JsonProvider from './JSON/servicesJson'
import * as ApiProvider from './Api/servicesApi'
const selectedProvider = ApiProvider; 
export const pedirDatos = (id, type) => selectedProvider.pedirDatos(id, type);
export const createOrder = (order) =>selectedProvider.createOrder(order)
export const signIn = (email, password) =>selectedProvider.signIn(email, password)
export const signUp = (form) =>selectedProvider.signUp(form)
export const signOut = () =>selectedProvider.signOut()
export const updateUser = (data,id) =>selectedProvider.updateUser(data,id)
export const createProduct = (data) =>selectedProvider.createProduct(data)
export const updateProduct = (data,id) =>selectedProvider.updateProduct(data,id)
export const deleteProduct = (id) =>selectedProvider.deleteProduct(id)