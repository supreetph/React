import React from 'react'
import ReactDOM from 'react-dom'

function Products(products) {
    return [

        <label> ProductId : {products.id}</label>,
        <label> Product Name : {products.name}</label>,
        <label> Product Cost : {products.cost}</label>,
        <label> Product Quantity : {products.quantity}</label>
    ]


    
}

export default Products;