export const currencyTypes = {
  CHANGE_CURRENCY: "[Currency] Change Currency",
};

// ACTION
const changeCurrency = (code: string) => {
  return {
    type: currencyTypes.CHANGE_CURRENCY, // required
    code, // optional
  };
};

export const currencyActions = { changeCurrency };
