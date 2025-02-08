import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, CardContent, Box, Chip } from '@mui/material';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const Education = () => {
  const education = [
    {
      school: "University of Southern California",
      degree: "Masters in Computer Science",
      duration: "August 2024 - Present",
      location: "Los Angeles, California",
      courses: [
        "Machine Learning",
        "Deep Learning and its Applications",
        "Foundations of Artificial Intelligence",
        "Natural Language Processing"
      ]
    },
    {
      school: "Dayananda Sagar College of Engineering",
      degree: "Bachelors in Computer Science and Engineering",
      gpa: "CGPA: 9.77",
      duration: "December 2020 - May 2024",
      location: "Bangalore, Karnataka",
      courses: [
        "Data Structures",
        "Algorithms",
        "Database Management",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
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
        Education
      </Typography>

      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ 
                  mb: 2,
                  '&:hover': { 
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      {edu.school}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    {edu.specialization && (
                      <Typography variant="subtitle2" color="textSecondary">
                        Specialization: {edu.specialization}
                      </Typography>
                    )}
                    {edu.gpa && (
                      <Typography variant="subtitle2" color="textSecondary">
                        {edu.gpa}
                      </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      {edu.duration} | {edu.location}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Key Courses:
                      </Typography>
                      {edu.courses.map((course) => (
                        <Chip
                          key={course}
                          label={course}
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
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default Education; 