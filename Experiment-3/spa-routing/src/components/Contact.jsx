import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon
} from '@mui/icons-material';

function Contact() {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ color: '#1976d2' }} />,
      label: 'Email',
      value: '23BAI71460@cuchd.in',
      link: 'mailto:23BAI71460@cuchd.in'
    },
    {
      icon: <PhoneIcon sx={{ color: '#2e7d32' }} />,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXX'
    },
    {
      icon: <LocationIcon sx={{ color: '#ed6c02' }} />,
      label: 'Location',
      value: 'Chandigarh, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/nutan-phadtare',
      color: '#0077b5'
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      url: 'https://github.com/nutan-phadtare',
      color: '#333'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          mb: 6,
          background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Get In Touch
      </Typography>

      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Contact Information
              </Typography>

              <List sx={{ mb: 4 }}>
                {contactInfo.map((contact, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 2 }}>
                    <ListItemIcon sx={{ minWidth: 50 }}>
                      <Avatar sx={{ bgcolor: 'rgba(25, 118, 210, 0.1)' }}>
                        {contact.icon}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h6" sx={{ fontWeight: 'medium' }}>{contact.label}</Typography>}
                      secondary={
                        <Typography
                          variant="body1"
                          component="a"
                          href={contact.link}
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          {contact.value}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Connect With Me
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    startIcon={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: social.color,
                      color: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: `${social.color}15`
                      }
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Form/Message */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                Let's Work Together
              </Typography>

              <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.7 }}>
                I'm always interested in new opportunities, whether it's a full-time position,
                freelance project, or collaboration on exciting ideas. Feel free to reach out
                if you'd like to discuss potential projects or just want to connect!
              </Typography>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SendIcon />}
                  href="mailto:23BAI71460@cuchd.in"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1565c0 30%, #1976d2 90%)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>

              <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  Response Time
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I typically respond to messages within 24 hours. For urgent inquiries,
                  please call or use the contact form if available.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 8, py: 4, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 Nutan Phadtare. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Built with ❤️ using React & Material UI
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
