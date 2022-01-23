import { useState } from 'react';
import { TYPES } from "../actions/appactions";
import articles from "../helpers/articles.json";

export const shoppingInitialState = {
  products: articles
};

export const Count = () => {
  const [counter, setcounter] = useState(0)

  const incrementa = () => {
    setcounter(counter + 1);
  }

  return { counter, incrementa }
}

export const Addcart = (p) => {
  const [cart, setcart] = useState(p);


  const add = (p) => {
    setcart([...cart, p]);
    //setcart(prevLightState => ({...prevLightState, ...p}))
    //setcart(cart => {...cart, p});
    //setcart(arr => [...arr, `${arr.length}`]);
    //setcart(oldArray => [...oldArray, p]);
  }

  return { cart, add }
}

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART:
    default:
      return state;
  }
}