import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
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
import { useDispatch } from "react-redux";
import { register } from "redux/actions/userActions";

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

export default function Register() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("name"),
        occupation: data.get("occupation"),
        country: data.get("country"),
        departement: data.get("departement"),
        role: data.get("role"),
        phoneNumber: data.get("phoneNumber"),
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(event) => handleSubmit(event)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone number"
                  label="Phone Number"
                  type="phone number"
                  id="phone number"
                  autoComplete="phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  type="country"
                  id="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  fullWidth
                  name="departement"
                  label="Departement"
                  type="departement"
                  id="departement"
                  autoComplete="departement"
                >
                  <MenuItem value="GA">General Administration</MenuItem>
                  <MenuItem value="RH">Human Resources</MenuItem>
                  <MenuItem value="FA">Finance and Accounting</MenuItem>
                  <MenuItem value="IT">Information Technology</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                  <MenuItem value="LSC">Logistics and Supply Chain</MenuItem>
                  <MenuItem value="sales">Sales</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="occupation"
                  label="Occupation"
                  type="occupation"
                  id="occupation"
                  autoComplete="occupation"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  type="role"
                  id="role"
                  autoComplete="role"
                >
                  <MenuItem value="superadmin">Super Admin</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
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
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
