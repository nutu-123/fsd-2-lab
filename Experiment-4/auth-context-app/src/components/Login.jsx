import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  LockOutlined as LockIcon,
  Login as LoginIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
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
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Welcome Back
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: <PersonIcon sx={{ mr: 1, color: "action.active" }} />,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: 2,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 3,
                padding: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(45deg, #FE6B8B 60%, #FF8E53 100%)",
                  transform: "scale(1.02)",
                },
                transition: "all 0.3s ease",
              }}
              startIcon={<LoginIcon />}
            >
              Sign In
            </Button>
          </Box>
        </Card>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary" align="center">
              Authentication Context App
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;