import React from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Footer = () => {
    const year = new Date().getFullYear();

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://craigtrotman.com/">
                    Craig Trotman
                </Link>{' '}
                {new Date().getFullYear()}.
            </Typography>
        );
    }

    return (
        // <footer><p>copyright © {year}</p></footer>
        <Container maxWidth="md">
            <Box sx={{ my: 10 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {/* Add info here */}
                </Typography>
                
                <Copyright />
            </Box>
        </Container>
    );
};

export default Footer;

// function Footer(){
//     const year = new Date().getFullYear();
//     return (
//         <footer><p>copyright © {year}</p></footer>
//     );
// }

// export default Footer;