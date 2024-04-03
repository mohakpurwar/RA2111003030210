import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyData = [
      { name: 'Product 1', company: 'Company A', category: 'Category 1', price: 50, rating: 4.5, discount: 10, availability: 'In stock' },
      { name: 'Product 2', company: 'Company B', category: 'Category 2', price: 80, rating: 4.2, discount: 15, availability: 'Out of stock' },
      // Add more dummy data as needed
    ];
    setProducts(dummyData);
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;