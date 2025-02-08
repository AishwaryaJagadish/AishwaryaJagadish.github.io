import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import { SnackbarProvider } from 'notistack';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffb6c1', // Baby pink
        light: '#ffd1d9',
        dark: '#ff9aa8',
      },
      secondary: {
        main: '#ff69b4', // Hot pink
        light: '#ff8dc7',
        dark: '#ff1493',
      },
      background: {
        default: '#0a192f', // Dark navy
        paper: '#112240', // Slightly lighter navy
      },
      text: {
        primary: '#e6f1ff',
        secondary: '#8892b0',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h1: { 
        fontWeight: 800,
        color: '#e6f1ff',
      },
      h2: { 
        fontWeight: 700,
        color: '#e6f1ff',
      },
      h3: { 
        fontWeight: 700,
        color: '#e6f1ff',
      },
      h4: { 
        fontWeight: 600,
        color: '#e6f1ff',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    }
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <ScrollToTop />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          opacity: 0.8,
          bgcolor: 'rgba(255, 182, 193, 0.2)',
          color: '#ffb6c1',
          border: '1px solid #ffb6c1',
          '&:hover': {
            opacity: 1,
            bgcolor: 'rgba(255, 182, 193, 0.3)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default App; 