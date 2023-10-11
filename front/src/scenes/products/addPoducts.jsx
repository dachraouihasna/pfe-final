import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { MenuItem, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/actions/productActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

export default function AddProduct() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: "",
    author: "",
  });
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();

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
            Add Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="price"
                  id="price"
                  autoComplete="price"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rating"
                  label="rating"
                  type="rating"
                  id="rating"
                  autoComplete="rating"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  fullWidth
                  name="category"
                  label="category"
                  type="category"
                  id="category"
                  autoComplete="category"
                >
                  <MenuItem value="clothing">Clothing</MenuItem>
                  <MenuItem value="misc">Misc</MenuItem>
                  <MenuItem value="accessories">Accessories</MenuItem>
                  <MenuItem value="shoes">Shoes</MenuItem>
                </Select>
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
              onClick={() => {
                dispatch(
                  addProduct({ ...product, id: Math.random() }, dispatch)
                );
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
