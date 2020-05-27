// jshint esversion:9

const buttonText = ["Check Out", "Confirm", "Loading...", "Placed"];

const INITIAL_STATE = {
  buttonText: 0,
  qty1: 0,
  qty2: 0,
  qty3: 0,
  qty4: 0,
  qty5: 0,
  vendor: 'Vendor 1'
};

const ordersReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SET_VENDOR":
        return {
        ...state,
        vendor: action.payload
        };
    case "SET_BUTTON_TEXT":
      return {
        ...state,
        buttonText: (state.buttonText + 1) % 4
      };
    case "SET_QUANTITY_1":
      return {
        ...state,
        qty1: action.payload
      };
    case "SET_QUANTITY_2":
      return {
        ...state,
        qty2: action.payload
      };
    case "SET_QUANTITY_3":
      return {
        ...state,
        qty3: action.payload
      };
    case "SET_QUANTITY_4":
      return {
        ...state,
        qty4: action.payload
      };
    case "SET_QUANTITY_5":
      return {
        ...state,
        qty5: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
