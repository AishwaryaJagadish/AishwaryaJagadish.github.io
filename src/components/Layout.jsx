import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Experience', path: '/experience' },
    { text: 'Projects', path: '/projects' },
    { text: 'Publications', path: '/publications' },
    { text: 'Skills', path: '/skills' },
    { text: 'Education', path: '/education' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ParticlesBg type="cobweb" bg={true} />
      <AppBar position="fixed" sx={{ background: 'rgba(44, 62, 80, 0.95)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Aishwarya Jagadish
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {menuItems.map((item) => (
                <StyledLink key={item.text} to={item.path}>
                  {item.text}
                </StyledLink>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              component={Link} 
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container sx={{ mt: 10, mb: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout; 