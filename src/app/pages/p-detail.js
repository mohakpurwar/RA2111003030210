// pages/product-detail.js
import { useRouter } from 'next/router';
import { Container, Typography } from '@mui/material';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;


  return (
    <Container>
      <Typography variant="h4">Product Detail</Typography>
      <Typography>Product ID: {productId}</Typography>
    </Container>
  );
};

export default ProductDetail;
