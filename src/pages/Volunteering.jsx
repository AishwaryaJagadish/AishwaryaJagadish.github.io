import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Paper, Box, Chip, Link } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CodeIcon from '@mui/icons-material/Code';

const Volunteering = () => {
  const volunteering = [
    {
      title: "Team Everest NGO",
      role: "Curriculum Writer",
      description: "Creating engaging and effective curriculum materials, impacting over 500 children by providing access to quality education in underserved communities.",
      skills: ["Education", "Community Service", "Curriculum Development"],
      link: "https://drive.google.com/file/d/1yxmfwKpHAB-IrhUyZAXLZquANgW-XsES/view"
    },
    {
      title: "Team Everest NGO",
      role: "Tree Plantation Volunteer",
      description: "Planted over 100 trees in the local community to promote environmental sustainability and improve air quality on World Earth Day.",
      skills: ["Environmental Conservation", "Community Service", "Sustainability"],
      link: "https://drive.google.com/file/d/12w4ot5M9myQc2-_c6P9zm5DSrc9Fmq8z/view"
    },
    {
      title: "Team Everest NGO",
      role: "Urban Gardening Volunteer",
      description: "Contributed to the development of a community garden, providing fresh produce to local families and promoting sustainable living.",
      skills: ["Community Service", "Sustainability"],
      link: "https://drive.google.com/file/d/1krlbLbhHx0rRHOTJ_y7KfDGMI5CckL5h/view"
    },
    {
      title: "Muskurahat Foundation",
      role: "Fundraising Volunteer",
      description: "Raised funds for underprivileged children in the local community to provide them with access to quality education and healthcare.",
      skills: ["Fundraising", "Community Service"],
      link: "https://drive.google.com/file/d/1Wm1W2_oNbMbUbFFWgq8NfpHAacbvOGx8/view"
    },
    {
        title: "Marpu Foundation",
        role: "Human Resource Volunteer",
        description: "Developed and implemented a comprehensive HR strategy to improve the overall efficiency and effectiveness of the organization.",
        skills: ["Human Resources", "Community Service"],
        link: "https://drive.google.com/file/d/1msqw2PttcLfgUXyo96G26R-IXDU14Rf9/view"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Volunteering
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* First row - 3 cards */}
        {volunteering.slice(0, 3).map((vol, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 182, 193, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    border: '1px solid rgba(255, 182, 193, 0.3)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VolunteerActivismIcon sx={{ color: '#ffb6c1', mr: 1 }} />
                  <Typography variant="h6" color="primary">
                    {vol.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {vol.role}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
                  {vol.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {vol.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      icon={<CodeIcon />}
                      sx={{
                        bgcolor: 'rgba(255, 182, 193, 0.2)',
                        color: '#ffb6c1',
                        border: '1px solid #ffb6c1',
                        '&:hover': {
                          bgcolor: 'rgba(255, 182, 193, 0.3)',
                        },
                      }}
                    />
                  ))}
                </Box>
                {vol.link && (
                  <Link
                    href={vol.link}
                    target="_blank"
                    sx={{
                      color: '#ffb6c1',
                      textDecoration: 'none',
                      display: 'block',
                      mt: 2,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    View Certificate →
                  </Link>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
        
        {/* Second row - 2 cards, centered */}
        {volunteering.slice(3).map((vol, index) => (
          <Grid item xs={12} md={4} key={index + 3} sx={{ 
            '&:first-of-type': {
              ml: { md: 4 }  // Add margin to the first card of second row on medium+ screens
            }
          }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: (index + 3) * 0.2 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 182, 193, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    border: '1px solid rgba(255, 182, 193, 0.3)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <VolunteerActivismIcon sx={{ color: '#ffb6c1', mr: 1 }} />
                  <Typography variant="h6" color="primary">
                    {vol.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {vol.role}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
                  {vol.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {vol.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      icon={<CodeIcon />}
                      sx={{
                        bgcolor: 'rgba(255, 182, 193, 0.2)',
                        color: '#ffb6c1',
                        border: '1px solid #ffb6c1',
                        '&:hover': {
                          bgcolor: 'rgba(255, 182, 193, 0.3)',
                        },
                      }}
                    />
                  ))}
                </Box>
                {vol.link && (
                  <Link
                    href={vol.link}
                    target="_blank"
                    sx={{
                      color: '#ffb6c1',
                      textDecoration: 'none',
                      display: 'block',
                      mt: 2,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    View Certificate →
                  </Link>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Volunteering; 