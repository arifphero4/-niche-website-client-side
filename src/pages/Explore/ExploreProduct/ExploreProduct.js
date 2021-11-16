import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ExploreProducts from '../ExploreProducts/ExploreProducts';



const ExploreProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addToProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    return (
        <Container>
            <Grid container spacing={2}>
               {
                   products.map(product => <ExploreProducts
                        key={product.id}
                        product={product}
                   >      
                   </ExploreProducts>)
               }

            </Grid>
        </Container>
    );
};

export default ExploreProduct;