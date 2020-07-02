import React from 'react'
import ReactDOM from 'react-dom'

function Products(products) {
    return [
        <label>Productid:{products.id}</label>,
        <label>Productid:{products.name}</label>,
        <label>Productid:{products.cost}</label>
     

    ]

    
}

export default Products;