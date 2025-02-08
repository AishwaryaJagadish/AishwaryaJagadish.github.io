import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Paper, Box, Link } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Data Analyst",
      organization: "Google",
      date: "2023",
      description: "Exploring cutting-edge computational models in simulation labs to drive innovation.",
      link: "https://drive.google.com/file/d/1GPAVowmIz5wZaHGMKXfcte2amuHL0wb-/view"
    },
    {
      title: "Machine Learning for All",
      organization: "University of London",
      date: "2022",
      description: "Understood the basics of machine learning and how its applications.",
      link: "https://drive.google.com/file/d/1-qBHVr-ordtwsa03R0vHusiPkq5rIyhC/view"
    },
    {
      title: "Data Science and Beyond",
      organization: "University of Pennsylvania",
      date: "2021",
      description: "Learned the basics of data science and how to use it to solve real-world problems.",
      link: "https://drive.google.com/file/d/15EqnvtQhZg8yKoXb2Z7tj4Zx7vGXYlJv/view"
    },
    {
      title: "Software Engineering Job Simulation",
      organization: "Goldman Sachs",
      date: "2024",
      description: "Simulated a software engineering job interview and completed a coding challenge.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_Z7mrDqTKZivyu8MvS_1728588174729_completion_certificate.pdf"
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      organization: "Walmart Global Tech",
      date: "2024",
      description: "Worked on a real-world project and completed a coding challenge.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_Z7mrDqTKZivyu8MvS_1728587461969_completion_certificate.pdf"
    },
    {
      title: "Foundations of User Experience (UX) Design",
      organization: "Google",
      date: "2022",
      description: "Learned the basics of UX design and how to create user-friendly and efficient designs.",
      link: "https://drive.google.com/file/d/1ABx_9h4Yv8el9ZUqGfzcdqTwD6PUd7d6/view"
    },
    {
        title: "Introduction to Big Data",
        organization: "University of California, San Diego",
        date: "2023",
        description: "Explored the basics of big data and its applications.",
        link: "https://drive.google.com/file/d/1BPm0DZHkfMtpzkzCl1qYbkVt31ehJbaK/view"
    },
    {
        title: "Introduction to Cyber Security",
        organization: "IBM",
        date: "2022",
        description: "Understood the basics of cyber security and how to protect against cyber attacks.",
        link: "https://drive.google.com/file/d/1JzMh5KB9JYdp0C6FxLKoT7vxnXOVn63B/view"
    },
    {
        title: "Introduction to Blockchain",
        organization: "NASSCOM",
        date: "2023",
        description: "Learned the basics of blockchain technology and its applications.",
        link: "https://drive.google.com/file/d/13A9wW0ZD3uh_aH2du2XwPSufLDmfVP2W/view"
    },
    {
      title: "Fine-Tune Your LLMs",
      organization: "LinkedIn Learning",
      date: "2024",
      description: "Explored the latest advancements in LLMs and how to fine-tune them for specific tasks.",
      link: "https://drive.google.com/file/d/1jO8foeSOp7FHXlgwiQl20UyAre9-ZdbD/view"
    },
    {
        title: "Creating GPTs with Actions",
        organization: "LinkedIn Learning",
        date: "2024",
        description: "Worked on a real-world project and the basics of creating GPTs with Actions.",
        link: "https://drive.google.com/file/d/1Bo-rZeUI93W52MOlt9VsO-wwhNvyRHt7/view"
    },
    {
        title: "Git Essential Training",
        organization: "LinkedIn Learning",
        date: "2024",
        description: "Learned the basics of Git and how to use it to manage code.",
        link: "https://drive.google.com/file/d/1FP1eiXFu3Bj55AfAVX950MDbBhV4uKvs/view"
    },
    {
        title: "Prompt Engineering with Gemini",
        organization: "LinkedIn Learning",
        date: "2024",
        description: "Got hands on practise with the Gemini models and the basics of prompt engineering.",
        link: "https://drive.google.com/file/d/147T0q-QZ5KblrNFqVjsvARWtKCmnJEuQ/view"
      },
      {
          title: "LLM Foundations: Building Applications for Enterprises",
          organization: "LinkedIn Learning",
          date: "2024",
          description: "Enterprise level LLM applications and how to use them to tackle real-world problems.",
          link: "https://drive.google.com/file/d/1o7qcd2MW8wwCizvBOWhD3dKW5vaZo-0k/view"
      },
      {
          title: "Generative AI and Open Source Models",
          organization: "LinkedIn Learning",
          date: "2024",
          description: "Solved a real-world problem and hands on practise of the hugging face models.",
          link: "https://drive.google.com/file/d/1jTKDP-rDYqPATMpxqV65a6BMiLUjko0r/view"
      },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Certifications
      </Typography>

      <Grid container spacing={3}>
        {certifications.map((cert, index) => (
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
                  <WorkspacePremiumIcon sx={{ color: '#ffb6c1', mr: 1 }} />
                  <Typography variant="h6" color="primary">
                    {cert.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {cert.organization}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {cert.date}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8892b0', mb: 2 }}>
                  {cert.description}
                </Typography>
                <Link
                  href={cert.link}
                  target="_blank"
                  sx={{
                    color: '#ffb6c1',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  View Certificate →
                </Link>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Certifications; 