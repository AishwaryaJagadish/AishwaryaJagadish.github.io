import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Paper, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Awards = () => {
  const awards = [
    {
      title: "Certification of Merit",
      organization: "Dayananda Sagar College of Engineering",
      date: "2024",
      description: "Silver Medalist in the Computer Science Department for the 2020-2024 Bachelor of Engineering Cohort."
    },
    {
      title: "Tree Plantation in My Name",
      organization: "Hacktoberfest 2023",
      date: "2023",
      description: "A Markhamia lutea tree was planted as a token of appreciation for completing Hacktoberfest successfully."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Awards & Achievements
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {awards.map((award, index) => (
          <Grid item xs={12} md={6} key={index}>
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
                  <EmojiEventsIcon sx={{ color: '#ffb6c1', mr: 1 }} />
                  <Typography variant="h6" color="primary">
                    {award.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {award.organization}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {award.date}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892b0' }}>
                  {award.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Awards; 