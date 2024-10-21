// Product.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const Product = ({ product, onAddToCart }) => (
    <Card>
        <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
        />
        <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
            <Typography variant="body1">${product.price}</Typography>
            <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
                Add to Cart
            </Button>
        </CardContent>
    </Card>
);

export default Product;
