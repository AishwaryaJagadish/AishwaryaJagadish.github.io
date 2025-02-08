import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Typography, useScrollTrigger, Slide, Tooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'volunteering', label: 'Volunteering' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = 100; // Slightly more than header height for better detection

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - headerOffset &&
            scrollPosition < offsetTop + offsetHeight - headerOffset
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <Slide appear={false} direction="down" in={true}>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(10, 25, 47, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
          zIndex: 1200 // Ensure header stays above everything
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffb6c1',
                fontWeight: 'bold',
                letterSpacing: 1
              }}
            >
              AJ
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 3 }}>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(section.id)}
                  sx={{
                    color: activeSection === section.id ? '#ffb6c1' : '#8892b0',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === section.id ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: '0',
                      backgroundColor: '#ffb6c1',
                      transition: 'width 0.3s ease-in-out'
                    },
                    '&:hover': {
                      color: '#ffb6c1',
                      '&::after': {
                        width: '100%'
                      }
                    }
                  }}
                >
                  {section.label}
                </Button>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="GitHub">
              <IconButton 
                component="a"
                href="https://github.com/AishwaryaJagadish"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton 
                component="a"
                href="https://www.linkedin.com/in/aishwarya-jagadish-28794b209/"
                target="_blank"
                sx={{ color: 'primary.main' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header; 