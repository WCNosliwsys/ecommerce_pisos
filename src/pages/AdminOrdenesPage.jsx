import React from 'react'
import { useProductos } from '../hooks/useProductos'
import { OrdenesTable } from '../components/Ordenes/OrdenesTable'

export const AdminOrdenesPage = () => {
  const misOrdenes = [
    {
      "cliente": {
        "codUser": 1
      },
      "_id": "655a73d27cfae4cc297514a5",
      "code": 1,
      "items": [
        {
          "code": 1,
          "cantidad": 1,
          "_id": "655a73d27cfae4cc297514a6"
        },
        {
          "code": 7,
          "cantidad": 1,
          "_id": "655a73d27cfae4cc297514a7"
        }
      ],
      "total": 179.98,
      "fecha": "2023-11-19T20:45:06.372Z",
      "created_at": "2023-11-19T20:45:06.394Z",
      "updated_at": "2023-11-19T20:45:06.394Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 1
      },
      "_id": "655a75d57cfae4cc297514ac",
      "code": 2,
      "items": [
        {
          "code": 6,
          "cantidad": 1,
          "_id": "655a75d57cfae4cc297514ad"
        }
      ],
      "total": 129.99,
      "fecha": "2023-11-19T20:53:41.631Z",
      "created_at": "2023-11-19T20:53:41.646Z",
      "updated_at": "2023-11-19T20:53:41.646Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 1
      },
      "_id": "655a81a3548fa1a12e94ec75",
      "code": 3,
      "items": [
        {
          "code": 8,
          "cantidad": 5,
          "precio": 85,
          "_id": "655a81a3548fa1a12e94ec76"
        }
      ],
      "total": 425,
      "fecha": "2023-11-19T21:44:03.015Z",
      "created_at": "2023-11-19T21:44:03.197Z",
      "updated_at": "2023-11-19T21:44:03.197Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 1
      },
      "_id": "655a81ee548fa1a12e94ec7c",
      "code": 4,
      "items": [
        {
          "code": 5,
          "cantidad": 3,
          "precio": 89.99,
          "_id": "655a81ee548fa1a12e94ec7d"
        }
      ],
      "total": 269.96999999999997,
      "fecha": "2023-11-19T21:45:18.226Z",
      "created_at": "2023-11-19T21:45:18.228Z",
      "updated_at": "2023-11-19T21:45:18.228Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 2
      },
      "_id": "655a821c548fa1a12e94ec83",
      "code": 5,
      "items": [
        {
          "code": 2,
          "cantidad": 1,
          "precio": 49.99,
          "_id": "655a821c548fa1a12e94ec84"
        },
        {
          "code": 5,
          "cantidad": 1,
          "precio": 89.99,
          "_id": "655a821c548fa1a12e94ec85"
        },
        {
          "code": 1,
          "cantidad": 2,
          "precio": 99.99,
          "_id": "655a821c548fa1a12e94ec86"
        }
      ],
      "total": 339.96,
      "fecha": "2023-11-18T22:38:10.170Z",
      "created_at": "2023-11-19T21:46:04.569Z",
      "updated_at": "2023-11-19T21:46:04.569Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 2
      },
      "_id": "655a82ff5136884c47d1b6ac",
      "code": 6,
      "items": [
        {
          "code": 2,
          "cantidad": 3,
          "precio": 49.99,
          "_id": "655a82ff5136884c47d1b6ad"
        },
        {
          "code": 5,
          "cantidad": 1,
          "precio": 89.99,
          "_id": "655a82ff5136884c47d1b6ae"
        }
      ],
      "total": 239.95999999999998,
      "fecha": "2023-11-19T21:49:51.084Z",
      "created_at": "2023-11-19T21:49:51.098Z",
      "updated_at": "2023-11-19T21:49:51.098Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 2
      },
      "_id": "655a89cdc94a2bf2d4308e03",
      "code": 7,
      "items": [
        {
          "code": 2,
          "cantidad": 3,
          "precio": 49.99,
          "_id": "655a89cdc94a2bf2d4308e04"
        },
        {
          "code": 5,
          "cantidad": 1,
          "precio": 89.99,
          "_id": "655a89cdc94a2bf2d4308e05"
        }
      ],
      "total": 239.95999999999998,
      "fecha": "2023-11-19T22:18:53.872Z",
      "created_at": "2023-11-19T22:18:53.879Z",
      "updated_at": "2023-11-19T22:18:53.879Z",
      "__v": 0
    },
    {
      "cliente": {
        "codUser": 2
      },
      "_id": "655aa1d99135d5317eb1a011",
      "code": 8,
      "items": [
        {
          "code": 5,
          "cantidad": 3,
          "precio": 89.99
        },
        {
          "code": 6,
          "cantidad": 1,
          "precio": 129.99
        }
      ],
      "total": 399.96,
      "fecha": "2023-11-20T00:01:29.761Z",
      "created_at": "2023-11-20T00:01:29.768Z",
      "updated_at": "2023-11-20T00:01:29.768Z",
      "__v": 0
    }
  ]
  const { productos, borrarProducto,crearProducto,actualizarProducto } = useProductos({ id: "", type: "getAll" })

  return (
    <>

     <OrdenesTable misOrdenes={misOrdenes} />    
    </>

  )
}
