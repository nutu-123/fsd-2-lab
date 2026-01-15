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
  Chip
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

function About() {
  const personalInfo = [
    { icon: <PersonIcon />, label: 'Name', value: 'Nutan Phadtare' },
    { icon: <EmailIcon />, label: 'Email', value: '23BAI71460@cuchd.in' },
    { icon: <SchoolIcon />, label: 'Education', value: 'Bachelor of Engineering' },
    { icon: <LocationIcon />, label: 'Location', value: 'Chandigarh, India' }
  ];

  const interests = [
    'Full Stack Development',
    'AI & Machine Learning',
    'Cloud Computing',
    'Open Source',
    'UI/UX Design',
    'Problem Solving'
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
        About Me
      </Typography>

      <Grid container spacing={6}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <Box textAlign="center">
            <Avatar
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 3,
                bgcolor: 'primary.main',
                fontSize: '4rem',
                boxShadow: 3
              }}
            >
              NP
            </Avatar>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Nutan Phadtare
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Passionate about creating innovative solutions and learning new technologies
            </Typography>
          </Box>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Personal Information */}
            <Grid item xs={12} lg={6}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ mr: 1 }} />
                    Personal Information
                  </Typography>
                  <List>
                    {personalInfo.map((info, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ color: 'primary.main', minWidth: 40 }}>
                          {info.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={<Typography variant="body2" color="text.secondary">{info.label}</Typography>}
                          secondary={<Typography variant="body1" sx={{ fontWeight: 'medium' }}>{info.value}</Typography>}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Interests */}
            <Grid item xs={12} lg={6}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <CodeIcon sx={{ mr: 1 }} />
                    Interests & Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {interests.map((interest, index) => (
                      <Chip
                        key={index}
                        label={interest}
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 'medium' }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* About Description */}
            <Grid item xs={12}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Professional Summary
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                    I am a dedicated full-stack developer with a strong foundation in modern web technologies.
                    My expertise includes building responsive web applications using React, Node.js, and various
                    database technologies. I have experience in developing AI-powered applications and creating
                    user-friendly interfaces that provide excellent user experiences.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                    I am passionate about writing clean, maintainable code and staying up-to-date with the latest
                    industry trends and best practices. I enjoy solving complex problems and collaborating with
                    teams to deliver high-quality software solutions.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Beyond coding, I actively contribute to the developer community through open-source projects
                    and continuous learning. I'm always eager to take on new challenges and expand my skill set
                    in emerging technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
