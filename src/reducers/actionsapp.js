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
  }

  return { cart, add }
}

export const quantityprod = {
  qnt: [1,2,3,4,5,6,7,8,9]
}

export const Total = (quantity) => {
  const [total, settotal] = useState(0);

  const totals = (quantity) => {
    settotal([quantity * 10]);
  }

  return { total, totals }
}