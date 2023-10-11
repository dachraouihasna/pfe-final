import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT_BY_ID
}from "../constants/products"

export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3000/products", product);
    console.log(res);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);
    console.log(res);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:3000/Products/${product.id}`,
      product
    );
    console.log(res);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: product,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(res.data);
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
