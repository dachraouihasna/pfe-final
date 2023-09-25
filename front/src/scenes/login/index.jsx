import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../redux/actions/userActions";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { MenuItem, useTheme } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login({ history }) {
  const theme = useTheme();

  const [user, setUser] = useState({});
  //const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, history));
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, [dispatch]);

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
            Log In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
              Log In
            </Button>
          </Box>
          <Link to="/forgot-password">Forgot Password</Link>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
