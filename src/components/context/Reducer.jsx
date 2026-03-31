export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, getData: action.payload.getData };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((e) => e.id !== action.payload.id),
      };
    case "QUANTITY_CHANGE":
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id ? (e.qty = action.payload.qty) : e.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_COLOUR":
      return {
        ...state,
        byColour: action.payload,
      };
    case "FILTER_GENDER":
      return {
        ...state,
        byGender: action.payload,
      };
    case "FILTER_PRICE":
      return {
        ...state,
        byPrice: action.payload,
      };
    case "FILTER_TYPE":
      return {
        ...state,
        byType: action.payload,
      };
    case "SEARCH_FILTER":
      return {
        ...state,
        search: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        byColour: false,
        byGender: false,
        byPrice: false,
        byType: false,
        search: "",
      };
    default:
      return state;
  }
};
