const initialState = {
  show: false,
  products: [],
  product: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case 'GET_PRODUCT_BY_ID':
          return {
              ...state,
              product: payload,
          };

      case 'ADD_PRODUCT':
          return {
              ...state,
              products: [...state.products, payload],
          };
      case 'UPDATE_PRODUCT':
          return {
              ...state,
              products: [...state.products, payload],
          };
      case 'DELETE_PRODUCTS':
          return {
              ...state,
              products: state.products.filter(
                  (product) => product.id !== payload
              ),
          };

      default:
          return state;
  }
};