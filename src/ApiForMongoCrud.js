import React from 'react'
import axios from 'axios'

const ApiForMongoCrud = () => {
    const payload = {
        'item': 'headphones1',
        'cost': '2000',
        'qty': '200'

    }
    //axios.post('https://localhost:44354/api/ProductApi/', payload).then((response) => {
    //    console.log(response.data)
    //})

    axios.get('https://api.github.com/users/mapbox').then(response => {
        console.log(response.data)
    })
        
    return (
        <h1>Presenting you the details...</h1>
    )
}
export default ApiForMongoCrud;