import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image:'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/02/propose-1517999844.webp'},
    { id: 2, name: 'MacBook', description: 'Apple MacBook.', price: '$15', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1920px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg'},
]

const Products = () => {
    return (
        <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products