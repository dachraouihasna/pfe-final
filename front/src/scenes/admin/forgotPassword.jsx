import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material";

function ForgotPassword() {
  const theme = useTheme();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/forgot-password", { email })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          borderRadius: "50px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            FORGOT PASSWORD
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autofocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword;
