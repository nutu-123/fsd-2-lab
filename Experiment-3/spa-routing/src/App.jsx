import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  ContactMail as ContactIcon,
  Work as WorkIcon
} from '@mui/icons-material';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/about', label: 'About', icon: <PersonIcon /> },
    { path: '/projects', label: 'Projects', icon: <WorkIcon /> },
    { path: '/contact', label: 'Contact', icon: <ContactIcon /> }
  ];

  return (
    <AppBar position="static" elevation={2} sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Nutan's Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              startIcon={item.icon}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              variant={location.pathname === item.path ? 'outlined' : 'text'}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function AppContent() {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    return pathnames.map((name, index) => {
      const to = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1);
      return { to, label };
    });
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <Container maxWidth="lg">
      {breadcrumbs.length > 0 && (
        <Paper elevation={1} sx={{ p: 2, mb: 3, mt: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink component={Link} to="/" color="inherit">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </MuiLink>
            {breadcrumbs.map((crumb) => (
              <Typography key={crumb.to} color="text.primary">
                {crumb.label}
              </Typography>
            ))}
          </Breadcrumbs>
        </Paper>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navigation />
        <AppContent />
      </Box>
    </BrowserRouter>
  );
}

export default App;
