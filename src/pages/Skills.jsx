import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Paper, Box, LinearProgress, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 75 },
        { name: "C++", level: 80 },
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Natural Language Processing", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "Time Series Analysis and Forecasting", level: 85 },
        { name: "Reinforcement Learning", level: 80 }
      ]
    },
    {
      category: "Data Science & Analytics",
      skills: [
        { name: "Numpy", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "Scikit-learn", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "GCP", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 90 },
        { name: "Linux/Unix", level: 80 },
        { name: "Docker", level: 80 }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Technical Skills
      </Typography>

      <Grid container spacing={3}>
        {skillCategories.map((category, categoryIndex) => (
          <Grid item xs={12} md={6} key={categoryIndex}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2 }}
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
                <Typography variant="h6" color="primary" gutterBottom>
                  {category.category}
                </Typography>
                {category.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} sx={{ mb: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      mb: 1.5,
                      alignItems: 'center' 
                    }}>
                      <Chip
                        label={skill.name}
                        size="small"
                        icon={<CodeIcon />}
                        sx={{
                          bgcolor: 'rgba(255, 182, 193, 0.05)',
                          color: '#ffb6c1',
                          border: '2px solid #ffb6c1',
                          borderRadius: '12px',
                          fontWeight: 600,
                          px: 2,
                          py: 1.5,
                          fontSize: '0.9rem',
                          letterSpacing: '0.5px',
                          '&:hover': {
                            bgcolor: 'rgba(255, 182, 193, 0.15)',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 4px 8px rgba(255, 182, 193, 0.2)',
                            transition: 'all 0.3s ease-in-out'
                          },
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#ffb6c1',
                          fontWeight: 500,
                          minWidth: '45px',
                          textAlign: 'right'
                        }}
                      >
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 182, 193, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 3,
                          backgroundColor: '#ffb6c1',
                          backgroundImage: 'linear-gradient(90deg, #ffb6c1, #ff69b4)'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Skills; 