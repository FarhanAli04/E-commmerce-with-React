import React, { useState } from 'react';
import PNG from '../assests/images.jpeg';
import PNG2 from '../assests/grand-01-men-mesh-sneakers-with-jeans-os.jpg'
import PNG3 from '../assests/ab27cfb276745cf452a4c16d32fd2dd8.jpg_960x960q80.jpg_.webp'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Grid,
    Grid2,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Product from './Product';

const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: PNG },
    { id: 2, name: 'Product 2', price: 29.99,  image: PNG2 }, 
    { id: 3, name: 'Product 3', price: 39.99,  image: PNG3 },  
];

export default function MUI() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My E-commerce Store
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List sx={{ width: 250 }}>
                    {['Home', 'Products', 'Cart', 'About'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Container sx={{ mt: 4 }}>
                <Grid2 container spacing={3}>
                    {products.map((product) => (
                        <Grid2 item xs={12} sm={6} md={4} key={product.id}>
                            <Product product={product} onAddToCart={addToCart} />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </div>
    );
}
