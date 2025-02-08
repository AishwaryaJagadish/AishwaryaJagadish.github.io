import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Paper, Box, Chip } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';

const Organizations = () => {
  const organizations = [
    {
      title: "USC Society of Women Engineers (SWE)",
      role: "Member",
      duration: "Sep 2024 - Present",
      description: [
        "Collaborating with members and industry professionals to foster leadership and community involvement to support women in STEM through events and mentoring."
      ],
      skills: ["Networking", "Community Building", "Women in STEM"]
    },
    {
      title: "Artificial Intelligence Los Angeles (AILA)",
      role: "Member",
      duration: "Dec 2024 - Present",
      description: [
        "Participating in hands-on AI projects at AI LA, leveraging skills to tackle real-world challenges and enhance technical and collaborative problem-solving abilities."
      ],
      skills: ["Networking", "Community Building", "Artificial Intelligence"]
    },
    {
      title: "Viterbi Graduate Mentorship Program",
      role: "Mentor",
      duration: "Jan 2025 - Present",
      description: [
        "Mentoring incoming students and guiding them in course selection, project development and ensuring a supportive environment that fosters both academic and personal growth."
      ],
      skills: ["Leadership", "Mentorship", "Community Building"]
    },
    {
        title: "Mindful USC",
        role: "Member",
        duration: "Jan 2025 - Present",
        description: [
          "Collaborating with students and professionals to create resources and initiatives focused on mindfulness and emotional well-being."
        ],
        skills: ["Networking", "Community Building", "Mental Health", "Wellness"]
      },
      {
        title: "Graduates Rising in Data Science (GRIDS)",
        role: "Executive Board Member",
        duration: "Dec 2025 - Present",
        description: [
          "Working with a team of 10+ members to organize events and workshops to help students transition into data science careers."
        ],
        skills: ["Leadership", "Community Building", "Data Science"]
      }
  ];

  // Split organizations into rows (2-2-1 pattern)
  const firstRow = organizations.slice(0, 2);  // First 2 orgs
  const secondRow = organizations.slice(2, 4); // Next 2 orgs
  const lastOrg = organizations.slice(4, 5);   // Last org centered

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Organizations
      </Typography>

      {/* First row - 2 organizations */}
      <Grid container spacing={6} sx={{ mb: 6 }} justifyContent="space-evenly">
        {firstRow.map((org, index) => (
          <Grid item xs={12} md={5.5} key={index}>
            <OrganizationCard org={org} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Second row - 2 organizations */}
      <Grid container spacing={6} sx={{ mb: 6 }} justifyContent="space-evenly">
        {secondRow.map((org, index) => (
          <Grid item xs={12} md={5.5} key={index}>
            <OrganizationCard org={org} index={index + 2} />
          </Grid>
        ))}
      </Grid>

      {/* Last row - 1 organization centered */}
      <Grid container justifyContent="center">
        {lastOrg.map((org, index) => (
          <Grid item xs={12} md={5.5} key={index} sx={{ 
            display: 'flex',
            justifyContent: 'center',
            maxWidth: { md: '48%' }  // Limit width to match other cards
          }}>
            <Box sx={{ width: '100%' }}>  {/* Wrapper to constrain width */}
              <OrganizationCard org={org} index={index + 4} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

// Helper component for organization card
const OrganizationCard = ({ org, index }) => (
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
        width: '100%',
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
        <GroupsIcon sx={{ color: '#ffb6c1', mr: 1 }} />
        <Typography variant="h6" color="primary">
          {org.title}
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        {org.role}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {org.duration}
      </Typography>
      <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
        {org.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {org.skills.map((skill) => (
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
    </Paper>
  </motion.div>
);

export default Organizations; 