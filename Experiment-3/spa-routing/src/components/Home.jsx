import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button
} from '@mui/material';
import {
  Code as CodeIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  School as SchoolIcon
} from '@mui/icons-material';

function Home() {
  const skills = [
    'React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB',
    'Express.js', 'Python', 'Git', 'REST APIs', 'UI/UX Design'
  ];

  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Full Stack Developer',
      description: 'Building modern web applications with cutting-edge technologies'
    },
    {
      icon: <WebIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      title: 'Frontend Specialist',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#ed6c02' }} />,
      title: 'Backend Developer',
      description: 'Developing robust server-side applications and APIs'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 3,
              bgcolor: 'rgba(255,255,255,0.2)',
              fontSize: '3rem'
            }}
          >
            NP
          </Avatar>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Nutan's Portfolio
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Passionate Full Stack Developer crafting innovative digital solutions
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: '#667eea',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Explore My Work
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              I'm a dedicated full-stack developer with a passion for creating innovative web applications.
              My expertise spans across modern technologies including React, Node.js, and cloud platforms.
              I love solving complex problems and building user-centric solutions that make a difference.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    color="primary"
                    sx={{ fontWeight: 'medium' }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Highlights Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
            What I Do
          </Typography>
          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {highlight.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {highlight.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
