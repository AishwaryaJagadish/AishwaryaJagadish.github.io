import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const experiences = [
    {
      title: "University of Southern California - Research Assistant",
      duration: "January 2025 - Present",
      location: "Los Angeles, California",
      description: [
        "Working on early detection of Alzheimer's disease using MRI-based neuroimaging analysis and machine learning to identify neurodegenerative biomarkers.",
        "Leveraging brain imaging analysis to detect key biomarkers and enable accurate classification of disease progression through advanced feature extraction."
      ],
      skills: ["Neuroimaging", "Machine Learning", "Alzheimer's Disease", "MRI Analysis"]
    },
    {
      title: "Transo - Project Intern",
      duration: "November 2023 - February 2024",
      location: "Bangalore, Karnataka",
      description: [
        "Worked as a Project Intern at TRANSO, focusing on real-time data analysis to enhance transportation efficiency and optimize logistics operations.",
        "Contributed to developing optimization and logistics analysis models, applying advanced techniques to improve the performance and cost-effectiveness of transportation systems."
      ],
      skills: ["Python", "Optimization", "Data Analysis", "Logistics"]
    },
    {
        title: "Anand Diagnostics Laboratory - Intern",
        duration: "September 2023 - March 2024",
        location: "Bangalore, Karnataka",
        description: [
          "Worked as an Intern at Anand Diagnostic Laboratory, using image segmentation techniques to identify the genus and species of bacteria and enhancing diagnostic accuracy.",
          "Leveraged advanced tools and techniques to streamline microbiological research and diagnosis and improving the efficiency of bacterial identification in clinical settings."
        ],
        skills: ["Deep Learning", "Image Processing", "CNNs", "Microbiology"]
    },
    {
      title: "CSIR - National Aerospace Laboratories - Research Intern",
      duration: "October 2023 - November 2023",
      location: "Bangalore, Karnataka",
      description: [
        "Contributed to research at CSIR - NAL, focusing on anomaly detection techniques for improving system reliability and performance, particularly in braking systems.",
        "Conducted in-depth analysis of various time series forecasting algorithms, evaluating their effectiveness for predicting system behaviors and enhancing the accuracy of predictive models."
      ],
      skills: ["Time Series Analysis", "Machine Learning", "Research", "Anomaly Detection"]
    },
    {
      title: "Open Source Contributor @ Hacktoberfest",
      duration: "October 2023",
      location: "Remote",
      description: [
        "Actively participated in Hacktoberfest to contribute meaningful code and to the community, fostering innovation and learning in the process.",
        "Collaborated with global developers through pull requests and code reviews"
      ],
      skills: ["Open Source", "Git", "Python", "JavaScript", "Machine Learning"]
    },
    {
      title: "Brane Enterprises - Java Developer Intern",
      duration: "March 2023 - June 2023",
      location: "Bangalore, Karnataka",
      description: [
        "Developed a project at Brane Enterprises Pvt Ltd by leveraging Kafka for real-time data streaming, Redis for efficient caching and Spring Boot to build robust REST APIs, enhancing backend operations for seamless performance.",
        "Gained hands-on experience with Docker for containerization and utilized Grafana dashboards to monitor and manage tickets, enhancing project tracking and system efficiency."
      ],
      skills: ["Spring Boot", "Kafka", "Microservices", "Grafana", "MongoDB", "Elasticsearch"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 8, textAlign: 'center' }}>
        Experience
      </Typography>

      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {exp.duration} | {exp.location}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                      {exp.description.map((desc, i) => (
                        <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                          • {desc}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {exp.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
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

export default Experience; 