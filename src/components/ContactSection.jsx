import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the email using a service
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box id="contact" sx={{ py: 6, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Get In Touch
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            paragraph
            sx={{ 
              fontStyle: 'italic',
              color: 'primary.main',
              mb: 4
            }}
          >
            "Every great collaboration starts with a conversation"
          </Typography>
          
          <Paper 
            component={motion.form}
            onSubmit={handleSubmit}
            whileHover={{ scale: 1.02 }}
            sx={{ 
              mt: 4, 
              p: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 3 }}
            >
              Send Message
            </Button>
          </Paper>
        </motion.div>
      </Container>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert severity="success" onClose={() => setOpen(false)}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection; 