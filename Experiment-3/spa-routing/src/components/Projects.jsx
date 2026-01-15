import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Box,
  Avatar,
  Divider
} from '@mui/material';
import {
  Code as CodeIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  SmartToy as AIIcon,
  TravelExplore as TravelIcon,
  WbSunny as WeatherIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Talk AI',
      description: 'A full-stack chat application built with React and Node.js featuring multi-provider AI integration.',
      icon: <AIIcon sx={{ fontSize: 40 }} />,
      features: [
        'Developed a multi-provider AI chat assistant supporting multiple LLM APIs',
        'Integrated Gemini, OpenAI, and Cohere AI for dynamic response generation',
        'Designed a scalable frontend-backend architecture for real-time interactions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'OpenAI API', 'Cohere API'],
      color: '#1976d2'
    },
    {
      id: 2,
      title: 'Freelancing in Tour and Travel Industry',
      description: 'A collaborative itinerary management tool for teams and individuals with modern web design.',
      icon: <TravelIcon sx={{ fontSize: 40 }} />,
      features: [
        'Created customized travel itineraries to assist travelers in planning trips',
        'Designed user-friendly web pages to showcase destinations and travel plans',
        'Improved user experience by organizing travel goals and schedules effectively'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: '#2e7d32'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive visualizations.',
      icon: <WeatherIcon sx={{ fontSize: 40 }} />,
      features: [
        'Current weather conditions with real-time updates',
        '7-day weather forecast with detailed predictions',
        'Location search and geolocation integration',
        'Weather maps and radar visualization',
        'Weather alerts and warnings system',
        'Customizable units and themes'
      ],
      technologies: ['React', 'OpenWeatherMap API', 'Chart.js', 'CSS3'],
      color: '#ed6c02'
    }
  ];

  const getTechColor = (tech) => {
    const colors = {
      'React': '#61dafb',
      'Node.js': '#339933',
      'MongoDB': '#47a248',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'JavaScript': '#f7df1e',
      'Chart.js': '#ff6384',
      'CSS3': '#1572b6'
    };
    return colors[tech] || '#757575';
  };

  return (
    <Container maxWidth="lg" className="py-5">
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          My Projects
        </Typography>
        <Typography variant="h6" color="text.secondary" className="mb-4">
          Showcasing innovative solutions built with modern technologies
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card
              elevation={8}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                },
                borderRadius: 3,
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    width: 60,
                    height: 60
                  }}
                >
                  {project.icon}
                </Avatar>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: project.color, mb: 2 }}
                >
                  Key Features
                </Typography>

                <Box sx={{ mb: 3 }}>
                  {project.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: project.color,
                          mr: 1,
                          mt: 0.2,
                          fontSize: 18
                        }}
                      />
                      <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Technologies Used
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: getTechColor(tech),
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: getTechColor(tech),
                          opacity: 0.8
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
