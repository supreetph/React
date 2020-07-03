import React from 'react'
import axios from 'axios'


const ApiForMongoCrud = () => {
    axios.get('https://localhost:44354/Product').then(response => {
        console.log(response.data)
    })
       ;
    return (
        <h1>Product Details in MongoDB</h1>
    )
}
export default ApiForMongoCrud;