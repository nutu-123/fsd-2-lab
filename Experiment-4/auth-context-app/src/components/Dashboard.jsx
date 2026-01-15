import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Avatar,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import {
  Logout as LogoutIcon,
  Person as PersonIcon,
  Login as LoginIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";

const Dashboard = () => {
  const { userName, loginCount, logout } = useContext(AuthContext);

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={10}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            borderRadius: 3,
            width: "100%",
            maxWidth: 500,
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              width: 80,
              height: 80,
            }}
          >
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            Welcome Back!
          </Typography>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: "600" }}>
            {userName}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            You are successfully logged in
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LoginIcon sx={{ mr: 1 }} />
            <Chip
              label={`Login Count: ${loginCount}`}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: 1,
              }}
            />
          </Box>

          <Button
            variant="contained"
            onClick={logout}
            sx={{
              mt: 2,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              borderRadius: 3,
              padding: "12px 24px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(45deg, #2196F3 60%, #21CBF3 100%)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Card>

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <DashboardIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Your personalized dashboard
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
